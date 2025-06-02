import React, { useState } from "react";
import "../css/ChatWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import zaloIcon from "@/imgs/zaloIcon.png";
import facebookIcon from "@/imgs/facebookIcon.png";
import { faComments, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const ChatWidget = () => {
    const { t } = useTranslation('chatSection');
    const [phone, setPhone] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone.trim()) {
            setMessage(t('please_enter_phone'));
            return;
        }
        const phoneRegex = /^0\d{9}$/; // Bắt đầu bằng 0, tổng cộng 10 số
        if (!phoneRegex.test(phone)) {
            toast({
                title: t('invalid_phone'),
                description: t('phone_requirements'),
                variant: "default",
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append("phone", phone);
            formData.append("subject", "Khách để lại số điện thoại từ website");
            formData.append("_captcha", "false");

            const res = await fetch("https://formsubmit.co/ajax/thanhduydang97@gmail.com", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (res.ok) {
                toast({
                    title: t('request_sent'),
                    description: t('we_will_contact'),
                    variant: "default",
                });
                setPhone(""); // clear input
            } else {
                toast({
                    title: t('error_occurred'),
                    description: t('please_try_again'),
                    variant: "default",
                });
            }
        } catch (error) {
            toast({
                title: t('error_occurred'),
                description: t('please_try_again'),
                variant: "default",
            });
        }
    };

    return (
        
       <div className="chat-widget">
            {/* Toggle button */}
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon
                    icon={isOpen ? faTimes : faComments}
                    size="2x"
                    color="#0084FF"
                />
            </button>

            {/* Chat icons */}
            {isOpen && (
                <div className="chat-icons">
                    <a
                        href="tel:0395782954"
                        className={`chat-btn phone ${isOpen ? "wiggle" : ""}`}
                    >
                        <FontAwesomeIcon icon={faPhone} size="lg" color="#34A853" />
                    </a>

                    <a
                        href="https://zalo.me/84395782954"
                        target="_blank"
                        rel="noreferrer"
                        className={`chat-btn zalo ${isOpen ? "wiggle" : ""}`}
                    >
                        <img src={zaloIcon} alt="Zalo" />
                    </a>

                    <a
                        href="https://web.facebook.com/profile.php?id=61576713294725"
                        target="_blank"
                        rel="noreferrer"
                        className={`chat-btn fb ${isOpen ? "wiggle" : ""}`}
                    >
                        <img src={facebookIcon} alt="Messenger" />
                    </a>
                </div>
            )}

            {/* Phone form */}
            {isOpen && (
                <form className="phone-form" onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        name="Số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t('leave_phone')}
                        required
                    />
                    <button type="submit">{t('send')}</button>
                </form>
            )}

            {/* Message display */}
            {message && <p className="submit-message">{message}</p>}
        </div>
    );
};

export default ChatWidget;
