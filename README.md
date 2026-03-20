# A/B Test Significance Calculator

A lightweight, interactive statistical significance calculator for A/B testing — built from scratch using HTML, CSS, and JavaScript. No libraries, no frameworks.

🔗 **Live Demo:** [deepak3517.github.io/ab-test-calculator](https://deepak3517.github.io/ab-test-calculator/)
---

## Features
- Two-proportion Z-test implementation
- Real-time Z-score, p-value, and confidence interval calculation
- Dynamic significance level selection (90%, 95%, 99%)
- Color-coded verdict — Significant or Not Significant
- Clean, minimalist UI — no dependencies
---

## Stats Concepts Implemented
| Concept | Description |
|---|---|
| Conversion Rate | Conversions / Visitors for each group |
| Pooled Proportion | Combined rate under null hypothesis |
| Standard Error | Measures expected random variation |
| Z-Score | How many SEs the observed difference is from zero |
| P-Value | Probability the result is due to chance |
| Confidence Interval | Range of the true difference at chosen confidence level |
---

## How to Use
1. Enter visitors and conversions for Control (A) and Variant (B)
2. Select your confidence level (95% is standard)
3. Click **Calculate**
4. Read the verdict — Significant means the difference is real, not random
---

## Tech Stack
- HTML5 — semantic structure
- CSS3 — minimalist card layout, dynamic class-based styling
- Vanilla JavaScript — DOM manipulation, statistical calculations
---

## Run Locally
git clone https://github.com/Deepak3517/ab-test-calculator.git
cd ab-test-calculator
# Open index.html in your browser or use Live Server in VS Code
---

## Key Implementation Note
The normal CDF approximation used for p-value calculation is based on the Abramowitz & Stegun method — accurate to 7 decimal places without any external math libraries.
---

*Built as a portfolio project to demonstrate applied statistics and front-end development skills.*
