"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card from "./card/Card";

const Results = ({ results }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariant = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-6xl mx-auto p-4"
    >
      {results.map((result, index) => (
        <motion.div
          variants={cardVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.4, delay: index * 0.3 }}
          key={index}
        >
          <Card result={result} />
        </motion.div>
      ))}
    </div>
  );
};

export default Results;
