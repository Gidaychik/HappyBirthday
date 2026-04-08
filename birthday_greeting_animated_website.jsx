import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BirthdayPage() {
  const [opened, setOpened] = useState(false);

  // Stable confetti (generated once)
  const confetti = useMemo(() => {
    return Array.from({ length: 120 }).map(() => ({
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      rotate: Math.random() * 360,
      color: ["#ff006e", "#ffbe0b", "#3a86ff", "#8338ec", "#06d6a0"][
        Math.floor(Math.random() * 5)
      ],
      drift: Math.random() * 80 - 40
    }));
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-200 via-gray-100 to-indigo-200 overflow-hidden relative">
      {!opened ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, -3, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-6xl mb-6"
          >
            🎁
          </motion.div>

          <h1 className="text-2xl text-gray-700 mb-4">
            Невеликий знак уваги для Вас
          </h1>

          <Button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg hover:scale-105 transition-all"
            onClick={() => setOpened(true)}
          >
            Відкрити ✨
          </Button>
        </motion.div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Confetti */}
          {confetti.map((c, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-3 rounded-sm"
              style={{
                left: `${c.x}%`,
                top: "-20px",
                backgroundColor: c.color
              }}
              initial={{ y: -50, rotate: c.rotate }}
              animate={{ y: "110vh", rotate: c.rotate + 360, x: c.drift }}
              transition={{
                duration: c.duration,
                delay: c.delay,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Party emoji */}
          <motion.div
            className="absolute top-10 left-10 text-5xl"
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🥳🎉
          </motion.div>

          {/* Bouquet */}
          <motion.div
            initial={{ x: 150, y: 150, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-4 right-4 text-8xl"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💐
            </motion.div>
          </motion.div>

          {/* Gift */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-7xl mb-6"
          >
            🎁
          </motion.div>

          {/* Letter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-2xl"
          >
            <h1 className="text-4xl text-gray-800 mb-4 font-semibold">
              З Днем Народження, Наталю! 🌸
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Шановна Наталю!<br/><br/>
              Щиро вітаємо Вас з Днем народження 🌷<br/>
              Нехай кожен день приносить радість, гармонію та натхнення,<br/>
              а у серці завжди панують тепло і спокій.<br/><br/>
              Бажаємо міцного здоров'я, легкості у справах та приємних моментів у житті.<br/>
              Нехай поруч будуть щирі люди, а всі задуми легко втілюються в реальність ✨
            </p>

            <p className="text-md text-gray-500 mt-4">
              З найкращими побажаннями та повагою 💌
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}