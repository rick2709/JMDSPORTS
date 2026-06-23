export const WHATSAPP_NUMBER = '263783316659'

const HOCKEY_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjlXfx-DTxc_CHceYczFUmCt8crwJGXnYvBNvBKwMBg&s'
const SWIMMING_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIZcRKU68aahtY0yd9ufIh5YxEIKzE44EB8JL3i7LhQ&s=10'
const BOXING_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_blqX1as7ntU0oQDmH37jwaFayvkN4SMjdG0UkG8gw&s=10'

export const SPORTS_CONFIG = [
  {
    id: 'tennis',
    name: 'Tennis',
    emoji: '🎾',
    tagline: 'Serve. Spin. Win.',
    brief: 'Beginner to elite coaching on professional courts.',
    homeCardImg: '/tennishand.jpg',
    heroHeadline: 'MASTER THE GAME',
    heroSubtext: 'Professional tennis coaching for all ages and skill levels. From your first racket swing to national competition.',
    heroImage: '/court.jpg',
    programs: [
      {
        title: 'Beginner Coaching',
        subtitle: 'Ages 6–16 & Adults',
        description: 'Perfect for newcomers. Teaches all fundamentals — grip, stance, footwork, rallying, and serving — in a fun, pressure-free environment.',
        features: ['Grip & footwork basics', 'Serve & return drills', 'Rally consistency', 'Court etiquette', 'Fun games & match play', 'Parent observation welcome'],
        price: '$30/month', tag: 'STARTER', img: '/blackgirlracket.png',
      },
      {
        title: 'Intermediate Training',
        subtitle: 'Skill Development',
        description: 'Take your game to the next level. Tactical shot selection, spin variations, net play, and competitive match strategy.',
        features: ['Topspin & slice technique', 'Net approach & volleys', 'Match strategy', 'Competitive drilling', 'Video feedback', 'Small group format'],
        price: '$55/month', tag: 'POPULAR', img: '/tennishand.jpg',
      },
      {
        title: 'Elite / Advanced',
        subtitle: 'Tournament Prep',
        description: 'For serious competitors. High-intensity training, full video analysis, physical conditioning, and complete tournament preparation.',
        features: ['Daily on-court sessions', '1-on-1 with Head Coach', 'Full video analysis', 'Fitness & conditioning', 'Tournament prep', 'Mental performance coaching'],
        price: '$90/month', tag: 'ELITE', img: '/racket on ground.jpg',
      },
    ],
    coaches: [
      { name: 'Coach Joseph Mhike', title: 'Head Tennis Coach', img: '/blackgirlracket.png', exp: '15+ years', bio: 'Former national champion and certified ITF Level 3 coach. Joseph founded JBMSPORTS to give Zimbabwean athletes access to world-class coaching.' },
      { name: 'Coach Tariro Ndlovu', title: 'Juniors & Development', img: '/tennishand.jpg', exp: '8 years', bio: 'Passionate about growing the game from the roots. Tariro has coached over 200 young players aged 6–16 across Harare.' },
      { name: 'Coach Simba Chikwanda', title: 'Fitness & Conditioning', img: '/racket on ground.jpg', exp: '10 years', bio: 'Certified strength and conditioning specialist bringing elite-level athletic training to the tennis court.' },
    ],
    pricing: [
      { name: 'Starter', price: 30, features: ['2 sessions/week', 'Group training', 'Skill assessment', 'Court access', 'Community membership'], cta: 'GET STARTED' },
      { name: 'Pro', price: 55, features: ['4 sessions/week', 'Small group format', 'Monthly report', 'Court access', '10% gear discount', 'WhatsApp coaching group'], cta: 'JOIN PRO', highlighted: true, badge: 'MOST POPULAR' },
      { name: 'Elite', price: 90, features: ['Daily sessions', '1-on-1 coaching', 'Video analysis', 'Fitness conditioning', 'Tournament prep', '20% gear discount'], cta: 'GO ELITE' },
    ],
    bookingSubmitLabel: 'BOOK MY TENNIS SESSION',
    extraFields: [],
    featuredMerch: [
      { name: 'Wilson Pro Staff 97 Racket', price: 85, condition: 'new', img: '/racket.jpg' },
      { name: 'Nike Court Zoom Shoes', price: 75, condition: 'new', img: '/court.jpg' },
      { name: 'Head Speed MP Racket (2022)', price: 40, condition: 'preloved', img: '/racket on ground.jpg', conditionNote: 'Restrung, grip replaced', conditionRating: 4 },
      { name: 'Babolat Shorts (M)', price: 12, condition: 'preloved', img: '/balls.jpg', conditionNote: 'Faded slightly, no damage', conditionRating: 3 },
    ],
  },

  {
    id: 'hockey',
    name: 'Hockey',
    emoji: '🏒',
    tagline: 'Stick. Move. Score.',
    brief: 'Field hockey training for all skill levels and ages.',
    homeCardImg: HOCKEY_IMG,
    heroHeadline: 'DOMINATE THE PITCH',
    heroSubtext: 'World-class field hockey coaching. Master stick skills, team tactics, and competitive play on premium surfaces.',
    heroImage: HOCKEY_IMG,
    programs: [
      {
        title: 'Beginner Hockey',
        subtitle: 'Stick Skills & Basics',
        description: 'Foundation-first coaching focused on stick handling, ball control, basic positioning, and court movement.',
        features: ['Dribbling & stick skills', 'Basic ball control', 'Positioning intro', 'Rules & etiquette', 'Team dynamics', 'Fun match formats'],
        price: '$28/month', tag: 'STARTER', img: HOCKEY_IMG,
      },
      {
        title: 'Intermediate Hockey',
        subtitle: 'Match Play & Tactics',
        description: 'Elevate your game with advanced passing, set plays, structured match awareness, and position-specific training.',
        features: ['Advanced passing', 'Set play patterns', 'Match awareness', 'Position training', 'Competitive scrimmages', 'Video review sessions'],
        price: '$50/month', tag: 'POPULAR', img: HOCKEY_IMG,
      },
      {
        title: 'Elite Hockey',
        subtitle: 'Competitive Prep',
        description: 'Advanced training for competitive and national-level players. Leadership, advanced tactics, and full match preparation.',
        features: ['Daily training sessions', 'Leadership development', 'Advanced set plays', 'Fitness conditioning', 'Tournament preparation', 'Match analysis'],
        price: '$85/month', tag: 'ELITE', img: HOCKEY_IMG,
      },
    ],
    coaches: [
      { name: 'Coach Rudo Makoni', title: 'Head Hockey Coach', img: HOCKEY_IMG, exp: '12+ years', bio: 'Former Zimbabwe national hockey team midfielder with 12+ years coaching experience at club and national level.' },
      { name: 'Coach Tafadzwa Gumbo', title: 'Defensive Specialist', img: HOCKEY_IMG, exp: '7 years', bio: 'Specializes in defensive positioning and goalkeeper coaching, with a talent for building team chemistry.' },
      { name: 'Coach Patience Nyamadzawo', title: 'Youth & Development', img: HOCKEY_IMG, exp: '9 years', bio: 'Dedicated to junior development, coaching over 150 young players across Harare and Bulawayo.' },
    ],
    pricing: [
      { name: 'Starter', price: 28, features: ['2 sessions/week', 'Group training', 'Skill drills', 'Pitch access', 'Team membership'], cta: 'GET STARTED' },
      { name: 'Pro', price: 50, features: ['4 sessions/week', 'Position-specific training', 'Monthly report', 'Pitch access', '10% gear discount', 'WhatsApp group'], cta: 'JOIN PRO', highlighted: true, badge: 'MOST POPULAR' },
      { name: 'Elite', price: 85, features: ['Daily sessions', '1-on-1 coaching', 'Match analysis', 'Fitness conditioning', 'Tournament prep', '20% gear discount'], cta: 'GO ELITE' },
    ],
    bookingSubmitLabel: 'BOOK MY HOCKEY SESSION',
    extraFields: [],
    featuredMerch: [
      { name: 'Grays GX5000 Hockey Stick', price: 65, condition: 'new', img: HOCKEY_IMG },
      { name: 'Adidas Hockey Shoes', price: 70, condition: 'new', img: HOCKEY_IMG },
      { name: 'Grays GX3000 Stick (2022)', price: 30, condition: 'preloved', img: HOCKEY_IMG, conditionNote: 'Light surface scratches', conditionRating: 4 },
      { name: 'Hockey Shin Guards (M)', price: 10, condition: 'preloved', img: HOCKEY_IMG, conditionNote: 'Used one season', conditionRating: 3 },
    ],
  },

  {
    id: 'swimming',
    name: 'Swimming',
    emoji: '🏊',
    tagline: 'Dive. Glide. Finish.',
    brief: 'Technique-first swim coaching from stroke basics to race prep.',
    homeCardImg: SWIMMING_IMG,
    heroHeadline: 'GO THE DISTANCE',
    heroSubtext: 'Stroke technique, lane training, and competitive swim programs for all ages. From water confidence to race-ready.',
    heroImage: SWIMMING_IMG,
    programs: [
      {
        title: 'Beginner Swimming',
        subtitle: 'Water Confidence',
        description: 'Build water confidence with fundamental strokes — freestyle and backstroke — in a safe, encouraging environment.',
        features: ['Water safety basics', 'Freestyle technique', 'Backstroke fundamentals', 'Breathing rhythm', 'Float & kick drills', 'Fun water games'],
        price: '$32/month', tag: 'STARTER', img: SWIMMING_IMG,
      },
      {
        title: 'Intermediate Swimming',
        subtitle: 'All 4 Strokes',
        description: 'Master butterfly and breaststroke, perfect flip turns, and build endurance for timed laps and first competitions.',
        features: ['Butterfly technique', 'Breaststroke mastery', 'Flip turns', 'Endurance training', 'Turn & start speed', 'Structured sets'],
        price: '$58/month', tag: 'POPULAR', img: SWIMMING_IMG,
      },
      {
        title: 'Elite Swimming',
        subtitle: 'Race Preparation',
        description: 'Competitive swim training with race starts, splits analysis, pace strategies, and full meet preparation.',
        features: ['Race start techniques', 'Splits analysis', 'Pace strategy', 'Competition prep', 'Video analysis', 'Dryland conditioning'],
        price: '$95/month', tag: 'ELITE', img: SWIMMING_IMG,
      },
    ],
    coaches: [
      { name: 'Coach Nyasha Banda', title: 'Head Swim Coach', img: SWIMMING_IMG, exp: '11 years', bio: 'Former Zimbabwean national swimmer with 11+ years coaching experience. Specializes in sprint events and technique correction.' },
      { name: 'Coach Chipo Mutasa', title: 'Youth Swim Specialist', img: SWIMMING_IMG, exp: '6 years', bio: 'Dedicated to junior development. Chipo has introduced over 120 young swimmers to competitive aquatics.' },
      { name: 'Coach Farai Ncube', title: 'Performance & Race Coach', img: SWIMMING_IMG, exp: '9 years', bio: 'Former distance swimmer turned elite coach, specializing in race strategy and performance optimisation.' },
    ],
    pricing: [
      { name: 'Starter', price: 32, features: ['2 sessions/week', 'Group training', 'Stroke assessment', 'Pool access', 'Community membership'], cta: 'GET STARTED' },
      { name: 'Pro', price: 58, features: ['4 sessions/week', 'Small group', 'Monthly report', 'Pool access', '10% gear discount', 'WhatsApp group'], cta: 'JOIN PRO', highlighted: true, badge: 'MOST POPULAR' },
      { name: 'Elite', price: 95, features: ['Daily sessions', '1-on-1 coaching', 'Race analysis', 'Dryland conditioning', 'Competition prep', '20% gear discount'], cta: 'GO ELITE' },
    ],
    bookingSubmitLabel: 'BOOK MY SWIM SESSION',
    extraFields: [
      { id: 'strokePreference', label: 'Stroke Preference', type: 'select', options: ['Freestyle', 'Backstroke', 'Breaststroke', 'Butterfly', 'All Strokes'] },
    ],
    featuredMerch: [
      { name: 'Speedo Fastskin Goggles', price: 28, condition: 'new', img: SWIMMING_IMG },
      { name: 'Arena Carbon Core Swimsuit', price: 55, condition: 'new', img: SWIMMING_IMG },
      { name: 'Arena Powerskin Suit (M)', price: 22, condition: 'preloved', img: SWIMMING_IMG, conditionNote: '5 competitions used', conditionRating: 4 },
      { name: 'Speedo Training Fins Size 8', price: 14, condition: 'preloved', img: SWIMMING_IMG, conditionNote: 'Some scuff marks', conditionRating: 3 },
    ],
  },

  {
    id: 'boxing',
    name: 'Boxing',
    emoji: '🥊',
    tagline: 'Train. Jab. Conquer.',
    brief: 'Fitness boxing and competitive training for all ages.',
    homeCardImg: BOXING_IMG,
    heroHeadline: 'FIGHT FOR IT',
    heroSubtext: 'From cardio bag work to competitive bout preparation. Discipline, conditioning, and ring craft for every level.',
    heroImage: BOXING_IMG,
    programs: [
      {
        title: 'Fitness Boxing',
        subtitle: 'Cardio & Conditioning',
        description: 'High-energy fitness boxing with bag work, pad work, and conditioning circuits. No sparring — pure athletic training.',
        features: ['Bag work & pad drills', 'Boxing footwork', 'Cardio circuits', 'Core strength training', 'Defence fundamentals', 'No sparring required'],
        price: '$25/month', tag: 'FITNESS', img: BOXING_IMG,
      },
      {
        title: 'Amateur Boxing',
        subtitle: 'Technique & Sparring',
        description: 'Full boxing training — punch technique, footwork, ring craft, and supervised sparring for amateur competition.',
        features: ['Punch technique drills', 'Ring footwork', 'Defense & counter', 'Supervised sparring', 'Fight preparation', 'Amateur match formats'],
        price: '$48/month', tag: 'POPULAR', img: BOXING_IMG,
      },
      {
        title: 'Competitive / Elite',
        subtitle: 'Bout Preparation',
        description: 'Elite fight preparation for serious competitors. Bout prep, southpaw strategy, strength and conditioning, and mental fortitude.',
        features: ['Bout-specific prep', 'Southpaw strategy', 'Strength & conditioning', 'Sparring strategy', 'Mental coaching', 'Competition management'],
        price: '$80/month', tag: 'ELITE', img: BOXING_IMG,
      },
    ],
    coaches: [
      { name: 'Coach Tendai Moyo', title: 'Head Boxing Coach', img: BOXING_IMG, exp: '14 years', bio: "Former national amateur boxing champion, now one of Zimbabwe's most respected boxing coaches with 14+ years developing fighters." },
      { name: 'Coach Blessing Dube', title: 'Fitness & Conditioning', img: BOXING_IMG, exp: '8 years', bio: 'Specialist in boxing-specific fitness. Blessing designs conditioning programs that build explosive power and ring endurance.' },
      { name: 'Coach Grace Zimuto', title: 'Youth & Beginner Boxing', img: BOXING_IMG, exp: '5 years', bio: 'Focused on creating a safe, empowering boxing environment for beginners and young athletes aged 8–18.' },
    ],
    pricing: [
      { name: 'Fitness', price: 25, features: ['2 sessions/week', 'Bag & pad work', 'Cardio circuits', 'No sparring', 'Open gym access'], cta: 'GET STARTED' },
      { name: 'Amateur', price: 48, features: ['4 sessions/week', 'Technique training', 'Supervised sparring', 'Ring access', '10% gear discount', 'WhatsApp group'], cta: 'JOIN AMATEUR', highlighted: true, badge: 'MOST POPULAR' },
      { name: 'Elite', price: 80, features: ['Daily sessions', '1-on-1 fight prep', 'Bout strategy', 'Strength conditioning', 'Competition prep', '20% gear discount'], cta: 'GO ELITE' },
    ],
    bookingSubmitLabel: 'BOOK MY BOXING SESSION',
    extraFields: [
      { id: 'boxingType', label: 'Boxing Type', type: 'select', options: ['Fitness Only', 'Amateur Sparring', 'Competitive'] },
    ],
    featuredMerch: [
      { name: 'Everlast Pro Gloves 16oz', price: 48, condition: 'new', img: BOXING_IMG },
      { name: 'Title Boxing Headgear', price: 55, condition: 'new', img: BOXING_IMG },
      { name: 'Everlast 14oz Gloves', price: 22, condition: 'preloved', img: BOXING_IMG, conditionNote: 'Used 6 months, cleaned', conditionRating: 4 },
      { name: 'Boxing Headgear (M)', price: 20, condition: 'preloved', img: BOXING_IMG, conditionNote: 'Light padding wear', conditionRating: 3 },
    ],
  },
]
