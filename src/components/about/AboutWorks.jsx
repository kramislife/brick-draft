import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutWorks = ({ data, animations }) => {
  const {
    headerAnimation,
    stepAnimation,
    tipsHeaderAnimation,
    tipAnimation,
    numberAnimation,
  } = animations;

  return (
    <section className="py-10 px-5">
      <motion.div {...headerAnimation} className="text-center mb-5 md:mb-10">
        <Badge variant="accent" className="text-sm font-medium mb-5 py-2 px-5">
          {data.badge}
        </Badge>
        <h2 className="text-3xl font-bold mb-4"> {data.title}</h2>
        <p className="max-w-4xl mx-auto italic leading-relaxed">
          {data.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {data.steps.map((step, index) => (
          <motion.div key={index} {...stepAnimation(index)}>
            <Card className="dark:border-none">
              <CardContent className="p-8 text-center">
                <motion.div
                  {...numberAnimation}
                  className="w-12 h-12 bg-accent dark:text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-bold"
                >
                  {index + 1}
                </motion.div>
                <CardTitle className="text-xl font-bold mb-4">
                  {step.title}
                </CardTitle>
                <p className="text-sm italic">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tips Section */}
      <motion.div {...tipsHeaderAnimation} className="text-center mb-8">
        <Badge variant="accent" className="text-sm font-medium mb-5 py-2 px-5">
          {data.tipsBadge}
        </Badge>
        <h2 className="text-2xl font-bold mb-4">{data.tipsTitle}</h2>
        <p className="max-w-4xl mx-auto italic leading-relaxed">
          {data.tipsDescription}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.tips.map((tip, index) => {
          const IconComponent = tip.icon;
          return (
            <motion.div key={index} {...tipAnimation(index)}>
              <Card className="dark:border-none h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">
                    {tip.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutWorks;
