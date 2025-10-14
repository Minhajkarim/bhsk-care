import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "0097431599965";
  const message = "Hello! I would like to inquire about your nursing services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-card hover:shadow-lg hover:scale-110 transition-all duration-300 animate-scale-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
