import type { Course, Lesson, QuizQuestion, CourseInfo } from "@/types/course";

/**
 * COURSE DATA
 *
 * In Next.js App Router, this data can be:
 * 1. Imported directly in Server Components (no API call needed)
 * 2. Fetched from a database using server-side code
 * 3. Loaded from a CMS via API route handlers
 *
 * For this migration, we keep the static data structure
 * but it's now accessible directly on the server.
 */

const financialLiteracyCourse: Course = {
  courseInfo: {
    title: "Financial Literacy for Students",
    description:
      "Master the essential money skills that will set you up for life! Learn budgeting, saving, investing, and smart spending in a fun, interactive way.",
    totalLessons: 8,
    totalDuration: "2 hours 30 minutes",
    level: "Beginner",
    instructor: {
      name: "Sarah Mitchell",
      title: "Financial Education Expert",
      bio: "Sarah has helped over 50,000 students master their finances with her engaging teaching style.",
    },
    whatYouWillLearn: [
      "Create and stick to a personal budget",
      "Build an emergency fund and save for goals",
      "Understand credit scores and manage debt",
      "Make smart spending decisions",
      "Start investing early for long-term wealth",
      "Protect yourself from financial scams",
    ],
  },
  lessons: [
    {
      id: 1,
      title: "Introduction to Money Management",
      duration: "15 min",
      content: [
        { type: "heading", content: "Welcome to Your Financial Journey!" },
        { type: "paragraph", content: "Money is a tool that can help you achieve your dreams—whether that's buying your first car, traveling the world, or starting your own business. The earlier you learn how to manage money wisely, the more options and freedom you'll have in life." },
        { type: "paragraph", content: "Financial literacy isn't just about being rich—it's about understanding how money works so you can make smart decisions. Studies show that people who learn money management skills early are far more likely to be financially secure as adults." },
        { type: "list", items: ["Money is a tool, not a goal—it helps you live the life you want", "Financial habits formed now will shape your entire future", "You don't need to earn a lot to manage money well", "Small, consistent actions create big results over time", "Everyone makes money mistakes—the key is learning from them"] },
        { type: "tip", content: "Start tracking every penny you spend for one week. You'll be surprised where your money actually goes! Use a simple notebook or a free app like Mint or YNAB." },
        { type: "example", title: "The Latte Factor", description: "If you spend £3 on a coffee every school day, that's £15 a week, £60 a month, and £720 a year. Invested over 10 years at 7% return, that becomes over £10,000! Small daily spending adds up to huge amounts over time." },
        { type: "key-point", title: "Key Takeaway", content: "Financial literacy is a life skill, not a school subject. The habits you build now—tracking spending, saving regularly, and thinking before you buy—will serve you for decades to come." },
      ],
    },
    {
      id: 2,
      title: "Understanding Income & Expenses",
      duration: "20 min",
      content: [
        { type: "heading", content: "Where Does Your Money Come From?" },
        { type: "paragraph", content: "Before you can manage your money, you need to understand the two sides of the equation: income (money coming in) and expenses (money going out). When your income is greater than your expenses, you have a surplus. When expenses exceed income, you're in trouble." },
        { type: "paragraph", content: "As a student, your income might come from pocket money, a part-time job, birthday gifts, or freelance work. Your expenses include everything from food and transport to entertainment and subscriptions. Understanding both sides is the foundation of financial control." },
        { type: "list", items: ["Active income: money earned by working (jobs, freelancing, tutoring)", "Passive income: money earned without active work (interest, investments)", "Fixed expenses: bills that stay the same each month (subscriptions, phone plan)", "Variable expenses: spending that changes month to month (food, entertainment)", "Needs vs. wants: essentials versus things you'd like but can live without"] },
        { type: "tip", content: "List all your income sources and expenses for last month. Categorise each expense as a 'need' or a 'want'. Most people find that 30-50% of their spending is on wants!" },
        { type: "example", title: "Monthly Money Map", description: "Alex earns £200/month from a weekend job and £40 pocket money. Fixed expenses: £30 phone, £20 transport = £50. Variable expenses: £80 food, £40 entertainment = £120. That leaves £70 to save or invest. Knowing these numbers gives Alex complete control." },
        { type: "key-point", title: "The Golden Rule", content: "Always know exactly how much money is coming in and going out. You can't manage what you don't measure. Track your income and expenses every month without fail." },
      ],
    },
    {
      id: 3,
      title: "Creating Your First Budget",
      duration: "25 min",
      content: [
        { type: "heading", content: "Your Money, Your Plan" },
        { type: "paragraph", content: "A budget is simply a plan for your money. It tells every pound where to go instead of wondering where it went. The most popular method for beginners is the 50-30-20 rule: 50% of income on needs, 30% on wants, and 20% on savings." },
        { type: "paragraph", content: "Creating a budget doesn't mean you can't have fun—it means you're choosing how to have fun without running out of money. Think of it as giving yourself permission to spend on things you love, guilt-free, because you've already planned for it." },
        { type: "list", items: ["Step 1: Calculate your total monthly income", "Step 2: List all your fixed expenses (rent, phone, subscriptions)", "Step 3: Estimate your variable expenses (food, transport, fun)", "Step 4: Subtract expenses from income to find your surplus", "Step 5: Allocate your surplus to savings goals"] },
        { type: "tip", content: "Use the envelope method: put cash for each spending category into separate envelopes. When an envelope is empty, you're done spending in that category for the month. Digital versions of this exist in apps like YNAB." },
        { type: "example", title: "The 50-30-20 Budget in Action", description: "Sam earns £500/month. Needs (50%) = £250 for rent, food, transport. Wants (30%) = £150 for streaming, eating out, hobbies. Savings (20%) = £100 goes straight to a savings account. Simple, effective, and easy to follow." },
        { type: "key-point", title: "Budget = Freedom", content: "A budget isn't a restriction—it's a roadmap. People who budget consistently report feeling less stressed about money and more confident about their financial future." },
      ],
    },
    {
      id: 4,
      title: "The Power of Saving",
      duration: "20 min",
      content: [
        { type: "heading", content: "Pay Yourself First" },
        { type: "paragraph", content: "Saving money is the single most important financial habit you can build. The concept of 'paying yourself first' means setting aside savings before you spend on anything else. Even small amounts add up dramatically over time thanks to compound interest." },
        { type: "paragraph", content: "An emergency fund is your financial safety net—money set aside for unexpected expenses like a broken phone, medical bills, or sudden travel. Experts recommend saving 3-6 months of expenses, but as a student, aim for at least £500 to start." },
        { type: "list", items: ["Set up automatic transfers to savings on payday", "Start with just 10% of any money you receive", "Keep your emergency fund in a separate, accessible account", "Set specific savings goals with deadlines (e.g., £1,000 by December)", "Celebrate milestones to stay motivated"] },
        { type: "tip", content: "Try the 24-hour rule: before any non-essential purchase over £20, wait 24 hours. You'll find that most impulse buys lose their appeal overnight!" },
        { type: "example", title: "The Power of Starting Early", description: "If you save £50/month starting at age 16 and invest it at 7% annual return, by age 30 you'll have over £15,000. Wait until 25 to start, and you'll only have about £8,500. Those early years are worth thousands!" },
        { type: "key-point", title: "Compound Interest Is Magic", content: "Albert Einstein reportedly called compound interest the eighth wonder of the world. Your money earns interest, then that interest earns interest. The earlier you start, the more powerful this effect becomes." },
      ],
    },
    {
      id: 5,
      title: "Smart Spending Habits",
      duration: "18 min",
      content: [
        { type: "heading", content: "Spend With Intention" },
        { type: "paragraph", content: "Smart spending isn't about being cheap—it's about being intentional. It means spending money on things that genuinely add value to your life and cutting back on things that don't. Every purchase is a choice between what you want now and what you want most." },
        { type: "paragraph", content: "Advertisers spend billions to make you want things you don't need. Understanding marketing tactics helps you resist impulse buying and make conscious spending decisions. Ask yourself: 'Am I buying this because I need it, or because I was told to want it?'" },
        { type: "list", items: ["Always compare prices before buying—use comparison websites", "Distinguish between 'I want it' and 'I need it'", "Look for student discounts—many services offer 10-50% off", "Buy quality items that last instead of cheap items you replace often", "Unsubscribe from marketing emails to reduce temptation"] },
        { type: "tip", content: "Calculate the 'hours of work' cost: if you earn £8/hour and want a £80 item, that's 10 hours of your life. Is it worth 10 hours of work? This reframes spending in terms of your time." },
        { type: "example", title: "Needs vs. Wants in Practice", description: "A smartphone is a need for communication and school. The latest £1,200 flagship model is a want—a £300 phone does the same job. The £900 difference could fund a holiday, an online course, or months of savings." },
        { type: "key-point", title: "The True Cost", content: "Every pound you spend is a pound that can't be saved or invested. Before buying, ask: 'Will this matter to me in a month? A year?' If not, skip it and put that money toward something that will." },
      ],
    },
    {
      id: 6,
      title: "Understanding Credit & Debt",
      duration: "22 min",
      content: [
        { type: "heading", content: "Credit: A Powerful Tool (Handle With Care)" },
        { type: "paragraph", content: "Credit is borrowed money that you promise to pay back, usually with interest. Used wisely, it helps you build a credit score, buy a home, or start a business. Used poorly, it can trap you in a cycle of debt that takes years to escape." },
        { type: "paragraph", content: "Your credit score is like a financial report card. It ranges from 300-850 and tells lenders how trustworthy you are with borrowed money. A high score unlocks lower interest rates, better deals, and more opportunities. A low score can cost you thousands over your lifetime." },
        { type: "list", items: ["Good debt: borrowing for things that grow in value (education, property)", "Bad debt: borrowing for things that lose value (clothes, gadgets, holidays)", "Interest is the cost of borrowing—credit cards can charge 20-30% APR", "Minimum payments are a trap: paying only the minimum means years of debt", "Your credit score affects loans, rentals, phone contracts, and even some jobs"] },
        { type: "tip", content: "If you get a credit card, treat it like a debit card—never charge more than you can pay off in full each month. This builds your credit score without costing you a penny in interest." },
        { type: "example", title: "The Debt Snowball", description: "Emma has three debts: £200, £500, and £1,000. She pays minimums on all but attacks the smallest first. Once the £200 is gone, she rolls that payment into the £500 debt. Each victory builds momentum and motivation to become debt-free." },
        { type: "key-point", title: "The Golden Rule of Credit", content: "Never borrow money for something that decreases in value. If you can't afford to pay cash for a want, you can't afford it. Use credit strategically for needs that build your future." },
      ],
    },
    {
      id: 7,
      title: "Introduction to Investing",
      duration: "20 min",
      content: [
        { type: "heading", content: "Make Your Money Work for You" },
        { type: "paragraph", content: "Investing is putting your money into assets that have the potential to grow in value over time. While saving protects your money, investing grows it. Over the long term, investing in the stock market has historically returned about 7-10% per year on average." },
        { type: "paragraph", content: "The key to investing is starting early and being patient. You don't need to be rich to invest—many platforms let you start with as little as £1. The most important factor isn't how much you invest, but how long your money stays invested." },
        { type: "list", items: ["Stocks: buying ownership shares in companies", "Bonds: lending money to governments or companies for fixed interest", "Index funds: a basket of stocks that tracks the whole market (low cost, low effort)", "Diversification: spreading investments across different assets to reduce risk", "Risk and reward: higher potential returns usually mean higher risk"] },
        { type: "tip", content: "Start with a simple index fund that tracks the entire stock market (like a FTSE All-Share or S&P 500 fund). It's diversified, low-cost, and has historically outperformed most professional fund managers." },
        { type: "example", title: "Time in the Market Beats Timing the Market", description: "If you invested £1,000 in the S&P 500 in 2010 and left it alone, it would be worth over £4,000 by 2024. If you tried to time the market and missed just the 10 best days, you'd have less than half that amount." },
        { type: "key-point", title: "Start Small, Start Now", content: "You don't need to be an expert to start investing. A simple, diversified index fund with regular monthly contributions is one of the most powerful wealth-building strategies in history. Time is your greatest advantage—use it." },
      ],
    },
    {
      id: 8,
      title: "Protecting Yourself from Scams",
      duration: "15 min",
      content: [
        { type: "heading", content: "If It Sounds Too Good to Be True..." },
        { type: "paragraph", content: "Financial scams cost people billions every year, and young people are increasingly targeted through social media, texts, and emails. Scammers are sophisticated—they create fake websites, impersonate trusted brands, and use psychological pressure to trick you into handing over money or personal information." },
        { type: "paragraph", content: "The best defence against scams is knowledge. Once you understand how scammers operate, their tricks become much easier to spot. Remember: legitimate companies will never pressure you to act immediately, ask for your PIN, or promise guaranteed returns." },
        { type: "list", items: ["Phishing: fake emails or texts pretending to be from banks or services", "Ponzi schemes: paying old investors with new investors' money (always collapses)", "Fake job offers: asking for upfront fees or personal details", "Social media scams: fake giveaways, investment 'gurus', and money-flipping schemes", "Romance scams: building fake relationships to ask for money"] },
        { type: "tip", content: "Never click links in unexpected emails or texts. Instead, go directly to the company's website by typing the address yourself. Enable two-factor authentication on all financial accounts." },
        { type: "example", title: "Spotting a Scam", description: "You receive a DM saying 'Send me £50 and I'll send back £500 through forex trading!' Red flags: guaranteed returns, pressure to act fast, asking for money upfront, and too-good-to-be-true promises. This is a classic money-flipping scam." },
        { type: "key-point", title: "Protect Yourself", content: "Never share passwords, PINs, or full bank details with anyone. Be skeptical of any unsolicited offer that promises easy money. If you think you've been scammed, contact your bank immediately and report it to Action Fraud." },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 1,
      question: "What is the 50-30-20 rule in budgeting?",
      options: [
        "Spend 50% on wants, 30% on needs, 20% on savings",
        "Spend 50% on needs, 30% on wants, 20% on savings",
        "Save 50%, spend 30% on needs, 20% on wants",
        "Invest 50%, save 30%, spend 20%",
      ],
      correctAnswer: 1,
      explanation:
        "The 50-30-20 rule suggests spending 50% on needs, 30% on wants, and saving 20%.",
    },
    {
      id: 2,
      question: "What is an emergency fund?",
      options: [
        "Money set aside for vacations",
        "A savings account for unexpected expenses",
        "A type of investment account",
        "Money borrowed from the bank",
      ],
      correctAnswer: 1,
      explanation:
        "An emergency fund is money saved specifically for unexpected expenses like medical bills or car repairs.",
    },
    {
      id: 3,
      question: "Which of these is considered a 'need' in budgeting?",
      options: [
        "A new video game",
        "A streaming subscription",
        "Rent or housing costs",
        "Dining out with friends",
      ],
      correctAnswer: 2,
      explanation:
        "Rent and housing are essential needs. Wants include entertainment and dining out.",
    },
    {
      id: 4,
      question: "What is compound interest?",
      options: [
        "Interest charged only on the original amount",
        "Interest earned on both the principal and previously earned interest",
        "A fixed monthly fee charged by banks",
        "The penalty for withdrawing savings early",
      ],
      correctAnswer: 1,
      explanation:
        "Compound interest is earned on both your original deposit and the interest it has already accumulated, making your money grow faster over time.",
    },
    {
      id: 5,
      question: "What is a credit score used for?",
      options: [
        "To determine your school grades",
        "To measure how physically fit you are",
        "To assess how likely you are to repay borrowed money",
        "To calculate how much tax you owe",
      ],
      correctAnswer: 2,
      explanation:
        "A credit score tells lenders how reliable you are with borrowed money. A higher score can help you get lower interest rates on loans.",
    },
    {
      id: 6,
      question: "What is the difference between a debit card and a credit card?",
      options: [
        "There is no difference",
        "A debit card spends your own money; a credit card borrows money from the bank",
        "A credit card is always free to use",
        "A debit card charges higher fees",
      ],
      correctAnswer: 1,
      explanation:
        "A debit card takes money directly from your bank account, while a credit card borrows money that you must pay back, often with interest.",
    },
    {
      id: 7,
      question: "Why is it important to start saving early?",
      options: [
        "Banks give more rewards to younger savers",
        "You have more time for compound interest to grow your money",
        "Savings accounts close when you turn 30",
        "It is required by law to start saving before age 18",
      ],
      correctAnswer: 1,
      explanation:
        "Starting early gives compound interest more time to work, meaning even small amounts can grow significantly over many years.",
    },
    {
      id: 8,
      question: "What is a common sign of a financial scam?",
      options: [
        "A well-known company offering a product on sale",
        "A promise of guaranteed high returns with zero risk",
        "A bank asking you to set up a password",
        "Receiving a pay cheque from your employer",
      ],
      correctAnswer: 1,
      explanation:
        "If something promises guaranteed high returns with no risk, it is almost certainly a scam. All legitimate investments carry some level of risk.",
    },
    {
      id: 9,
      question: "What does 'paying yourself first' mean?",
      options: [
        "Spending money on whatever you want before paying bills",
        "Setting aside savings before spending on anything else",
        "Giving yourself a cash bonus every week",
        "Only buying things for yourself, not for others",
      ],
      correctAnswer: 1,
      explanation:
        "Paying yourself first means automatically putting a portion of your income into savings before paying other expenses.",
    },
    {
      id: 10,
      question: "What is inflation?",
      options: [
        "When the stock market crashes",
        "When you get a raise at work",
        "A general increase in prices that reduces the purchasing power of money over time",
        "A type of tax imposed by the government",
      ],
      correctAnswer: 2,
      explanation:
        "Inflation means prices rise over time, so the same amount of money buys fewer goods and services in the future.",
    },
    {
      id: 11,
      question: "Which is the safest place to keep your emergency fund?",
      options: [
        "Under your mattress",
        "In cryptocurrency",
        "In a high-yield savings account at an insured bank",
        "Invested in individual stocks",
      ],
      correctAnswer: 2,
      explanation:
        "A high-yield savings account at an insured bank keeps your emergency fund safe, accessible, and earning some interest.",
    },
    {
      id: 12,
      question: "What is diversification in investing?",
      options: [
        "Putting all your money in one stock you trust",
        "Spreading your investments across different types of assets to reduce risk",
        "Investing only in foreign companies",
        "Changing your investments every day",
      ],
      correctAnswer: 1,
      explanation:
        "Diversification means spreading investments across different assets so that a loss in one area does not wipe out your entire portfolio.",
    },
  ],
  heroImage: "/course-finance-hero.png",
  gradientColor: "from-green-500 to-emerald-600",
};

const emotionalIntelligenceCourse: Course = {
  courseInfo: {
    title: "Mastering Emotional Intelligence",
    description:
      "Develop the emotional skills that lead to success in life and relationships. Learn to understand, manage, and express your emotions effectively.",
    totalLessons: 6,
    totalDuration: "2 hours",
    level: "Beginner",
    instructor: {
      name: "Dr. James Chen",
      title: "Psychology Professor",
    },
    whatYouWillLearn: [
      "Identify and name your emotions accurately",
      "Develop self-awareness and emotional regulation",
      "Build empathy and social awareness",
      "Manage stress and difficult emotions",
      "Improve communication in relationships",
      "Make better decisions under pressure",
    ],
  },
  lessons: [
    {
      id: 1,
      title: "What is Emotional Intelligence?",
      duration: "15 min",
      content: [
        { type: "heading", content: "Your Emotions Are a Superpower" },
        { type: "paragraph", content: "Emotional Intelligence (EQ) is the ability to recognise, understand, manage, and effectively use emotions—both your own and those of others. Research shows that EQ is a stronger predictor of success than IQ. People with high EQ earn more, have better relationships, and experience less stress." },
        { type: "paragraph", content: "Unlike IQ, which is relatively fixed, emotional intelligence can be developed and strengthened at any age. Think of it as a muscle: the more you practice, the stronger it gets. This course will give you the tools to build your emotional fitness." },
        { type: "list", items: ["Self-awareness: knowing what you're feeling and why", "Self-regulation: managing your emotional responses", "Motivation: using emotions to drive you toward goals", "Empathy: understanding how others feel", "Social skills: building and maintaining strong relationships"] },
        { type: "tip", content: "Start an emotion journal: three times a day, pause and write down what you're feeling and what triggered it. After a week, you'll start noticing patterns you never saw before." },
        { type: "example", title: "EQ vs. IQ in Real Life", description: "Two students get a bad grade. The student with low EQ panics, blames the teacher, and gives up. The student with high EQ feels disappointed, acknowledges the feeling, then calmly analyses what went wrong and makes a plan to improve. Same situation, completely different outcomes." },
        { type: "key-point", title: "Why EQ Matters", content: "Emotional intelligence affects every area of your life—from school performance and friendships to future career success and mental health. The good news? It's a skill you can learn and improve starting today." },
      ],
    },
    {
      id: 2,
      title: "Self-Awareness",
      duration: "20 min",
      content: [
        { type: "heading", content: "Know Thyself" },
        { type: "paragraph", content: "Self-awareness is the foundation of emotional intelligence. It means understanding your emotions as they happen, knowing your strengths and weaknesses, and recognising how your feelings affect your thoughts and behaviour. Without self-awareness, you're operating on autopilot." },
        { type: "paragraph", content: "Most people think they're self-aware, but research suggests only about 10-15% of people truly are. The gap between how we see ourselves and how others see us can be enormous. Developing genuine self-awareness takes courage and honest reflection." },
        { type: "list", items: ["Name your emotions specifically—'frustrated' is more useful than 'bad'", "Notice physical sensations that accompany emotions (tight chest, clenched jaw)", "Identify your emotional triggers—what situations push your buttons?", "Ask trusted friends for honest feedback about your behaviour", "Reflect on your reactions: were they proportional to the situation?"] },
        { type: "tip", content: "Expand your emotional vocabulary. Instead of just 'happy' or 'sad', try 'content', 'grateful', 'anxious', 'overwhelmed', or 'frustrated'. The more precisely you can name an emotion, the better you can manage it." },
        { type: "example", title: "The Body-Emotion Connection", description: "Before a presentation, you notice your heart racing, palms sweating, and stomach churning. A self-aware person recognises: 'I'm feeling anxious about being judged.' This awareness alone reduces the emotion's power and lets you choose how to respond." },
        { type: "key-point", title: "Awareness Is the First Step", content: "You can't change what you don't notice. By paying attention to your emotional patterns, you gain the power to choose your responses rather than being controlled by automatic reactions." },
      ],
    },
    {
      id: 3,
      title: "Managing Your Emotions",
      duration: "25 min",
      content: [
        { type: "heading", content: "Respond, Don't React" },
        { type: "paragraph", content: "Self-regulation doesn't mean suppressing your emotions or pretending everything is fine. It means experiencing your emotions fully while choosing how to express and act on them. The goal is to respond thoughtfully rather than react impulsively." },
        { type: "paragraph", content: "When emotions are intense, your brain's 'fight or flight' centre takes over, and the rational thinking part goes offline. This is called an 'amygdala hijack'. Learning to pause in that moment—even for just six seconds—allows your thinking brain to re-engage." },
        { type: "list", items: ["The 6-second pause: count to six before responding when upset", "Deep breathing: 4 seconds in, 4 seconds hold, 4 seconds out", "Reframing: look at the situation from a different perspective", "Physical movement: walk, stretch, or exercise to release tension", "The STOP technique: Stop, Take a breath, Observe, Proceed mindfully"] },
        { type: "tip", content: "When you feel overwhelmed, try the 5-4-3-2-1 grounding technique: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. It brings you back to the present moment." },
        { type: "example", title: "Choosing Your Response", description: "A friend makes a hurtful comment. Your automatic reaction might be to snap back or shut down. But with self-regulation, you pause, breathe, and say: 'That comment hurt me. Can we talk about it?' This protects the relationship while honouring your feelings." },
        { type: "key-point", title: "The Power of the Pause", content: "Between stimulus and response, there is a space. In that space lies your freedom to choose. Master that pause, and you master your emotional life." },
      ],
    },
    {
      id: 4,
      title: "Understanding Others",
      duration: "20 min",
      content: [
        { type: "heading", content: "Walking in Someone Else's Shoes" },
        { type: "paragraph", content: "Empathy is the ability to understand and share the feelings of another person. It's not about agreeing with them or fixing their problems—it's about truly hearing and acknowledging their experience. Empathy is the glue that holds relationships together." },
        { type: "paragraph", content: "There are three types of empathy: cognitive empathy (understanding someone's perspective), emotional empathy (feeling what they feel), and compassionate empathy (being moved to help). The most effective communicators use all three." },
        { type: "list", items: ["Listen to understand, not to respond", "Pay attention to body language—it reveals more than words", "Ask open-ended questions: 'How did that make you feel?'", "Avoid jumping to advice—sometimes people just need to be heard", "Validate their feelings: 'That sounds really difficult'"] },
        { type: "tip", content: "Practice 'empathic listening' today: in your next conversation, focus entirely on the other person. Don't plan what you'll say next. Instead, try to understand their emotions and reflect them back: 'It sounds like you're feeling...'." },
        { type: "example", title: "Empathy in Action", description: "Your friend fails an exam and says, 'I'm so stupid.' Instead of 'No you're not' (dismissing) or 'You should have studied more' (judging), try: 'That must be really disappointing. I know you worked hard. What do you think happened?' This validates and opens dialogue." },
        { type: "key-point", title: "Empathy Creates Connection", content: "People don't remember what you said—they remember how you made them feel. Empathy costs nothing but creates enormous value in every relationship you have." },
      ],
    },
    {
      id: 5,
      title: "Building Healthy Relationships",
      duration: "20 min",
      content: [
        { type: "heading", content: "The Social Side of EQ" },
        { type: "paragraph", content: "Social skills are the outward expression of emotional intelligence. They include communication, teamwork, conflict resolution, leadership, and influence. People with strong social skills don't just have more friends—they have deeper, more meaningful connections." },
        { type: "paragraph", content: "Healthy relationships require consistent emotional investment. This means showing up, being reliable, communicating honestly, and respecting boundaries. Every interaction is an opportunity to strengthen or weaken a relationship." },
        { type: "list", items: ["Communicate openly and honestly—avoid passive-aggressive behaviour", "Show appreciation regularly—don't take people for granted", "Be reliable: follow through on promises and commitments", "Handle disagreements with respect, not aggression", "Support others' goals and celebrate their successes genuinely"] },
        { type: "tip", content: "The 5:1 ratio: research shows that healthy relationships have at least five positive interactions for every one negative interaction. Make sure your daily interactions lean heavily toward kindness, encouragement, and support." },
        { type: "example", title: "Repair After Conflict", description: "After an argument with a friend, you might feel like avoiding them. Instead, reach out: 'I've been thinking about our conversation. I'm sorry for raising my voice. Can we talk about how to handle this better next time?' Repair attempts are the hallmark of strong relationships." },
        { type: "key-point", title: "Relationships Are Skills", content: "Great relationships don't happen by accident. They're built through daily practice of empathy, honest communication, and mutual respect. Invest in your relationships like you'd invest in any important skill." },
      ],
    },
    {
      id: 6,
      title: "EQ in Action",
      duration: "20 min",
      content: [
        { type: "heading", content: "Putting It All Together" },
        { type: "paragraph", content: "Now that you understand the five components of emotional intelligence, it's time to apply them in everyday life. EQ isn't theoretical—it's practical. Every challenging situation is an opportunity to practice and strengthen your emotional skills." },
        { type: "paragraph", content: "High EQ doesn't mean you never feel negative emotions. It means you can navigate them skillfully. You'll still feel angry, anxious, sad, and frustrated—but you'll handle these emotions in ways that serve you rather than sabotage you." },
        { type: "list", items: ["Before important conversations, check in with your emotions", "In conflicts, seek to understand before seeking to be understood", "Practice gratitude daily—it rewires your brain for positivity", "Set emotional goals alongside academic ones", "Surround yourself with emotionally intelligent people—EQ is contagious"] },
        { type: "tip", content: "Create a personal EQ action plan: choose one emotional skill to focus on each week. Week 1: name your emotions. Week 2: practice the 6-second pause. Week 3: practice empathic listening. Small, consistent steps create lasting change." },
        { type: "example", title: "EQ in a Stressful Exam", description: "During an exam, you feel panic rising. Using your EQ skills: (1) Self-awareness: 'I'm feeling anxious.' (2) Self-regulation: slow breathing for 30 seconds. (3) Motivation: 'I prepared for this—I can do it.' (4) Proceed calmly with the exam." },
        { type: "key-point", title: "EQ Is a Lifelong Practice", content: "Emotional intelligence isn't something you master once—it's a lifelong practice. Each day brings new opportunities to grow. The fact that you've completed this course means you're already ahead of most people. Keep practising, keep growing." },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 1,
      question: "What are the five components of emotional intelligence?",
      options: [
        "Happiness, sadness, anger, fear, surprise",
        "Self-awareness, self-regulation, motivation, empathy, social skills",
        "Thinking, feeling, acting, reacting, reflecting",
        "Intelligence, creativity, memory, logic, intuition",
      ],
      correctAnswer: 1,
      explanation:
        "The five components of EQ are self-awareness, self-regulation, motivation, empathy, and social skills.",
    },
    {
      id: 2,
      question: "What is empathy?",
      options: [
        "Feeling sorry for someone",
        "Agreeing with everyone",
        "Understanding and sharing another person's feelings",
        "Ignoring your own emotions",
      ],
      correctAnswer: 2,
      explanation:
        "Empathy is the ability to understand and share another person's feelings and perspective.",
    },
    {
      id: 3,
      question: "Which is an example of self-regulation?",
      options: [
        "Yelling when you're frustrated",
        "Ignoring your emotions completely",
        "Taking a deep breath before responding when angry",
        "Avoiding all stressful situations",
      ],
      correctAnswer: 2,
      explanation:
        "Self-regulation means managing your emotions effectively, like pausing to breathe before reacting to anger.",
    },
    {
      id: 4,
      question: "What is self-awareness in the context of EQ?",
      options: [
        "Being aware of other people's problems",
        "Knowing your own emotions, strengths, and weaknesses",
        "Being self-conscious about your appearance",
        "Focusing only on your achievements",
      ],
      correctAnswer: 1,
      explanation:
        "Self-awareness means recognising and understanding your own emotions, strengths, weaknesses, and how they affect others.",
    },
    {
      id: 5,
      question: "How does emotional intelligence help in decision-making?",
      options: [
        "It tells you to always follow your gut feeling",
        "It removes all emotions from the process",
        "It helps you recognise how emotions influence your choices so you can decide more clearly",
        "It guarantees you will always make the right choice",
      ],
      correctAnswer: 2,
      explanation:
        "EQ helps you notice when emotions are clouding your judgment so you can pause, reflect, and make more balanced decisions.",
    },
    {
      id: 6,
      question: "What is the difference between sympathy and empathy?",
      options: [
        "They mean exactly the same thing",
        "Sympathy is feeling pity for someone; empathy is understanding and sharing their feelings",
        "Empathy is weaker than sympathy",
        "Sympathy requires personal experience; empathy does not",
      ],
      correctAnswer: 1,
      explanation:
        "Sympathy is feeling sorry for someone from the outside, while empathy involves truly understanding and connecting with their experience.",
    },
    {
      id: 7,
      question: "Which of these is a sign of high emotional intelligence?",
      options: [
        "Never showing any emotion",
        "Winning every argument",
        "Being able to stay calm and think clearly under pressure",
        "Always putting other people's needs before your own",
      ],
      correctAnswer: 2,
      explanation:
        "People with high EQ can manage stress and stay composed under pressure, allowing them to respond thoughtfully rather than react impulsively.",
    },
    {
      id: 8,
      question: "What role does motivation play in emotional intelligence?",
      options: [
        "Motivated people never feel negative emotions",
        "Internal motivation helps you pursue goals despite setbacks",
        "Motivation only matters in sports, not EQ",
        "It has no role; motivation and EQ are unrelated",
      ],
      correctAnswer: 1,
      explanation:
        "Intrinsic motivation, a key EQ component, drives you to persist toward goals even when facing challenges or disappointments.",
    },
    {
      id: 9,
      question: "What is an 'emotional trigger'?",
      options: [
        "A situation or event that provokes a strong emotional reaction",
        "A technique for calming down",
        "A type of therapy used by psychologists",
        "A positive affirmation you repeat daily",
      ],
      correctAnswer: 0,
      explanation:
        "An emotional trigger is any stimulus—a word, situation, or memory—that sparks an intense emotional response, often linked to past experiences.",
    },
    {
      id: 10,
      question: "How can journaling improve emotional intelligence?",
      options: [
        "It replaces the need for talking to other people",
        "It helps you identify patterns in your emotions and reactions over time",
        "It is only useful for creative writing, not EQ",
        "It eliminates negative emotions permanently",
      ],
      correctAnswer: 1,
      explanation:
        "Writing about your feelings helps you recognise emotional patterns, understand your triggers, and develop greater self-awareness.",
    },
    {
      id: 11,
      question: "What does it mean to 'validate' someone's emotions?",
      options: [
        "Telling them they are overreacting",
        "Agreeing that their feelings are correct",
        "Acknowledging their feelings as real and understandable, even if you disagree",
        "Ignoring what they say and changing the subject",
      ],
      correctAnswer: 2,
      explanation:
        "Validation means acknowledging someone's emotions as legitimate and understandable—it does not require agreeing with their viewpoint.",
    },
    {
      id: 12,
      question: "Why is social awareness important in EQ?",
      options: [
        "It helps you manipulate people into doing what you want",
        "It lets you read the emotional climate of a group and respond appropriately",
        "It is only useful for politicians and public speakers",
        "It means always being the most popular person in the room",
      ],
      correctAnswer: 1,
      explanation:
        "Social awareness helps you sense others' emotions and group dynamics so you can communicate and collaborate more effectively.",
    },
  ],
  heroImage: "/course-emotions-hero.png",
  gradientColor: "from-orange-500 to-amber-600",
};

const careerPlanningCourse: Course = {
  courseInfo: {
    title: "Career Planning & Discovery",
    description:
      "Find your path and prepare for the future. Discover your strengths, explore career options, and build the skills employers want.",
    totalLessons: 8,
    totalDuration: "3 hours",
    level: "All Levels",
    instructor: {
      name: "Lisa Thompson",
      title: "Career Coach",
    },
    whatYouWillLearn: [
      "Discover your strengths and interests",
      "Explore different career paths",
      "Build a professional network",
      "Create an impressive resume",
      "Ace job interviews",
      "Set and achieve career goals",
    ],
  },
  lessons: [
    {
      id: 1,
      title: "Discovering Your Strengths",
      duration: "20 min",
      content: [
        { type: "heading", content: "What Makes You Unique?" },
        { type: "paragraph", content: "Everyone has a unique combination of strengths, talents, and interests. Discovering yours is the first step toward finding a career you'll love. The best careers happen when your natural abilities align with work that matters to you." },
        { type: "paragraph", content: "Strengths aren't just about what you're good at—they're about what energises you. You might be good at maths but find it draining. That's a skill, not a strength. True strengths are activities that make you feel engaged, focused, and fulfilled." },
        { type: "list", items: ["Reflect on activities that make you lose track of time", "Ask friends and family what they see as your natural talents", "Think about problems you enjoy solving", "Consider subjects where you learn quickly without much effort", "Notice what people come to you for help with"] },
        { type: "tip", content: "Take a free strengths assessment like the VIA Character Strengths survey or 16Personalities test. These aren't perfect, but they can reveal patterns you might not see in yourself." },
        { type: "example", title: "Strengths in Action", description: "Priya loved explaining things to classmates and organizing group projects. She didn't initially think of these as 'career skills,' but they pointed toward project management, teaching, and leadership roles. Your everyday habits reveal your hidden strengths." },
        { type: "key-point", title: "Strengths + Passion = Purpose", content: "The sweet spot for career happiness is where your strengths, passions, and the world's needs overlap. Start by identifying your strengths—the rest of this course will help you connect them to real career paths." },
      ],
    },
    {
      id: 2,
      title: "Exploring Career Options",
      duration: "25 min",
      content: [
        { type: "heading", content: "A World of Possibilities" },
        { type: "paragraph", content: "There are thousands of career paths available today, and many of tomorrow's top jobs don't even exist yet. The key is to explore broadly before narrowing down. Don't limit yourself to careers you've heard of—dig deeper into industries and roles that align with your strengths." },
        { type: "paragraph", content: "Career exploration isn't a one-time event—it's an ongoing process. Industries evolve, new roles emerge, and your interests will change over time. The goal isn't to find 'the one perfect career' but to develop skills and knowledge that keep your options open." },
        { type: "list", items: ["Research industries that interest you using LinkedIn and career websites", "Conduct informational interviews with professionals in different fields", "Try job shadowing or volunteering to test careers firsthand", "Explore emerging fields: AI, sustainability, digital health, and creative tech", "Look beyond job titles—focus on daily activities and work environment"] },
        { type: "tip", content: "Use the 'O*NET Interest Profiler' (free online) to match your interests with hundreds of career options. It categorises careers by themes like helping people, working with data, or building things." },
        { type: "example", title: "Unexpected Career Paths", description: "Marcus loved gaming and assumed he'd be a game developer. Through exploration, he discovered UX design, game psychology, esports management, and gaming journalism. One interest can lead to dozens of career paths you never considered." },
        { type: "key-point", title: "Explore Before You Commit", content: "The students who explore the most career options before choosing report higher job satisfaction later in life. Don't rush the decision—invest time in exploration now to avoid costly career changes later." },
      ],
    },
    {
      id: 3,
      title: "Building Your Network",
      duration: "20 min",
      content: [
        { type: "heading", content: "It's Not Just What You Know" },
        { type: "paragraph", content: "Networking is building genuine relationships with people who can support your career journey—and whom you can support in return. Studies show that 70-80% of jobs are filled through networking rather than online applications. Your network is one of your most valuable career assets." },
        { type: "paragraph", content: "Networking isn't about being fake or transactional. The best networkers are genuinely curious about other people, generous with their time and knowledge, and consistent in staying in touch. Think of it as making friends who happen to share your professional interests." },
        { type: "list", items: ["Start with people you already know: teachers, family friends, parents' colleagues", "Join clubs, societies, or online communities related to your interests", "Attend career fairs, workshops, and industry events", "Use LinkedIn to connect with professionals and join relevant groups", "Follow up within 48 hours after meeting someone new"] },
        { type: "tip", content: "The easiest way to start networking is to ask for advice, not favours. People love sharing their experience. Try: 'I'm interested in your field. Could I ask you a few questions about how you got started?'" },
        { type: "example", title: "Networking Success Story", description: "Aisha mentioned her interest in journalism to her neighbour, who connected her with a friend at the local newspaper. That led to a work experience placement, which led to a mentorship, which led to her first published article. One conversation started a chain of opportunities." },
        { type: "key-point", title: "Build Relationships Before You Need Them", content: "The best time to build your network is before you need it. Start connecting with people in your areas of interest now, and by the time you're job hunting, you'll have a web of supporters ready to help." },
      ],
    },
    {
      id: 4,
      title: "Resume Building 101",
      duration: "25 min",
      content: [
        { type: "heading", content: "Your Personal Marketing Document" },
        { type: "paragraph", content: "Your resume (or CV) is your personal marketing document. It's often the first impression an employer has of you, and you typically have less than 7 seconds to grab their attention. A great resume is clear, concise, and tailored to each specific role." },
        { type: "paragraph", content: "Even as a student with limited work experience, you have plenty to include: school achievements, volunteering, projects, extracurricular activities, and skills. Focus on transferable skills and measurable achievements rather than just listing duties." },
        { type: "list", items: ["Keep it to one page—be concise and relevant", "Use action verbs: 'Led', 'Created', 'Improved', 'Organised'", "Quantify achievements: 'Raised £500 for charity' not 'Did fundraising'", "Tailor your resume for each application—mirror the job description language", "Include a skills section highlighting both technical and soft skills"] },
        { type: "tip", content: "Use the X-Y-Z formula for achievements: 'Accomplished X, as measured by Y, by doing Z.' For example: 'Increased school newsletter readership by 40% by redesigning the layout and adding student interviews.'" },
        { type: "example", title: "Student Resume Power Words", description: "Instead of: 'Helped at school events.' Write: 'Coordinated logistics for 5 school events serving 200+ students, managing a team of 8 volunteers and a £300 budget.' Same experience, dramatically better presentation." },
        { type: "key-point", title: "Quality Over Quantity", content: "A targeted one-page resume that speaks directly to the role will beat a generic three-page document every time. Every line should answer: 'Why should they hire me?'" },
      ],
    },
    {
      id: 5,
      title: "Interview Skills",
      duration: "25 min",
      content: [
        { type: "heading", content: "Show Them Your Best Self" },
        { type: "paragraph", content: "Job interviews can be nerve-wracking, but they're simply structured conversations. The interviewer wants to know three things: Can you do the job? Will you be a good fit? Are you motivated? Preparing thoughtful answers to these questions is the key to interview success." },
        { type: "paragraph", content: "The STAR method is your secret weapon for answering behavioural questions. When asked 'Tell me about a time when...', structure your response as: Situation (context), Task (your responsibility), Action (what you did), Result (the outcome)." },
        { type: "list", items: ["Research the company thoroughly: mission, values, recent news, products", "Prepare 3-5 STAR stories that showcase different skills", "Practice with a friend or in front of a mirror", "Prepare thoughtful questions to ask the interviewer", "Dress appropriately and arrive 10 minutes early"] },
        { type: "tip", content: "Record yourself answering practice questions on your phone. Watch it back to notice filler words ('um', 'like'), fidgeting, or unclear answers. It's uncomfortable but incredibly effective." },
        { type: "example", title: "STAR Method in Practice", description: "Question: 'Tell me about a time you solved a problem.' Situation: 'Our school group project was falling behind schedule.' Task: 'I was responsible for getting us back on track.' Action: 'I created a shared timeline and daily check-ins.' Result: 'We finished on time and received the highest grade in our class.'" },
        { type: "key-point", title: "Preparation Beats Talent", content: "The best interviews feel like natural conversations, but they're built on thorough preparation. Know the company, know your stories, and know why you want the role. Confidence comes from being genuinely prepared." },
      ],
    },
    {
      id: 6,
      title: "Setting Career Goals",
      duration: "20 min",
      content: [
        { type: "heading", content: "Dream Big, Plan Smart" },
        { type: "paragraph", content: "A career without goals is like a journey without a destination—you might move, but you won't get anywhere meaningful. Setting clear career goals gives you direction, motivation, and a way to measure progress. The best goals are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound." },
        { type: "paragraph", content: "Break your career vision into three timeframes: short-term (next 6 months), medium-term (1-3 years), and long-term (5-10 years). Short-term goals build the foundation. Medium-term goals create momentum. Long-term goals provide direction and inspiration." },
        { type: "list", items: ["Write down your goals—people who write goals are 42% more likely to achieve them", "Make each goal specific: 'Complete a web design course by March' not 'Learn tech stuff'", "Break big goals into weekly actions", "Review and adjust your goals monthly", "Share your goals with a mentor or accountability partner"] },
        { type: "tip", content: "Use reverse engineering: start with your dream career, then work backwards. What job comes before it? What skills do you need? What education or experience is required? Now you have a step-by-step roadmap." },
        { type: "example", title: "SMART Goal Example", description: "Vague goal: 'I want to work in marketing.' SMART goal: 'By June 2025, I will complete Google's Digital Marketing certificate, create a portfolio with 3 sample campaigns, and apply to 5 marketing internships.' Clear, measurable, and actionable." },
        { type: "key-point", title: "Goals Are Living Documents", content: "Your career goals should evolve as you learn and grow. Review them regularly, celebrate progress, and don't be afraid to change direction when you discover new passions or opportunities." },
      ],
    },
    {
      id: 7,
      title: "Personal Branding",
      duration: "20 min",
      content: [
        { type: "heading", content: "You Are Your Own Brand" },
        { type: "paragraph", content: "Personal branding is the practice of defining and promoting what makes you unique. It's not about being fake—it's about being intentional about how you present yourself professionally. Your personal brand is what people say about you when you're not in the room." },
        { type: "paragraph", content: "In today's digital world, your online presence IS your first impression. Employers regularly check social media before interviewing candidates. A strong personal brand across LinkedIn, a portfolio website, and professional social media can set you apart from hundreds of other applicants." },
        { type: "list", items: ["Define your unique value: what do you do better than most people?", "Clean up your social media—remove anything you wouldn't want an employer to see", "Create a LinkedIn profile with a professional photo and compelling headline", "Build a simple portfolio website showcasing your best work", "Be consistent: your brand should tell the same story everywhere"] },
        { type: "tip", content: "Write a personal brand statement in this format: 'I help [who] achieve [what] through [how].' For example: 'I help small businesses grow their online presence through creative social media strategies.' This becomes your professional elevator pitch." },
        { type: "example", title: "Building a Brand From Scratch", description: "Tom, a student passionate about sustainability, started a blog sharing eco-friendly living tips. He shared posts on LinkedIn, volunteered at environmental events, and connected with green businesses. Within a year, he was known in his community as 'the sustainability guy'—and had multiple internship offers." },
        { type: "key-point", title: "Start Building Your Brand Today", content: "You don't need to be an expert to have a personal brand. Start by sharing what you're learning, contributing to conversations in your field, and being authentically helpful. Consistency and authenticity beat perfection every time." },
      ],
    },
    {
      id: 8,
      title: "Your Career Action Plan",
      duration: "25 min",
      content: [
        { type: "heading", content: "From Vision to Action" },
        { type: "paragraph", content: "You've discovered your strengths, explored options, built networking skills, learned to create resumes, mastered interviews, and set goals. Now it's time to bring it all together into a concrete Career Action Plan—your personal roadmap for the next 12 months." },
        { type: "paragraph", content: "A career action plan turns inspiration into daily habits. It bridges the gap between where you are now and where you want to be. The most successful people don't just have big dreams—they have detailed plans with specific actions and deadlines." },
        { type: "list", items: ["Identify your top 3 career interests based on your exploration", "List 5 skills you need to develop for those careers", "Set 3 SMART goals for the next 6 months", "Schedule monthly check-ins with a mentor or career advisor", "Commit to one networking action per week (message someone, attend an event)"] },
        { type: "tip", content: "Create a 'Career Board' (physical or digital) with images, quotes, and goals related to your dream career. Review it daily. Visualisation keeps your goals at the front of your mind and motivates consistent action." },
        { type: "example", title: "A 12-Month Action Plan", description: "Months 1-3: Complete an online course in your chosen field, update LinkedIn, and conduct 5 informational interviews. Months 4-6: Build a portfolio project and attend 2 industry events. Months 7-9: Apply for internships. Months 10-12: Start internship and refine your career direction." },
        { type: "key-point", title: "Action Creates Clarity", content: "You don't need to have everything figured out to start. Take one step this week—research a career, message a professional, or start learning a new skill. Action creates clarity, and clarity builds confidence." },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 1,
      question: "What is the best way to discover your career strengths?",
      options: [
        "Only look at what pays the most",
        "Ask your parents to choose for you",
        "Reflect on activities you enjoy and excel at",
        "Pick the most popular career",
      ],
      correctAnswer: 2,
      explanation:
        "Reflecting on what you enjoy and where you naturally excel helps identify genuine career strengths.",
    },
    {
      id: 2,
      question: "What is networking in a career context?",
      options: [
        "Setting up computer networks",
        "Building professional relationships that can help your career",
        "Adding people on social media",
        "Working overtime at your job",
      ],
      correctAnswer: 1,
      explanation:
        "Career networking means building genuine professional relationships that provide support, advice, and opportunities.",
    },
    {
      id: 3,
      question: "What should a good resume focus on?",
      options: [
        "Listing every job you've ever had",
        "Using fancy fonts and colors",
        "Relevant skills and achievements tailored to the position",
        "Making it as long as possible",
      ],
      correctAnswer: 2,
      explanation:
        "A strong resume highlights relevant skills and accomplishments tailored to the specific role you're applying for.",
    },
    {
      id: 4,
      question: "What is a 'personal brand'?",
      options: [
        "A logo you design for yourself",
        "The unique combination of skills, values, and reputation you are known for",
        "The clothing style you wear to work",
        "Your social media follower count",
      ],
      correctAnswer: 1,
      explanation:
        "Your personal brand is how others perceive your skills, values, and professional reputation — it shapes career opportunities.",
    },
    {
      id: 5,
      question: "What is an informational interview?",
      options: [
        "A formal job interview with an HR manager",
        "A casual conversation with a professional to learn about their career path",
        "A quiz you take before applying for a job",
        "A group discussion at a career fair",
      ],
      correctAnswer: 1,
      explanation:
        "An informational interview is an informal meeting where you ask someone about their career, industry, and advice — it is a powerful networking tool.",
    },
    {
      id: 6,
      question: "What is the STAR method used for in interviews?",
      options: [
        "Rating companies from 1 to 5 stars",
        "Structuring answers using Situation, Task, Action, and Result",
        "A breathing technique to calm nerves",
        "A way to research a company before the interview",
      ],
      correctAnswer: 1,
      explanation:
        "STAR (Situation, Task, Action, Result) is a structured way to answer behavioural interview questions with clear, specific examples.",
    },
    {
      id: 7,
      question: "Why is it important to set SMART career goals?",
      options: [
        "Because vague goals are easier to achieve",
        "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound, making them actionable",
        "You only need goals if you want to become a manager",
        "SMART goals are required by all employers",
      ],
      correctAnswer: 1,
      explanation:
        "SMART goals turn vague wishes into clear action plans with deadlines, making you far more likely to achieve them.",
    },
    {
      id: 8,
      question: "What is a cover letter?",
      options: [
        "A letter you send after you are hired",
        "A document that accompanies your resume to explain why you are a good fit for the role",
        "A reference letter written by your teacher",
        "A contract you sign when accepting a job",
      ],
      correctAnswer: 1,
      explanation:
        "A cover letter introduces you to the employer, explains your interest in the role, and highlights why your skills make you a strong candidate.",
    },
    {
      id: 9,
      question: "What is the 'hidden job market'?",
      options: [
        "Jobs that are illegal or off the books",
        "Positions that are filled through networking and referrals rather than public job postings",
        "A secret website where exclusive jobs are listed",
        "Jobs that only exist in other countries",
      ],
      correctAnswer: 1,
      explanation:
        "Many jobs are never publicly advertised. They are filled through internal referrals and professional connections — that is the hidden job market.",
    },
    {
      id: 10,
      question: "What should you research before a job interview?",
      options: [
        "The interviewer's personal social media accounts",
        "The company's mission, values, recent news, and the job description",
        "Only the salary and benefits",
        "Nothing — it is better to be spontaneous",
      ],
      correctAnswer: 1,
      explanation:
        "Researching the company shows genuine interest and helps you tailor your answers to what the employer values most.",
    },
    {
      id: 11,
      question: "What is a transferable skill?",
      options: [
        "A skill that can only be used in one specific job",
        "A skill that applies across many different jobs and industries",
        "A skill you learn only through formal education",
        "A skill that expires after a certain period",
      ],
      correctAnswer: 1,
      explanation:
        "Transferable skills — like communication, problem-solving, and teamwork — are valuable in virtually any career path.",
    },
    {
      id: 12,
      question: "Why is following up after an interview important?",
      options: [
        "It is not important; you should just wait",
        "It shows professionalism, reinforces your interest, and keeps you top-of-mind",
        "It pressures the employer into hiring you",
        "It is only necessary if the interview went badly",
      ],
      correctAnswer: 1,
      explanation:
        "A brief thank-you email after an interview demonstrates professionalism and genuine enthusiasm for the opportunity.",
    },
  ],
  heroImage: "/course-career-hero.png",
  gradientColor: "from-purple-500 to-violet-600",
};

const relationshipsCourse: Course = {
  courseInfo: {
    title: "Building Healthy Relationships",
    description:
      "Learn the skills for building strong, healthy relationships with family, friends, and romantic partners.",
    totalLessons: 7,
    totalDuration: "2 hours 15 minutes",
    level: "Beginner",
    instructor: {
      name: "Dr. Maria Santos",
      title: "Relationship Counselor",
    },
    whatYouWillLearn: [
      "Communicate effectively with others",
      "Set healthy boundaries",
      "Resolve conflicts peacefully",
      "Build trust and intimacy",
      "Recognize unhealthy relationship patterns",
      "Support friends and family",
    ],
  },
  lessons: [
    {
      id: 1,
      title: "Foundations of Healthy Relationships",
      duration: "15 min",
      content: [
        { type: "heading", content: "What Makes a Relationship Healthy?" },
        { type: "paragraph", content: "Healthy relationships—whether with friends, family, or romantic partners—share common foundations: mutual respect, trust, honest communication, and support. They make you feel safe, valued, and free to be yourself. Unhealthy relationships, by contrast, involve control, manipulation, or disrespect." },
        { type: "paragraph", content: "No relationship is perfect. Healthy relationships still have disagreements and difficult moments. The difference is how those moments are handled. In healthy relationships, conflicts are resolved with respect, and both people feel heard and valued." },
        { type: "list", items: ["Mutual respect: valuing each other's opinions, feelings, and boundaries", "Trust: being reliable, honest, and consistent over time", "Communication: sharing thoughts and feelings openly and honestly", "Support: encouraging each other's goals and being there during tough times", "Independence: maintaining your own identity, friends, and interests"] },
        { type: "tip", content: "Evaluate your current relationships using the 'Energy Test': after spending time with someone, do you feel energised or drained? Healthy relationships consistently leave you feeling better, not worse." },
        { type: "example", title: "Healthy vs. Unhealthy Patterns", description: "Healthy: 'I felt hurt when you cancelled our plans. Can we talk about it?' Unhealthy: 'You always cancel on me. You obviously don't care about me.' The first opens dialogue; the second creates defensiveness and guilt." },
        { type: "key-point", title: "You Teach People How to Treat You", content: "The standards you set in your relationships determine the quality of those relationships. By modelling respect, honesty, and healthy communication, you attract and maintain connections that enrich your life." },
      ],
    },
    {
      id: 2,
      title: "Communication Skills",
      duration: "20 min",
      content: [
        { type: "heading", content: "Say What You Mean, Mean What You Say" },
        { type: "paragraph", content: "Communication is the lifeblood of every relationship. Misunderstandings cause more relationship damage than actual disagreements. Learning to communicate clearly, listen actively, and express yourself honestly will transform every relationship in your life." },
        { type: "paragraph", content: "Most communication is nonverbal. Your tone of voice, facial expressions, body language, and eye contact convey more than your words. Being aware of these signals—both yours and others'—dramatically improves how you connect with people." },
        { type: "list", items: ["Use 'I' statements: 'I feel...' instead of 'You always...'", "Practice active listening: make eye contact, nod, and reflect back what you heard", "Ask clarifying questions before reacting: 'What do you mean by that?'", "Match your body language to your words—mixed signals create confusion", "Choose the right time and place for important conversations"] },
        { type: "tip", content: "The 'mirroring' technique builds instant connection: subtly match the other person's body language, speaking pace, and energy level. This unconsciously signals 'I understand you' and builds rapport." },
        { type: "example", title: "Active Listening in Practice", description: "Friend: 'I'm so stressed about exams.' Poor response: 'Just study more.' Active listening response: 'It sounds like you're feeling overwhelmed. What's worrying you most?' The second response shows you genuinely care and opens space for real conversation." },
        { type: "key-point", title: "Listen More Than You Speak", content: "We have two ears and one mouth for a reason. The most powerful communication skill isn't speaking—it's listening. When people feel truly heard, trust deepens and relationships flourish." },
      ],
    },
    {
      id: 3,
      title: "Setting Boundaries",
      duration: "20 min",
      content: [
        { type: "heading", content: "The Art of Saying No" },
        { type: "paragraph", content: "Boundaries are the limits you set to protect your physical, emotional, and mental wellbeing. They're not walls to keep people out—they're guidelines that teach others how to treat you. Setting boundaries is one of the most important skills for maintaining healthy relationships." },
        { type: "paragraph", content: "Many people struggle with boundaries because they fear conflict, rejection, or being seen as 'difficult'. But the truth is, people who set clear boundaries earn more respect, experience less resentment, and have stronger relationships than those who don't." },
        { type: "list", items: ["Know your limits: what behaviours are unacceptable to you?", "Communicate boundaries clearly and calmly, without apologising", "Be consistent: enforce your boundaries every time, not just sometimes", "Accept that some people won't respect your boundaries—and that tells you something", "Remember: 'No' is a complete sentence"] },
        { type: "tip", content: "Use the 'boundary sandwich': start with empathy, state your boundary, end with care. Example: 'I understand you want to hang out tonight. I need to study and can't make it. Let's plan something for the weekend though.'" },
        { type: "example", title: "Types of Boundaries", description: "Physical: 'I'm not comfortable with that.' Emotional: 'I can't take on your problems right now.' Time: 'I need to leave by 9pm.' Digital: 'I don't respond to messages after 10pm.' Material: 'I can't lend money to friends.' All are valid and important." },
        { type: "key-point", title: "Boundaries Are Self-Respect in Action", content: "Setting boundaries isn't selfish—it's necessary. You cannot pour from an empty cup. Protecting your energy, time, and wellbeing allows you to show up as your best self in every relationship." },
      ],
    },
    {
      id: 4,
      title: "Conflict Resolution",
      duration: "20 min",
      content: [
        { type: "heading", content: "Fighting Fair" },
        { type: "paragraph", content: "Conflict is a natural part of every relationship. The goal isn't to avoid conflict entirely—it's to handle it in a way that strengthens the relationship rather than damaging it. Healthy conflict resolution builds understanding, deepens trust, and leads to better outcomes for everyone." },
        { type: "paragraph", content: "Most conflicts aren't really about the surface issue. A fight about dirty dishes is often about feeling unappreciated. An argument about curfew might really be about trust. Learning to identify the underlying emotion helps you address what's really going on." },
        { type: "list", items: ["Address issues early—don't let resentment build up", "Focus on the problem, not the person: attack the issue, not each other", "Take a break if emotions are too intense: 'I need 20 minutes to cool down'", "Look for the 'win-win': solutions that meet both people's needs", "Apologise sincerely when you're wrong—without excuses or 'but's"] },
        { type: "tip", content: "Use the XYZ formula for bringing up issues: 'When you do X, in situation Y, I feel Z.' Example: 'When you check your phone during our conversations, especially at dinner, I feel unimportant.' It's specific, honest, and non-attacking." },
        { type: "example", title: "Conflict Resolution Steps", description: "1. Pause and breathe before reacting. 2. Express your feelings using 'I' statements. 3. Listen to the other person's perspective without interrupting. 4. Identify what you both need. 5. Brainstorm solutions together. 6. Agree on a plan and follow through." },
        { type: "key-point", title: "Repair Is Everything", content: "Every relationship has ruptures—what matters is the repair. Being willing to take responsibility, apologise sincerely, and work toward a solution shows maturity and strengthens the bond between you." },
      ],
    },
    {
      id: 5,
      title: "Building Trust",
      duration: "20 min",
      content: [
        { type: "heading", content: "Trust: Built Slowly, Broken Quickly" },
        { type: "paragraph", content: "Trust is the foundation of every meaningful relationship. It takes time to build and only a moment to destroy. Trust isn't given—it's earned through consistent actions over time. When trust is present, relationships feel safe, open, and genuine." },
        { type: "paragraph", content: "Trust has multiple components: reliability (doing what you say), honesty (telling the truth), competence (being capable), and care (having the other person's best interests at heart). A breakdown in any of these areas can damage trust." },
        { type: "list", items: ["Follow through on promises—even small ones", "Be honest, even when it's uncomfortable", "Admit mistakes instead of covering them up", "Keep confidences: don't share others' secrets", "Be consistent: act the same way whether people are watching or not"] },
        { type: "tip", content: "Build trust through small, daily actions. Reply when you say you will. Show up on time. Remember details people share with you. Trust is built in drops and lost in buckets—make every drop count." },
        { type: "example", title: "Rebuilding Broken Trust", description: "After breaking a friend's confidence, Jess didn't just apologise—she took specific actions: 'I'm sorry I shared what you told me. I understand why you're hurt. Going forward, I will never share your personal information. If I'm tempted, I'll remind myself how this feels right now.'" },
        { type: "key-point", title: "Trust Is a Choice You Make Daily", content: "Trust isn't built through grand gestures—it's built through consistent small actions. Every time you keep a promise, tell the truth, or show up for someone, you're depositing into the trust account." },
      ],
    },
    {
      id: 6,
      title: "Family Relationships",
      duration: "20 min",
      content: [
        { type: "heading", content: "Navigating Your First Relationships" },
        { type: "paragraph", content: "Family relationships are often the most complex because they're the longest and deepest connections in our lives. As you grow and develop your own identity, it's natural for family dynamics to shift. Learning to navigate these changes is an important life skill." },
        { type: "paragraph", content: "Conflict with parents or siblings is normal, especially during teenage years when you're seeking more independence. The key is to express your growing need for autonomy while maintaining respect and connection. Both sides are usually doing their best." },
        { type: "list", items: ["Try to see situations from your parents' perspective—they're learning too", "Communicate your needs clearly instead of acting out", "Pick your battles: not everything needs to be an argument", "Show responsibility to earn more trust and independence", "Find shared activities that keep you connected as a family"] },
        { type: "tip", content: "If a conversation with a parent is getting heated, try: 'I really want to talk about this because it matters to me. Can we take a break and come back to it after dinner?' This shows maturity and prevents saying things you'll regret." },
        { type: "example", title: "Bridging the Generation Gap", description: "Instead of: 'You never let me do anything!' Try: 'I'd like to stay out later on Saturday. I understand your concerns about safety. What if I text you every hour and share my location? Can we try it once and see how it goes?'" },
        { type: "key-point", title: "Family Bonds Are Worth the Effort", content: "Your family knows you longer and more deeply than anyone else. Even when relationships feel strained, investing in communication and understanding pays dividends for a lifetime." },
      ],
    },
    {
      id: 7,
      title: "Friendships & Romantic Relationships",
      duration: "20 min",
      content: [
        { type: "heading", content: "Choosing Your People" },
        { type: "paragraph", content: "Unlike family, you choose your friends and romantic partners. These relationships shape who you become—research shows you're the average of the five people you spend the most time with. Choosing wisely and investing in quality connections is one of the most important decisions you'll make." },
        { type: "paragraph", content: "Healthy friendships and romantic relationships share the same core ingredients: mutual respect, trust, good communication, and support. The main difference is that romantic relationships involve deeper vulnerability and emotional intimacy, which makes all the foundational skills even more important." },
        { type: "list", items: ["Quality over quantity: a few close friends matter more than many acquaintances", "Be the kind of friend you want to have", "In romantic relationships, maintain your own identity and interests", "Red flags to watch for: controlling behaviour, isolation from friends, constant criticism", "Healthy love doesn't require you to change who you are"] },
        { type: "tip", content: "The 'friend audit': look at your closest relationships and ask, 'Do I feel supported, respected, and encouraged to grow?' If a relationship consistently drains you or makes you feel bad about yourself, it may be time to set boundaries or let go." },
        { type: "example", title: "Green Flags in Relationships", description: "They celebrate your successes without jealousy. They respect your boundaries without guilt-tripping. They communicate honestly even when it's hard. They make effort to understand your perspective. They encourage your growth and independence." },
        { type: "key-point", title: "You Deserve Healthy Relationships", content: "Never settle for relationships that make you feel small, anxious, or unworthy. You deserve connections that lift you up, respect you, and allow you to be authentically yourself. Protect your peace." },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 1,
      question: "What is active listening?",
      options: [
        "Waiting for your turn to speak",
        "Fully focusing on the speaker and understanding their message",
        "Listening while doing other tasks",
        "Agreeing with everything someone says",
      ],
      correctAnswer: 1,
      explanation:
        "Active listening means fully concentrating on the speaker, understanding their message, and responding thoughtfully.",
    },
    {
      id: 2,
      question: "What is a healthy boundary in a relationship?",
      options: [
        "Never saying no to anyone",
        "Cutting off all communication when upset",
        "Clearly communicating your limits and needs respectfully",
        "Doing whatever the other person wants",
      ],
      correctAnswer: 2,
      explanation:
        "Healthy boundaries involve clearly and respectfully communicating your limits, needs, and expectations.",
    },
    {
      id: 3,
      question: "What is the best approach to resolving a conflict?",
      options: [
        "Avoid the person until they apologize",
        "Win the argument at all costs",
        "Listen to both sides and find a compromise",
        "Pretend the conflict doesn't exist",
      ],
      correctAnswer: 2,
      explanation:
        "Effective conflict resolution involves listening to all perspectives and working together toward a compromise.",
    },
    {
      id: 4,
      question: "What does trust require in a relationship?",
      options: [
        "Never disagreeing with the other person",
        "Consistent honesty, reliability, and respect over time",
        "Sharing every single thought you have",
        "Spending all your free time together",
      ],
      correctAnswer: 1,
      explanation:
        "Trust is built through a consistent pattern of honesty, keeping promises, and showing respect — it develops gradually over time.",
    },
    {
      id: 5,
      question: "What is a 'I' statement and why is it useful?",
      options: [
        "A statement that starts with 'I' to express feelings without blaming others",
        "A way of saying 'I am always right'",
        "A formal apology letter format",
        "A technique used only by therapists",
      ],
      correctAnswer: 0,
      explanation:
        "'I' statements like 'I feel hurt when...' express your emotions without blaming, which reduces defensiveness and opens constructive dialogue.",
    },
    {
      id: 6,
      question: "What is a red flag in a relationship?",
      options: [
        "Someone who has different hobbies than you",
        "A partner who tries to isolate you from friends and family",
        "Occasional disagreements about small things",
        "A friend who sometimes cancels plans",
      ],
      correctAnswer: 1,
      explanation:
        "Isolating someone from their support network is a serious warning sign of a controlling or unhealthy relationship.",
    },
    {
      id: 7,
      question: "What is the difference between assertiveness and aggression?",
      options: [
        "They are the same thing",
        "Assertiveness respects both your needs and others'; aggression disregards others' feelings",
        "Aggression is always physical; assertiveness is verbal",
        "Assertiveness means being passive",
      ],
      correctAnswer: 1,
      explanation:
        "Assertiveness means standing up for yourself while respecting others. Aggression pushes your needs at the expense of others' feelings.",
    },
    {
      id: 8,
      question: "Why is forgiveness important in relationships?",
      options: [
        "It means you approve of what the other person did",
        "It allows you to let go of resentment and move forward",
        "It is only necessary in romantic relationships",
        "Forgiving someone means you must stay in the relationship",
      ],
      correctAnswer: 1,
      explanation:
        "Forgiveness releases resentment and allows the relationship to heal. It does not mean condoning the behaviour or forgetting what happened.",
    },
    {
      id: 9,
      question: "What makes a friendship healthy?",
      options: [
        "One person always makes the decisions",
        "Mutual respect, support, and honest communication",
        "Never having any disagreements",
        "Talking to each other every single day",
      ],
      correctAnswer: 1,
      explanation:
        "Healthy friendships are built on mutual respect, genuine support, and the ability to communicate honestly — even when it is difficult.",
    },
    {
      id: 10,
      question: "What is 'gaslighting'?",
      options: [
        "A fun party game",
        "When someone manipulates you into questioning your own reality or feelings",
        "A type of constructive criticism",
        "When someone lights candles to create a relaxing atmosphere",
      ],
      correctAnswer: 1,
      explanation:
        "Gaslighting is a form of emotional manipulation where someone makes you doubt your own perceptions, memories, or sanity.",
    },
    {
      id: 11,
      question: "How can you support a friend going through a difficult time?",
      options: [
        "Tell them to get over it quickly",
        "Avoid them until they feel better",
        "Listen without judgment and let them know you are there for them",
        "Immediately give them advice on how to fix everything",
      ],
      correctAnswer: 2,
      explanation:
        "Sometimes people just need to feel heard. Listening without judgment and showing you care is often more helpful than rushing to solve the problem.",
    },
    {
      id: 12,
      question: "What is consent in the context of relationships?",
      options: [
        "Something that only applies to legal contracts",
        "A one-time agreement that never needs to be revisited",
        "Freely given, informed, and ongoing agreement that can be withdrawn at any time",
        "Saying yes because you feel pressured",
      ],
      correctAnswer: 2,
      explanation:
        "True consent is freely given, enthusiastic, informed, and can be withdrawn at any point. Pressure or coercion invalidates consent.",
    },
  ],
  heroImage: "/course-relationships-hero.png",
  gradientColor: "from-pink-500 to-rose-600",
};

const healthWellnessCourse: Course = {
  courseInfo: {
    title: "Health & Wellness Essentials",
    description:
      "Take care of your body and mind with practical health and wellness strategies designed for students.",
    totalLessons: 6,
    totalDuration: "1 hour 45 minutes",
    level: "Beginner",
    instructor: {
      name: "Dr. Alex Rivera",
      title: "Health & Wellness Expert",
    },
    whatYouWillLearn: [
      "Build healthy daily habits",
      "Manage stress effectively",
      "Improve sleep quality",
      "Maintain physical fitness",
      "Practice mindfulness",
      "Make healthy food choices",
    ],
  },
  lessons: [
    {
      id: 1,
      title: "Foundations of Wellness",
      duration: "15 min",
      content: [
        { type: "heading", content: "Health Is Your Greatest Asset" },
        { type: "paragraph", content: "Wellness isn't just the absence of illness—it's a proactive approach to living your best life physically, mentally, and emotionally. As a student, your body and brain are your most important tools. Taking care of them now sets the foundation for everything you'll achieve." },
        { type: "paragraph", content: "The six pillars of wellness are interconnected: physical health, mental health, sleep, nutrition, exercise, and social connection. When one pillar is weak, the others suffer. When all are strong, you experience energy, focus, and resilience that most people only dream of." },
        { type: "list", items: ["Physical wellness: regular movement, good posture, staying hydrated", "Mental wellness: managing stress, practising mindfulness, seeking help when needed", "Sleep wellness: consistent schedule, 8-10 hours for teens, quality rest", "Nutritional wellness: balanced diet, whole foods, mindful eating", "Social wellness: meaningful connections, supportive relationships, community"] },
        { type: "tip", content: "Start with just one healthy habit this week. Once it becomes automatic (usually 2-3 weeks), add another. Stacking small habits is far more effective than trying to overhaul your entire lifestyle overnight." },
        { type: "example", title: "The Wellness Ripple Effect", description: "When you sleep well, you have more energy for exercise. Exercise reduces stress. Less stress improves your eating habits. Better nutrition improves sleep quality. One positive change creates a ripple effect that transforms your entire wellbeing." },
        { type: "key-point", title: "Small Habits, Big Impact", content: "You don't need a perfect wellness routine—you need a consistent one. Drinking enough water, sleeping 8 hours, moving your body daily, and eating real food will put you ahead of 90% of people." },
      ],
    },
    {
      id: 2,
      title: "Stress Management",
      duration: "20 min",
      content: [
        { type: "heading", content: "Stress Is Not the Enemy" },
        { type: "paragraph", content: "Stress is your body's natural response to challenges. In small doses, it actually helps you perform better—it sharpens focus, increases energy, and motivates action. The problem arises when stress becomes chronic: constant worry, overwhelm, and inability to relax." },
        { type: "paragraph", content: "As a student, stress often comes from exams, social pressure, family expectations, and uncertainty about the future. You can't eliminate these stressors, but you can change how you respond to them. Stress management isn't about removing stress—it's about building resilience." },
        { type: "list", items: ["Identify your stress triggers: what situations cause you the most tension?", "Practice deep breathing: 4-7-8 technique (inhale 4s, hold 7s, exhale 8s)", "Physical activity is the most effective stress reliever—even a 10-minute walk helps", "Talk to someone: sharing your worries reduces their power", "Limit doom-scrolling: set screen time boundaries on social media"] },
        { type: "tip", content: "Create a 'stress first-aid kit'—a list of activities that reliably calm you down. It might include: calling a friend, going for a walk, listening to a specific playlist, journaling, or taking a warm shower. When stress hits, you'll know exactly what to do." },
        { type: "example", title: "The Stress Response Cycle", description: "Your body is designed to complete the stress cycle: perceive threat → stress response → take action → safety. The problem is we often get stuck in the 'stress response' stage. Physical movement (even shaking your body for 60 seconds) helps complete the cycle and release tension." },
        { type: "key-point", title: "You Can't Control Everything", content: "Focus on what you can control (your effort, your attitude, your habits) and let go of what you can't (other people's actions, exam results, the future). This simple mindset shift eliminates most unnecessary stress." },
      ],
    },
    {
      id: 3,
      title: "Sleep & Recovery",
      duration: "18 min",
      content: [
        { type: "heading", content: "Sleep: Your Secret Superpower" },
        { type: "paragraph", content: "Sleep is the most underrated performance enhancer. During sleep, your brain consolidates memories, processes emotions, repairs cells, and clears toxins. Teenagers need 8-10 hours per night, yet most get far less. Chronic sleep deprivation impairs focus, mood, and academic performance more than most students realise." },
        { type: "paragraph", content: "Sleep quality matters as much as quantity. Six hours of deep, uninterrupted sleep can be more restorative than eight hours of fragmented, poor-quality sleep. Creating the right conditions for sleep is a skill that pays dividends in every area of your life." },
        { type: "list", items: ["Keep a consistent sleep schedule—even on weekends (within 1 hour)", "Stop screens 1 hour before bed—blue light suppresses melatonin", "Keep your bedroom cool (16-18°C), dark, and quiet", "Avoid caffeine after 2pm—it has a half-life of 5-6 hours", "Create a wind-down routine: reading, stretching, or journaling"] },
        { type: "tip", content: "If you can't fall asleep within 20 minutes, get out of bed and do something calm (read a book, not your phone) until you feel sleepy. This trains your brain to associate your bed with sleep, not tossing and turning." },
        { type: "example", title: "The Cost of Lost Sleep", description: "Losing just 1 hour of sleep per night for a week impairs your cognitive function as much as staying awake for 24 hours straight. That's like showing up to school after pulling an all-nighter—every single day. Your grades, mood, and health all suffer." },
        { type: "key-point", title: "Prioritise Sleep Above All Else", content: "Sleep is not lazy—it's essential. The most successful students and professionals prioritise sleep because they know everything else works better when they're well-rested. Make 8 hours of sleep non-negotiable." },
      ],
    },
    {
      id: 4,
      title: "Nutrition Basics",
      duration: "20 min",
      content: [
        { type: "heading", content: "Fuel Your Body and Brain" },
        { type: "paragraph", content: "Food is fuel—and the quality of your fuel directly affects your energy, focus, mood, and health. You don't need to follow a strict diet or count calories. Instead, focus on eating a variety of whole, minimally processed foods that give your body the nutrients it needs to thrive." },
        { type: "paragraph", content: "Your brain uses 20% of your total energy despite being only 2% of your body weight. What you eat directly affects your ability to think, concentrate, and remember. The right nutrition can be the difference between struggling through a study session and powering through it." },
        { type: "list", items: ["Eat the rainbow: different coloured fruits and vegetables provide different nutrients", "Protein at every meal: eggs, fish, chicken, beans, nuts, yoghurt", "Complex carbs for sustained energy: wholemeal bread, oats, brown rice, sweet potatoes", "Healthy fats for brain power: avocado, nuts, olive oil, oily fish", "Stay hydrated: aim for 2 litres of water daily—dehydration causes fatigue and brain fog"] },
        { type: "tip", content: "Meal prep on Sunday: spend 1 hour preparing healthy snacks and meals for the week. Having good food ready to go makes it much easier to choose well when you're hungry and busy." },
        { type: "example", title: "Brain-Boosting Study Snacks", description: "Instead of crisps and energy drinks before studying, try: a handful of walnuts and dark chocolate, apple slices with peanut butter, Greek yoghurt with berries, or wholemeal toast with avocado. These provide sustained energy without the crash." },
        { type: "key-point", title: "Progress, Not Perfection", content: "Healthy eating isn't about being perfect—it's about making better choices most of the time. The 80/20 rule works well: eat nutritious food 80% of the time, and enjoy treats guilt-free the other 20%." },
      ],
    },
    {
      id: 5,
      title: "Physical Activity",
      duration: "18 min",
      content: [
        { type: "heading", content: "Move Your Body, Change Your Life" },
        { type: "paragraph", content: "Regular physical activity is one of the most powerful things you can do for your health. It strengthens your heart, builds muscle, improves flexibility, and boosts your immune system. But the mental benefits are equally impressive: exercise reduces anxiety, improves mood, sharpens focus, and enhances sleep quality." },
        { type: "paragraph", content: "You don't need to be an athlete or spend hours in the gym. The key is finding movement you genuinely enjoy and doing it consistently. Whether it's dancing, walking, swimming, cycling, yoga, or team sports—the best exercise is the one you'll actually do." },
        { type: "list", items: ["Aim for at least 30 minutes of moderate activity most days", "Mix cardio (walking, running, cycling) with strength training (bodyweight exercises)", "Take movement breaks every hour of sitting—stand, stretch, walk", "Find an exercise buddy for accountability and fun", "Track your activity to build momentum and see progress"] },
        { type: "tip", content: "Attach exercise to an existing habit. After your morning coffee, do 10 minutes of stretching. During your lunch break, take a 15-minute walk. After school, go for a run. Linking new habits to existing ones makes them stick." },
        { type: "example", title: "Exercise Without a Gym", description: "You don't need equipment or a membership. Try: a 20-minute YouTube workout in your bedroom, walking or cycling to school instead of driving, taking the stairs instead of the lift, dancing to your favourite songs, or doing bodyweight exercises (push-ups, squats, planks) anywhere." },
        { type: "key-point", title: "Consistency Beats Intensity", content: "A 20-minute walk every day is far more beneficial than an intense gym session once a month. The magic of exercise lies in consistency. Start small, stay consistent, and gradually increase as your fitness improves." },
      ],
    },
    {
      id: 6,
      title: "Mental Health",
      duration: "20 min",
      content: [
        { type: "heading", content: "Your Mind Matters" },
        { type: "paragraph", content: "Mental health is just as important as physical health, yet it often doesn't receive the same attention. It's normal to experience difficult emotions like sadness, anxiety, anger, and loneliness. What matters is how you manage these feelings and whether you seek support when you need it." },
        { type: "paragraph", content: "One in four people will experience a mental health challenge at some point in their life. This isn't a sign of weakness—it's a sign of being human. Breaking the stigma around mental health starts with talking openly about it and treating it with the same seriousness as physical health." },
        { type: "list", items: ["Practice daily gratitude: write down 3 things you're thankful for each day", "Limit social media: comparison is the thief of joy", "Stay connected: isolation worsens mental health—reach out to friends and family", "Develop a mindfulness practice: even 5 minutes of meditation daily makes a difference", "Know when to seek help: persistent sadness, anxiety, or hopelessness deserve professional support"] },
        { type: "tip", content: "If you're struggling, text or call a helpline. In the UK: Childline (0800 1111), Samaritans (116 123). In the US: 988 Suicide & Crisis Lifeline. These services are free, confidential, and available 24/7. Reaching out is strength, not weakness." },
        { type: "example", title: "Daily Mental Health Check-In", description: "Each evening, ask yourself three questions: (1) How am I feeling right now, on a scale of 1-10? (2) What went well today? (3) What's one thing I'm looking forward to tomorrow? This simple practice builds self-awareness and helps you notice when you need extra support." },
        { type: "key-point", title: "It's OK to Not Be OK", content: "You don't have to handle everything alone. Asking for help is one of the bravest things you can do. Mental health challenges are treatable, and recovery is possible. Your mind matters—take care of it." },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 1,
      question: "How many hours of sleep do most teenagers need?",
      options: [
        "5-6 hours",
        "6-7 hours",
        "8-10 hours",
        "12+ hours",
      ],
      correctAnswer: 2,
      explanation:
        "Most teenagers need 8-10 hours of sleep per night for optimal health and academic performance.",
    },
    {
      id: 2,
      question: "Which is an effective stress management technique?",
      options: [
        "Staying up late to finish all tasks",
        "Ignoring stress and pushing through",
        "Practicing deep breathing and mindfulness",
        "Consuming energy drinks to stay alert",
      ],
      correctAnswer: 2,
      explanation:
        "Deep breathing and mindfulness are proven techniques that help reduce stress and improve focus.",
    },
    {
      id: 3,
      question: "What is mindfulness?",
      options: [
        "Thinking about the future constantly",
        "Paying attention to the present moment without judgment",
        "Emptying your mind of all thoughts",
        "A type of physical exercise",
      ],
      correctAnswer: 1,
      explanation:
        "Mindfulness is the practice of paying attention to the present moment with openness and without judgment.",
    },
    {
      id: 4,
      question: "What effect does regular physical activity have on mental health?",
      options: [
        "It has no effect on mental health",
        "It only helps if you do intense workouts",
        "It releases endorphins that reduce stress and improve mood",
        "It makes you more tired and stressed",
      ],
      correctAnswer: 2,
      explanation:
        "Exercise releases endorphins — natural mood boosters — and reduces levels of the stress hormone cortisol.",
    },
    {
      id: 5,
      question: "What is 'sleep hygiene'?",
      options: [
        "Washing your sheets every night",
        "Habits and practices that promote consistent, quality sleep",
        "Taking sleeping pills before bed",
        "Sleeping in a very cold room",
      ],
      correctAnswer: 1,
      explanation:
        "Sleep hygiene refers to habits like keeping a consistent bedtime, limiting screens before sleep, and creating a restful environment.",
    },
    {
      id: 6,
      question: "Which nutrient group is the body's primary source of energy?",
      options: [
        "Vitamins",
        "Minerals",
        "Carbohydrates",
        "Water",
      ],
      correctAnswer: 2,
      explanation:
        "Carbohydrates are broken down into glucose, which is the body's main and preferred source of energy.",
    },
    {
      id: 7,
      question: "How much water should most students aim to drink daily?",
      options: [
        "1-2 glasses",
        "6-8 glasses (about 2 litres)",
        "Only when you feel thirsty",
        "As much soda as possible",
      ],
      correctAnswer: 1,
      explanation:
        "Most health guidelines recommend about 6-8 glasses (roughly 2 litres) of water daily, though needs vary with activity level and climate.",
    },
    {
      id: 8,
      question: "What is the 'fight or flight' response?",
      options: [
        "A martial arts technique",
        "A natural decision-making framework",
        "The body's automatic reaction to perceived danger, preparing you to fight or run",
        "A type of exercise routine",
      ],
      correctAnswer: 2,
      explanation:
        "Fight or flight is the body's stress response — it releases adrenaline, increases heart rate, and prepares you to respond to a threat.",
    },
    {
      id: 9,
      question: "Why is breakfast often called the most important meal of the day?",
      options: [
        "It is a marketing slogan with no truth",
        "It replenishes energy and nutrients after overnight fasting, improving focus and concentration",
        "You burn more calories if you eat in the morning",
        "It is only important for adults, not students",
      ],
      correctAnswer: 1,
      explanation:
        "After a night of fasting, breakfast provides the glucose and nutrients your brain and body need to focus and perform well during the day.",
    },
    {
      id: 10,
      question: "What is the benefit of a consistent daily routine?",
      options: [
        "It makes life boring and predictable",
        "It reduces decision fatigue and helps build healthy habits automatically",
        "It is only useful for very organised people",
        "It means you can never be spontaneous",
      ],
      correctAnswer: 1,
      explanation:
        "A consistent routine turns healthy behaviours into automatic habits, reduces stress from constant decision-making, and improves sleep quality.",
    },
    {
      id: 11,
      question: "When should you seek professional help for mental health?",
      options: [
        "Only when you have a diagnosed condition",
        "Never — you should handle everything on your own",
        "When feelings of sadness, anxiety, or stress start affecting your daily life",
        "Only if a teacher or parent tells you to",
      ],
      correctAnswer: 2,
      explanation:
        "If emotional difficulties start interfering with school, relationships, or daily activities, reaching out to a professional is a strong and healthy step.",
    },
    {
      id: 12,
      question: "What is the '4-7-8' breathing technique?",
      options: [
        "Breathe in for 4 seconds, hold for 7 seconds, exhale for 8 seconds",
        "Do 4 push-ups, 7 sit-ups, and 8 squats",
        "Study for 4 hours, break for 7 minutes, repeat 8 times",
        "Drink 4 glasses of water, 7 times a day, for 8 days",
      ],
      correctAnswer: 0,
      explanation:
        "The 4-7-8 technique — inhale 4 seconds, hold 7, exhale 8 — activates the parasympathetic nervous system, quickly reducing stress and anxiety.",
    },
  ],
  heroImage: "/course-health-hero.png",
  gradientColor: "from-blue-500 to-cyan-600",
};

const studySkillsCourse: Course = {
  courseInfo: {
    title: "Master Study Skills",
    description:
      "Learn how to learn effectively with proven study techniques and strategies that boost your grades and retention.",
    totalLessons: 8,
    totalDuration: "2 hours 30 minutes",
    level: "All Levels",
    instructor: {
      name: "Prof. David Kim",
      title: "Education Specialist",
    },
    whatYouWillLearn: [
      "Master effective note-taking",
      "Improve memory and retention",
      "Manage your time efficiently",
      "Prepare for exams effectively",
      "Stay motivated and focused",
      "Overcome procrastination",
    ],
  },
  lessons: [
    {
      id: 1,
      title: "Learning How to Learn",
      duration: "15 min",
      content: [
        { type: "heading", content: "The Most Important Skill You Were Never Taught" },
        { type: "paragraph", content: "School teaches you what to learn, but rarely how to learn. Yet learning how to learn effectively is arguably the most valuable skill you can develop. Students who understand how their brain processes information consistently outperform those who study harder but less strategically." },
        { type: "paragraph", content: "Your brain isn't a recording device—it's a pattern-recognition machine. It learns best through active engagement, not passive repetition. Simply re-reading notes or highlighting text feels productive but is one of the least effective study methods according to decades of research." },
        { type: "list", items: ["Active recall: test yourself instead of re-reading (flashcards, practice questions)", "Spaced repetition: review material at increasing intervals (1 day, 3 days, 7 days, 14 days)", "Interleaving: mix different topics in one study session rather than blocking one subject", "Elaboration: explain concepts in your own words and connect them to what you already know", "The Feynman Technique: if you can't explain it simply, you don't understand it well enough"] },
        { type: "tip", content: "After each class, spend 5 minutes writing down everything you remember without looking at your notes. This 'brain dump' activates recall and shows you exactly what you understood and what needs more work." },
        { type: "example", title: "Study Smarter, Not Harder", description: "Student A re-reads notes for 3 hours. Student B spends 1 hour: 20 minutes creating flashcards, 20 minutes testing themselves, and 20 minutes teaching concepts to a friend. Student B will consistently score higher despite studying less. The method matters more than the time." },
        { type: "key-point", title: "Your Brain Has a User Manual", content: "Decades of cognitive science research have revealed exactly how learning works. By aligning your study habits with how your brain naturally processes information, you can learn more in less time with better retention." },
      ],
    },
    {
      id: 2,
      title: "Note-Taking Strategies",
      duration: "20 min",
      content: [
        { type: "heading", content: "Capture Ideas That Stick" },
        { type: "paragraph", content: "Great notes aren't a transcript of the lecture—they're a processed, organised version of the key ideas. The act of taking notes forces your brain to listen actively, identify important concepts, and translate them into your own words. This processing is where real learning happens." },
        { type: "paragraph", content: "There's no single 'best' note-taking method. The ideal approach depends on the subject, the type of content, and your personal learning style. The key is to experiment with different methods and find what works for you." },
        { type: "list", items: ["Cornell Method: divide page into cues (left), notes (right), and summary (bottom)", "Mind Mapping: visual diagrams connecting a central topic to related ideas", "Outline Method: hierarchical structure using headings, subheadings, and bullet points", "Charting Method: tables to compare and contrast information (great for history, science)", "Sketch Notes: combining words with simple drawings and diagrams for visual learners"] },
        { type: "tip", content: "Review and rewrite your notes within 24 hours of taking them. This is when your memory is freshest, and the act of reorganising activates deeper processing. Add questions in the margins for future self-testing." },
        { type: "example", title: "The Cornell Method in Action", description: "Left column (cues): 'What causes photosynthesis?' Right column (notes): 'Plants use sunlight, water, and CO2 to make glucose and oxygen. Chlorophyll absorbs light energy.' Bottom (summary): 'Photosynthesis converts light energy into chemical energy stored as glucose.' Three sections, one powerful system." },
        { type: "key-point", title: "Notes Are a Study Tool, Not a Record", content: "The purpose of notes isn't to capture every word—it's to engage with the material and create a personalised study resource. Focus on understanding and summarising, not transcribing." },
      ],
    },
    {
      id: 3,
      title: "Memory Techniques",
      duration: "20 min",
      content: [
        { type: "heading", content: "Remember Everything That Matters" },
        { type: "paragraph", content: "Memory isn't a talent you're born with—it's a skill you can train. Memory champions use specific techniques to remember extraordinary amounts of information, and these same techniques work for exam revision, language learning, and everyday life." },
        { type: "paragraph", content: "Your brain remembers things that are vivid, emotional, connected, and repeated. Memory techniques work by transforming boring information into memorable images, stories, and associations. The more unusual and exaggerated the image, the better you'll remember it." },
        { type: "list", items: ["Memory Palace (Method of Loci): place items to remember along a familiar route", "Mnemonics: create acronyms or sentences (e.g., 'Every Good Boy Deserves Football' for music notes)", "Chunking: group information into smaller units (phone numbers, historical dates)", "Visual association: link abstract concepts to vivid mental images", "Spaced repetition with flashcards: use apps like Anki for optimal review timing"] },
        { type: "tip", content: "To remember someone's name, create a vivid mental image linking their name to their appearance. 'Grace' who has curly hair? Imagine her gracefully dancing with her curls flowing. The sillier the image, the better it sticks." },
        { type: "example", title: "Memory Palace for Exams", description: "To remember the stages of cell division: imagine walking into your kitchen (Interphase—everything is normal), the table is spinning (Prophase—chromosomes condense), plates line up in the middle (Metaphase—chromosomes align), plates fly to opposite walls (Anaphase—chromosomes separate), and two new kitchens appear (Telophase—two new cells form)." },
        { type: "key-point", title: "Memory Is Trainable", content: "Anyone can dramatically improve their memory with practice. The key is making information meaningful, visual, and connected to things you already know. Start using one memory technique this week and watch your recall improve." },
      ],
    },
    {
      id: 4,
      title: "Time Management",
      duration: "20 min",
      content: [
        { type: "heading", content: "Master Your Time, Master Your Life" },
        { type: "paragraph", content: "Time is the one resource you can't get back. Every student has the same 24 hours, but some accomplish far more than others. The difference isn't talent or luck—it's how they manage their time. Effective time management reduces stress, improves grades, and creates space for the things you enjoy." },
        { type: "paragraph", content: "Most students don't have a time problem—they have a priority problem. Without a clear system, urgent tasks crowd out important ones, and you spend your days reacting instead of progressing. A simple planning system changes everything." },
        { type: "list", items: ["Plan your week every Sunday: schedule study blocks, deadlines, and free time", "Use the Eisenhower Matrix: sort tasks by urgency and importance", "Time blocking: assign specific tasks to specific time slots", "The 2-minute rule: if it takes less than 2 minutes, do it now", "Batch similar tasks: do all emails together, all reading together, all admin together"] },
        { type: "tip", content: "Track how you actually spend your time for 3 days. Write down every activity in 30-minute blocks. Most students discover they have 2-3 more hours per day than they thought—it's just being lost to unfocused scrolling and task-switching." },
        { type: "example", title: "The Pomodoro Technique", description: "Set a timer for 25 minutes and focus on one task. No phone, no distractions. When the timer rings, take a 5-minute break. After 4 rounds, take a longer 15-30 minute break. This technique works because your brain can sustain deep focus for 25 minutes but struggles with hours of unfocused effort." },
        { type: "key-point", title: "Protect Your Prime Time", content: "Everyone has 2-3 hours per day when their brain is sharpest (usually morning or early afternoon). Identify your peak hours and guard them fiercely for your most important, challenging work. Save routine tasks for low-energy periods." },
      ],
    },
    {
      id: 5,
      title: "Active Reading",
      duration: "18 min",
      content: [
        { type: "heading", content: "Read to Understand, Not Just to Finish" },
        { type: "paragraph", content: "Active reading transforms reading from a passive activity into a powerful learning tool. Instead of letting your eyes glide over words while your mind wanders, active reading engages your brain in questioning, connecting, and evaluating what you read." },
        { type: "paragraph", content: "Research shows that most students retain only 10-20% of what they passively read. Active readers retain 50-80%. The difference isn't reading speed or intelligence—it's engagement. Active readers interact with the text like they're having a conversation with the author." },
        { type: "list", items: ["Preview before reading: scan headings, bold text, summaries, and images", "Ask questions: 'What is the main argument?' 'Why does this matter?'", "Annotate: highlight sparingly and write margin notes in your own words", "Summarise each section in 1-2 sentences before moving on", "Connect new information to what you already know"] },
        { type: "tip", content: "Use the SQ3R method: Survey (preview the material), Question (turn headings into questions), Read (actively), Recite (summarise from memory), Review (go back and check). This one technique can double your comprehension." },
        { type: "example", title: "Annotation That Works", description: "Bad highlighting: colouring entire paragraphs yellow. Active annotation: 'KEY IDEA: Evolution = survival of fittest' in the margin, 'How does this connect to genetics?' as a question, and a brief summary at the end of each page. Your annotations become a personalised study guide." },
        { type: "key-point", title: "Slow Down to Speed Up", content: "Active reading feels slower initially, but it saves enormous time later because you actually understand and remember the material. One thorough active read beats three passive re-reads every time." },
      ],
    },
    {
      id: 6,
      title: "Exam Preparation",
      duration: "22 min",
      content: [
        { type: "heading", content: "Ace Your Exams With Strategy" },
        { type: "paragraph", content: "Exam success is 80% preparation and 20% performance on the day. The best students don't cram—they use a strategic revision plan that starts weeks before the exam. By the time they walk into the exam hall, they're confident because they've systematically covered all the material." },
        { type: "paragraph", content: "The biggest mistake students make is confusing familiarity with knowledge. Re-reading notes makes content feel familiar, but familiarity isn't the same as being able to recall and apply information under pressure. True exam preparation means practising retrieval, not just review." },
        { type: "list", items: ["Start revision at least 3 weeks before the exam—not the night before", "Create a revision timetable that covers all topics with built-in review sessions", "Use past papers: they're the closest simulation to the real exam", "Practice under exam conditions: timed, no notes, no distractions", "Focus extra time on weak topics—don't just revise what you already know"] },
        { type: "tip", content: "After completing a past paper, don't just check your answers—analyse your mistakes. Categorise errors as: 'Didn't know it' (need to learn), 'Knew it but forgot' (need more practice), or 'Careless mistake' (need to slow down). This targeted approach is much more efficient." },
        { type: "example", title: "The 3-Week Exam Plan", description: "Week 1: Review all notes and create summary sheets for each topic. Identify weak areas. Week 2: Active recall—test yourself on each topic using flashcards and practice questions. Focus on weak areas. Week 3: Full past papers under timed conditions. Review mistakes and do final targeted revision." },
        { type: "key-point", title: "Test Yourself Before the Test Tests You", content: "The single most effective exam strategy is self-testing. Every time you retrieve information from memory, you strengthen the neural pathway. Practice questions, flashcards, and past papers are your best friends during revision." },
      ],
    },
    {
      id: 7,
      title: "Beating Procrastination",
      duration: "18 min",
      content: [
        { type: "heading", content: "Start Before You're Ready" },
        { type: "paragraph", content: "Procrastination isn't laziness—it's an emotional regulation problem. You procrastinate to avoid negative feelings associated with a task: boredom, anxiety, frustration, or fear of failure. Understanding this is the first step to overcoming it." },
        { type: "paragraph", content: "The irony of procrastination is that avoiding the task creates more stress than actually doing it. The anticipation of pain is almost always worse than the pain itself. Once you start working, the anxiety usually fades within 10-15 minutes." },
        { type: "list", items: ["The 5-minute rule: commit to working for just 5 minutes—starting is the hardest part", "Break overwhelming tasks into tiny, specific steps", "Remove distractions: put your phone in another room, use website blockers", "Set clear deadlines with accountability (tell someone your commitment)", "Reward yourself after completing difficult tasks"] },
        { type: "tip", content: "Identify your procrastination triggers. Do you avoid tasks that are boring? Unclear? Difficult? Once you know the trigger, you can address it directly. Boring? Add music. Unclear? Spend 5 minutes planning. Difficult? Start with the easiest part." },
        { type: "example", title: "The Swiss Cheese Method", description: "Instead of tackling a big essay in one sitting, poke holes in it like Swiss cheese. Monday: write the introduction (15 min). Tuesday: outline the main arguments (10 min). Wednesday: write one paragraph (20 min). By the weekend, you've made significant progress without any painful marathon sessions." },
        { type: "key-point", title: "Action Creates Motivation", content: "Don't wait to feel motivated to start—start and motivation will follow. Research confirms that action precedes motivation, not the other way around. The hardest part is the first 5 minutes. After that, momentum takes over." },
      ],
    },
    {
      id: 8,
      title: "Building Study Habits",
      duration: "17 min",
      content: [
        { type: "heading", content: "Make Success Automatic" },
        { type: "paragraph", content: "The secret to academic success isn't willpower—it's habits. Habits are behaviours that become automatic through repetition. When studying becomes as natural as brushing your teeth, you no longer need motivation or discipline to do it. The system does the work for you." },
        { type: "paragraph", content: "Research shows it takes an average of 66 days to form a new habit. The first two weeks are the hardest. After that, the behaviour gradually becomes more automatic. The key is to start small, be consistent, and never miss twice in a row." },
        { type: "list", items: ["Habit stacking: link study habits to existing routines ('After dinner, I study for 30 minutes')", "Create a dedicated study space that's only used for studying", "Start incredibly small: 10 minutes per day is better than nothing", "Track your habits visually: a streak calendar builds powerful motivation", "Design your environment: remove temptations and make studying the easy choice"] },
        { type: "tip", content: "Use the 'never miss twice' rule. Missing one day doesn't break a habit, but missing two days starts a new pattern. If you skip a study session, make the next one non-negotiable—even if it's just 10 minutes." },
        { type: "example", title: "The Identity-Based Approach", description: "Instead of 'I need to study more' (behaviour), try 'I am someone who learns every day' (identity). Each time you study, you're casting a vote for your new identity. Over time, studying becomes part of who you are, not just something you force yourself to do." },
        { type: "key-point", title: "Systems Beat Goals", content: "Goals tell you where to go. Systems get you there. Instead of fixating on 'get straight As', focus on building a daily study system. The grades will take care of themselves when the habits are in place." },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 1,
      question: "What is the most effective study technique according to research?",
      options: [
        "Re-reading notes multiple times",
        "Highlighting entire textbook pages",
        "Active recall and spaced repetition",
        "Studying for 8 hours straight",
      ],
      correctAnswer: 2,
      explanation:
        "Active recall (testing yourself) combined with spaced repetition is proven to be the most effective study method.",
    },
    {
      id: 2,
      question: "What is the Pomodoro Technique?",
      options: [
        "A cooking method that helps you relax",
        "Studying in 25-minute focused sessions with short breaks",
        "Reading your notes before bed",
        "Studying with background music",
      ],
      correctAnswer: 1,
      explanation:
        "The Pomodoro Technique involves 25-minute focused study sessions followed by 5-minute breaks to maintain concentration.",
    },
    {
      id: 3,
      question: "What is the best way to beat procrastination?",
      options: [
        "Wait until you feel motivated",
        "Set a strict 10-hour study schedule",
        "Break tasks into small, manageable steps and start with the easiest one",
        "Only study subjects you enjoy",
      ],
      correctAnswer: 2,
      explanation:
        "Breaking tasks into small steps lowers the barrier to starting and builds momentum to keep going.",
    },
    {
      id: 4,
      question: "What is 'spaced repetition'?",
      options: [
        "Studying the same material repeatedly in one sitting",
        "Reviewing material at increasing intervals over time to strengthen memory",
        "Taking a space between every word when reading",
        "Repeating a mantra while studying",
      ],
      correctAnswer: 1,
      explanation:
        "Spaced repetition means reviewing information at gradually longer intervals, which takes advantage of how the brain forms long-term memories.",
    },
    {
      id: 5,
      question: "What is the Cornell Note-Taking method?",
      options: [
        "Writing notes in red ink only",
        "Dividing the page into cues, notes, and summary sections for organised review",
        "Copying the textbook word for word",
        "Using only bullet points with no headings",
      ],
      correctAnswer: 1,
      explanation:
        "The Cornell method divides your page into three sections — cues (left), notes (right), and a summary (bottom) — making review much more efficient.",
    },
    {
      id: 6,
      question: "What is a 'mind map'?",
      options: [
        "A map of your school campus",
        "A visual diagram that connects a central topic to related ideas and subtopics",
        "A list of things you need to memorise",
        "A GPS for studying different subjects",
      ],
      correctAnswer: 1,
      explanation:
        "Mind maps are visual tools that radiate from a central idea, helping you see connections between concepts and organise information creatively.",
    },
    {
      id: 7,
      question: "Why is teaching someone else an effective study strategy?",
      options: [
        "It lets you avoid doing your own homework",
        "It forces you to understand the material deeply enough to explain it clearly",
        "It is only effective for extroverted people",
        "It only works for language subjects",
      ],
      correctAnswer: 1,
      explanation:
        "Explaining material to someone else exposes gaps in your understanding and reinforces your knowledge — this is called the 'Feynman Technique'.",
    },
    {
      id: 8,
      question: "What is the Eisenhower Matrix used for?",
      options: [
        "Solving maths problems",
        "Prioritising tasks by urgency and importance into four quadrants",
        "Scheduling social media posts",
        "Memorising historical dates",
      ],
      correctAnswer: 1,
      explanation:
        "The Eisenhower Matrix sorts tasks into four boxes — urgent/important, important/not urgent, urgent/not important, and neither — helping you focus on what truly matters.",
    },
    {
      id: 9,
      question: "What is 'active reading'?",
      options: [
        "Reading while walking on a treadmill",
        "Engaging with the text by highlighting, questioning, and summarising as you read",
        "Reading out loud as fast as possible",
        "Skimming through the first and last sentences only",
      ],
      correctAnswer: 1,
      explanation:
        "Active reading means interacting with the text through annotations, questions, and summaries, which dramatically improves comprehension and retention.",
    },
    {
      id: 10,
      question: "What is the testing effect?",
      options: [
        "The anxiety you feel before a test",
        "Doing worse on tests when you study too much",
        "The finding that retrieving information from memory strengthens long-term retention",
        "A side effect of taking too many practice exams",
      ],
      correctAnswer: 2,
      explanation:
        "The testing effect shows that actively recalling information — even through low-stakes self-quizzing — is more effective than passively re-reading.",
    },
    {
      id: 11,
      question: "What is the 'two-minute rule' for productivity?",
      options: [
        "Study for only two minutes then take a break",
        "If a task takes less than two minutes, do it immediately instead of adding it to your to-do list",
        "Meditate for two minutes before every study session",
        "Spend two minutes choosing what to study",
      ],
      correctAnswer: 1,
      explanation:
        "The two-minute rule prevents small tasks from piling up. Doing them immediately frees mental energy for bigger, more focused work.",
    },
    {
      id: 12,
      question: "Why is sleep important for learning and memory?",
      options: [
        "Sleep is not related to learning",
        "Your brain consolidates and organises new information into long-term memory during sleep",
        "Sleeping allows you to dream about your notes",
        "It is only important the night before an exam",
      ],
      correctAnswer: 1,
      explanation:
        "During sleep, your brain replays and strengthens neural connections formed during the day, converting short-term learning into lasting memories.",
    },
  ],
  heroImage: "/course-study-hero.png",
  gradientColor: "from-yellow-500 to-amber-600",
};

// Course registry
const courses: Record<string, Course> = {
  "financial-literacy": financialLiteracyCourse,
  "emotional-intelligence": emotionalIntelligenceCourse,
  "career-planning": careerPlanningCourse,
  relationships: relationshipsCourse,
  "health-wellness": healthWellnessCourse,
  "study-skills": studySkillsCourse,
};

// Export functions for data access
export function getCourseById(courseId: string): Course | null {
  return courses[courseId] || null;
}

export function getAllCourseIds(): string[] {
  return Object.keys(courses);
}

export function getAllCourses(): Course[] {
  return Object.values(courses);
}

export function getCourseInfo(courseId: string): CourseInfo | null {
  const course = courses[courseId];
  return course?.courseInfo || null;
}
