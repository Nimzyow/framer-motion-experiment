import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 }
};

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: "hidden" }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>
              Lorem ipsum dolor amet poke biodiesel offal chia DIY four dollar
              toast kickstarter normcore af lyft edison bulb green juice you
              probably haven't heard of them. Cred succulents kinfolk
              cold-pressed, vexillologist post-ironic deep v etsy la croix
              live-edge fashion axe beard coloring book brooklyn. Retro squid
              portland, YOLO readymade church-key meh hexagon narwhal woke lo-fi
              3 wolf moon man braid keytar. Hella poke green juice, roof party
              hell of lo-fi vinyl williamsburg vaporware pok pok normcore yr
              farm-to-table master cleanse.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
