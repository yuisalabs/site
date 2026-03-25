export function HeroStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lexend+Mega:wght@100..900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

      @keyframes popText {
        0%, 15% { transform: translate(-17px, 17px); }
        25%, 85% { transform: translate(0px, 0px); }
        95%, 100% { transform: translate(-17px, 17px); }
      }

      @keyframes popShadowAnim {
        0%, 15% { opacity: 0; }
        25%, 85% { opacity: 1; }
        95%, 100% { opacity: 0; }
      }
    `}</style>
  )
}
