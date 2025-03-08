// this code is useful for inserting the data in the db

// importanttopic.js
const mongoose = require("mongoose");
const ImportantTopic = require("../models/Importantchaptopic");
const mongoURI = process.env.mongoURI;//here the db url  of your own need to be present

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const importantTopics = [
    // 🏫 *Class 1-5: Basic Subjects*

    { class: 1, subject: "Mathematics", chapter: "Numbers", topics: ["Counting", "Addition", "Subtraction", "Number Patterns"] },
    { class: 1, subject: "English", chapter: "Alphabet", topics: ["Vowels", "Consonants", "Basic Words", "Simple Sentences"] },
    { class: 1, subject: "Science", chapter: "Living & Non-living Things", topics: ["Characteristics of Living Things", "Examples of Non-living Things"] },
    { class: 1, subject: "Computer Science", chapter: "Introduction to Computers", topics: ["What is a Computer?", "Uses of Computers"] },
    { class: 1, subject: "Computer Science", chapter: "Parts of a Computer", topics: ["Monitor", "Keyboard", "Mouse", "CPU"] },
    { class: 1, subject: "Computer Science", chapter: "Basic Computer Operations", topics: ["Turning On/Off", "Using the Mouse", "Opening Programs"] },

    { class: "2", subject: "Science", chapter: "Plants", topics: ["Types of Plants", "Parts of a Plant", "Uses of Plants"] },
    // { class: "3", subject: "Social Studies", chapter: "Community Helpers", topics: ["Doctors", "Teachers", "Police", "Firefighters"] },
    { class: 3, subject: "Mathematics", chapter: "Numbers", topics: ["Counting and Number Names", "Place Value", "Comparing Numbers", "Simple Patterns"] },
    { class: 3, subject: "English", chapter: "Alphabet", topics: ["Vowels and Consonants", "Simple Words", "Rhyming Words", "Forming Sentences"] },
    { class: 3, subject: "Science", chapter: "Living and Non-living Things", topics: ["Definition", "Examples", "Differences"] },
    { class: 3, subject: "Social Science", chapter: "My Family and Relatives", topics: ["Family Types", "Roles and Relationships"] },

    // { class: "4", subject: "Mathematics", chapter: "Fractions", topics: ["Proper & Improper Fractions", "Equivalent Fractions", "Fraction Addition"] },
    { class: 4, subject: "Mathematics", chapter: "Fractions", topics: ["Introduction to Fractions", "Types of Fractions", "Fraction Operations"] },
    { class: 4, subject: "English", chapter: "Grammar", topics: ["Nouns", "Verbs", "Adjectives", "Tenses"] },
    { class: 4, subject: "Science", chapter: "Plant Life", topics: ["Parts of a Plant", "Photosynthesis", "Types of Plants"] },
    { class: 4, subject: "Social Science", chapter: "My Country", topics: ["National Symbols", "Famous Monuments", "Diversity of India"] },

    // { class: "5", subject: "Science", chapter: "Solar System", topics: ["Planets", "Moon Phases", "Sun & Stars"] },
    { class: 5, subject: "Tamil", chapter: "கவிதைகள்", topics: ["பாடல்கள்", "சிந்தனை கவிதைகள்"] },
    { class: 5, subject: "English", chapter: "Prose", topics: ["Moral Stories", "Descriptive Essays"] },
    { class: 5, subject: "Mathematics", chapter: "Numbers", topics: ["Place Value", "Large Numbers", "Operations"] },
    { class: 5, subject: "Science", chapter: "Human Body", topics: ["Organs", "Functions", "Health and Hygiene"] },
    { class: 5, subject: "Social Science", chapter: "Indian History", topics: ["Ancient Civilizations", "Freedom Fighters"] },

    // 📚 *Class 6-8: Intermediate Level*
    { class: 6, subject: "Tamil", chapter: "சிறுகதைகள்", topics: ["நேர்மை கதைகள்", "நட்பு கதைகள்"] },
    { class: 6, subject: "English", chapter: "Prose", topics: ["Moral Stories", "Descriptive Passages"] },
    { class: 6, subject: "Mathematics", chapter: "Whole Numbers", topics: ["Number System", "Operations", "Patterns"] },
    { class: 6, subject: "Science", chapter: "Food and Nutrition", topics: ["Types of Food", "Nutrients", "Balanced Diet"] },
    { class: 6, subject: "Social Science", chapter: "History of India", topics: ["Ancient Kingdoms", "Independence Movement"] },

    //class 7
    { class: 7, subject: "Tamil", chapter: "அகநானூறு", topics: ["அகவியல்", "பாடல்கள்"] },
    { class: 7, subject: "Mathematics", chapter: "Algebra", topics: ["Variables", "Expressions", "Equations"] },
    { class: 7, subject: "English", chapter: "Grammar", topics: ["Tenses", "Articles", "Prepositions"] },
    { class: 7, subject: "Science", chapter: "Light", topics: ["Reflection", "Refraction", "Lenses"] },
    { class: 7, subject: "Social Science", chapter: "History of India", topics: ["Ancient Civilizations", "Freedom Movement"] },

    //class 8
    { class: 8, subject: "Tamil", chapter: "இலக்கணம்", topics: ["சொல் வகைகள்", "வாக்கிய வகைகள்"] },
    { class: 8, subject: "Tamil", chapter: "சொற்களின் பயிற்சி", topics: ["புதிய சொற்கள்", "பொருள் விளக்கம்"] },
    { class: 8, subject: "English", chapter: "Prose", topics: ["Comprehension", "Summary Writing"] },
    { class: 8, subject: "English", chapter: "Poetry", topics: ["Figures of Speech", "Poetic Devices"] },
    { class: 8, subject: "Mathematics", chapter: "Statistics", topics: ["Mean", "Median", "Mode"] },
    { class: 8, subject: "Mathematics", chapter: "Probability", topics: ["Basic Concepts", "Simple Problems"] },
    { class: 8, subject: "Science", chapter: "Cell Structure", topics: ["Types of Cells", "Functions of Organelles"] },
    { class: 8, subject: "Science", chapter: "Reproduction in Animals", topics: ["Types of Reproduction", "Life Cycle"] },
    { class: 8, subject: "Social Science", chapter: "National Movements", topics: ["Freedom Struggle", "Major Leaders"] },
    { class: 8, subject: "Social Science", chapter: "Economic Development", topics: ["Sectors of Economy", "Economic Policies"] },

    // 📖 *Class 9-10: Board-Level Preparation*
    // { class: "9", subject: "Mathematics", chapter: "Linear Equations", topics: ["Graphing Equations", "Simultaneous Equations", "Slope & Intercepts"] },
    // { class: "9", subject: "Science", chapter: "Atoms & Molecules", topics: ["Atomic Structure", "Chemical Bonds", "Mole Concept"] },
    // { class: "9", subject: "Social Science", chapter: "French Revolution", topics: ["Causes", "Effects", "Key Figures", "Consequences"] },
    { class: 9, subject: "Tamil", chapter: "இலக்கணம்", topics: ["சொல் வகைகள்", "வாக்கிய அமைப்பு"] },
    { class: 9, subject: "Tamil", chapter: "சிறுகதை", topics: ["சிறுகதை கூறுதல்", "சிறுகதை அமைப்பு"] },
    { class: 9, subject: "English", chapter: "Prose", topics: ["Reading Comprehension", "Character Analysis"] },
    { class: 9, subject: "English", chapter: "Poetry", topics: ["Poetic Devices", "Themes in Poetry"] },
    { class: 9, subject: "English", chapter: "Grammar", topics: ["Tenses", "Active and Passive Voice"] },
    { class: 9, subject: "Mathematics", chapter: "Algebra", topics: ["Linear Equations", "Quadratic Equations"] },
    { class: 9, subject: "Mathematics", chapter: "Geometry", topics: ["Triangles", "Circles"] },
    { class: 9, subject: "Mathematics", chapter: "Trigonometry", topics: ["Basic Ratios", "Trigonometric Identities"] },
    { class: 9, subject: "Science", chapter: "Laws of Motion", topics: ["Newton's Laws", "Applications of Motion"] },
    { class: 9, subject: "Science", chapter: "Atoms and Molecules", topics: ["Structure of Atom", "Molecular Formulas"] },
    { class: 9, subject: "Science", chapter: "Tissues", topics: ["Plant Tissues", "Animal Tissues"] },
    { class: 9, subject: "Social Science", chapter: "French Revolution", topics: ["Causes", "Impact"] },
    { class: 9, subject: "Social Science", chapter: "Industrial Revolution", topics: ["Technological Changes", "Effects on Society"] },
    { class: 9, subject: "Social Science", chapter: "Indian National Movement", topics: ["Important Leaders", "Key Events"] },
    

    // { class: "10", subject: "Mathematics", chapter: "Trigonometry", topics: ["Sine, Cosine, Tangent", "Trigonometric Identities", "Applications"] },
    // { class: "10", subject: "Science", chapter: "Periodic Table", topics: ["Groups & Periods", "Trends in Elements", "Electron Configuration"] },
    // { class: "10", subject: "Social Science", chapter: "Indian Freedom Struggle", topics: ["Gandhi's Role", "Partition of India", "British Policies"] },
    { class: 10, subject: "Tamil", chapter: "இலக்கியம்", topics: ["பாவங்கள்", "அறமுடைமையியல்"] },
    { class: 10, subject: "Tamil", chapter: "கவிதைகள்", topics: ["கவிதைத் தோற்றம்", "அளவியல்"] },
    { class: 10, subject: "English", chapter: "Prose", topics: ["Comprehension", "Theme Analysis"] },
    { class: 10, subject: "English", chapter: "Poetry", topics: ["Poetic Devices", "Interpretation"] },
    { class: 10, subject: "Mathematics", chapter: "Algebra", topics: ["Polynomials", "Linear Equations"] },
    { class: 10, subject: "Mathematics", chapter: "Geometry", topics: ["Circles", "Constructions"] },
    { class: 10, subject: "Mathematics", chapter: "Trigonometry", topics: ["Sine and Cosine Rules", "Applications"] },
    { class: 10, subject: "Science", chapter: "Electricity", topics: ["Ohm's Law", "Electric Circuits"] },
    { class: 10, subject: "Science", chapter: "Chemical Reactions", topics: ["Types of Reactions", "Balancing Equations"] },
    { class: 10, subject: "Social Science", chapter: "Indian Freedom Struggle", topics: ["Gandhian Era", "Partition of India"] },
    { class: 10, subject: "Social Science", chapter: "Indian Constitution", topics: ["Fundamental Rights", "Directive Principles"] },
    

    // 🎓 *Class 11-12: Advanced Subjects*
    // { class: "11", subject: "Mathematics", chapter: "Calculus", topics: ["Limits", "Derivatives", "Integrals", "Differential Equations"] },
    // { class: "11", subject: "Physics", chapter: "Kinematics", topics: ["Equations of Motion", "Projectile Motion", "Vector Calculations"] },
    // { class: "11", subject: "Chemistry", chapter: "Thermodynamics", topics: ["Laws of Thermodynamics", "Enthalpy", "Entropy"] },
    // { class: "11", subject: "Biology", chapter: "Cell Biology", topics: ["Cell Structure", "Cell Division", "Organelles"] },
    // { class: "11", subject: "Computer Science", chapter: "Programming Basics", topics: ["Variables", "Loops", "Functions", "Conditionals"] },

    { class: 11, subject: "Tamil", chapter: "இலக்கணம்", topics: ["சொற்றொடர்", "வாக்கியம்"] },
    { class: 11, subject: "English", chapter: "Prose", topics: ["Comprehension", "Critical Appreciation"] },
    { class: 11, subject: "Mathematics", chapter: "Sets", topics: ["Types of Sets", "Set Operations"] },
    { class: 11, subject: "Physics", chapter: "Units & Measurements", topics: ["SI Units", "Measurement Errors"] },
    { class: 11, subject: "Chemistry", chapter: "Structure of Atom", topics: ["Atomic Models", "Quantum Numbers"] },
    { class: 11, subject: "Biology", chapter: "Cell Structure", topics: ["Cell Theory", "Organelles"] },
    { class: 11, subject: "Computer Science", chapter: "Introduction to Programming", topics: ["Programming Languages", "Flowcharts"] },
    { class: 11, subject: "Commerce", chapter: "Business Environment", topics: ["Types of Business", "Business Risks"] },
    { class: 11, subject: "Economics", chapter: "Demand and Supply", topics: ["Law of Demand", "Elasticity of Demand"] },

    { class: "12", subject: "Mathematics", chapter: "Probability", topics: ["Binomial Theorem", "Permutations & Combinations", "Bayes' Theorem"] },
    { class: "12", subject: "Physics", chapter: "Electromagnetism", topics: ["Faraday's Law", "Maxwell's Equations", "Magnetic Fields"] },
    { class: "12", subject: "Chemistry", chapter: "Organic Chemistry", topics: ["Alcohols", "Aldehydes", "Ketones", "Aromatic Compounds"] },
    { class: "12", subject: "Biology", chapter: "Genetics", topics: ["Mendelian Genetics", "DNA & RNA", "Gene Mutation"] },
    { class: "12", subject: "Computer Science", chapter: "Data Structures", topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Graphs"] },

    // 🌍 *Additional Subjects: Geography, Economics, Political Science*
    { class: "9", subject: "Geography", chapter: "Climate", topics: ["Weather vs Climate", "Factors Affecting Climate"] },
    { class: "10", subject: "Economics", chapter: "Indian Economy", topics: ["Sectors of Economy", "GDP & Growth"] },
    { class: "12", subject: "Political Science", chapter: "Democracy", topics: ["Features of Democracy", "Challenges & Importance"] },
];

const insertData = async () => {
    try {
        await ImportantTopic.insertMany(importantTopics);
        console.log(" Important topics inserted successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error(" Error inserting data:", error);
    }
};

insertData();