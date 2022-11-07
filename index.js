const toxy = require("toxy");

const proxy = toxy();
const rules = proxy.rules;
const poisons = proxy.poisons;

const FORWARD_TO = process.env.FORWARD_TO || "http://localhost";
const LATENCY_MIN = process.env.LATENCY_MIN || 0;
const LATENCY_MAX = process.env.LATENCY_MAX || 0;
const PROBABILITY = process.env.PROBABILITY || 100;
const PORT = process.env.PORT || 3000;

proxy
  .forward(FORWARD_TO)
  .poison(poisons.latency({ min: LATENCY_MIN, max: LATENCY_MAX }))
  .withRule(rules.probability(PROBABILITY));

proxy.all("/*");

proxy.listen(PORT);
