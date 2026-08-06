export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919217999511?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20The%20Global%20Language%20Academy%20courses."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center w-14 h-14 bg-transparent rounded-xl shadow-md hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Outer pulsing ring */}
      <span className="absolute inset-0 rounded-xl bg-[#25D366] opacity-30 animate-ping group-hover:animate-none"></span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/whatsapp-icon.png"
        alt="WhatsApp Logo"
        className="w-full h-full object-contain relative z-10 rounded-xl"
      />
    </a>
  );
}
