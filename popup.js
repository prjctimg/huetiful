import { file } from "bun";
const stoics = [
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "At five feet three inches tall, Muggsy Bogues was the shortest player ever to play professional\nbasketball. Throughout his career, he was snickered at, underestimated, and counted out.\nBut Bogues succeeded by turning his height into the very thing that made him nationally known. Some\npeople looked at his size as a curse, but he saw it as a blessing. He found the advantages contained within\nit. In fact, on the court small size has many advantages: speed and quickness, the ability to steal the ball\nfrom unsuspecting (and significantly taller) players, to say nothing of the fact that players just plain\nunderestimated him.\nCould this approach not be useful in your life? What things do you think have been holding you back\nthat, in fact, can be a hidden source of strength?",
    date: "August 16th",
    docId: "8.35",
    quote:
      " “Just as the nature of rational things has given to each person their rational powers, so it also gives us this power—just as nature turns to its own purpose any obstacle or any opposition, sets its place in the destined order, and co-opts it, so every rational person can convert any obstacle into the raw material for their own purpose.”",
    title: "ANYTHING CAN BE AN ADVANTAGE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Think about someone you know who has character of granite. Why are they so dependable,\ntrustworthy, excellent? Why do they have a sterling reputation?\nYou might see a pattern: consistency. They are honest not only when it’s convenient. They are not only\nthere for you when it counts. The qualities that make them admirable come through in every action (“arise\nwith every mental impulse”).\nWhy do we revere people like Theodore Roosevelt, for example? It isn’t because he was brave once,\nor courageous once, or tough once. It’s because those qualities are shot through every one of the stories\nabout him. When he was young and weak, he became a boxer. When he was younger and frail, he went to\na gym in his home, every day, for hours on end. When he was shattered by the loss of his wife and mother\non the same day, he went to The Badlands and herded cattle. And on and on.\nYou become the sum of your actions, and as you do, what flows from that—your impulses—reflect the\nactions you’ve taken. Choose wisely.",
    date: "August 15th",
    docId: "71.32",
    quote:
      " “This can be swiftly taught in very few words: virtue is the only good; there is no certain good without virtue; and virtue resides in our nobler part, which is the rational one. And what can this virtue be? True and steadfast judgment. For from this will arise every mental impulse, and by it every appearance that spurs our impulses will be rendered clear.”",
    title: "THE SUPREME COURT OF YOUR MIND",
  },
  {
    author: "—HERACLITUS, QUOTED IN DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    date: "February 14th",
    docId: "9.1",
    commentary:
      "Why did I do that? you’ve probably asked yourself. We all have. How could I have been so stupid? What was I thinking?\nYou weren’t. That’s the problem. Within that head of yours is all the reason and intelligence you need. It’s making sure that it’s deferred to and utilized that’s the tough part. It’s making sure that your mind is in charge, not your emotions, not your immediate physical sensations. Not your surging hormones.\nFix your attention on your intelligence. Let it do its thing.",
    quote:
      " “For to be wise is only one thing—to fix our attention on our intelligence, which guides all things everywhere.”",
    title: "THINK BEFORE YOU ACT",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "The writer Stefan Zweig—known for his Stoic-esque wisdom—was at one point one of the bestselling\nauthors in the world, only to have his life destroyed by the rise of Hitler. It’s a sad yet timeless\nrhythm of history: politicians are run out of office for taking a stand we later recognize as courageous.\nCountless hardworking and prosperous couples have their money stolen by financial crooks. Someone is\naccused of a crime but not vindicated until years later.\nAt any moment we may be toppled from our perch and made to do with less—less money, less\nrecognition, less access, less resources. Even the “less-es” that come with age: less mobility, less energy,\nless freedom. But we can prepare for that, in some way, by familiarizing ourselves with what that might\nfeel like.\nOne way to protect yourself from the swings of fate—and from the emotional vertigo that can result—\nis by living within your means now. So today, we can try to get used to having and surviving on less so\nthat if we are ever forced to have less, it would not be so bad.",
    date: "September 11th",
    docId: "9.3b",
    quote:
      " “Let us get used to dining out without the crowds, to being a slave to fewer slaves, to getting clothes only for their real purpose, and to living in more modest quarters.”",
    title: "WHAT WOULD LESS LOOK LIKE?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "I’ll be happy when I graduate, we tell ourselves. I’ll be happy when I get this promotion, when this\ndiet pays off, when I have the money that my parents never had. Conditional happiness is what\npsychologists call this kind of thinking. Like the horizon, you can walk for miles and miles and never\nreach it. You won’t even get any closer.\nEagerly anticipating some future event, passionately imagining something you desire, looking forward\nto some happy scenario—as pleasurable as these activities might seem, they ruin your chance at happiness\nhere and now. Locate that yearning for more, better, someday and see it for what it is: the enemy of your\ncontentment. Choose it or your happiness. As Epictetus says, the two are not compatible.",
    date: "February 17th",
    docId: "3.24.17",
    quote:
      " “It is quite impossible to unite happiness with a yearning for what we don’t have. Happiness has all that it wants, and resembling the well-fed, there shouldn’t be hunger or thirst.”",
    title: "THE ENEMY OF HAPPINESS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Here’s a funny exercise: think about all the upsetting things you don’t know about—stuff people might\nhave said about you behind your back, mistakes you might have made that never came to your\nattention, things you dropped or lost without even realizing it. What’s your reaction? You don’t have one\nbecause you don’t know about it.\nIn other words, it is possible to hold no opinion about a negative thing. You just need to cultivate that\npower instead of wielding it accidentally. Especially when having an opinion is likely to make us\naggravated. Practice the ability of having absolutely no thoughts about something—act as if you had no\nidea it ever occurred. Or that you’ve never heard of it before. Let it become irrelevant or nonexistent to\nyou. It’ll be a lot less powerful this way.",
    date: "February 9th",
    docId: "6.52",
    quote:
      " “We have the power to hold no opinion about a thing and to not let it upset our state of mind—for things have no natural power to shape our judgments.”",
    title: "YOU DON’T HAVE TO HAVE AN OPINION",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Stoicism is about looking at things from every angle—and certain situations are easier to understand\nfrom different perspectives. In potentially negative situations, the objective, even superficial gaze\nmight actually be superior. That view might let us see things clearly without diving too much into what\nthey might represent or what might have caused them. In other situations, particularly those that involve\nsomething impressive or praiseworthy, another approach, like that of contemptuous expressions, is\nhelpful. By examining situations from the inside out, we can be less daunted by them, less likely to be\nswayed by them.\nDig into your fear of death or obscurity, and what will you find? Turn some fancy ceremony inside out\nand you’ll find—what?",
    date: "April 27th",
    docId: "8.21",
    quote:
      " “Turn it inside out and see what it is like—what it becomes like when old, sick, or prostituting itself. How short-lived the praiser and praised, the one who remembers and the remembered. Remembered in some corner of these parts, and even there not in the same way by all, or even by one. And the whole earth is but a mere speck.”",
    title: "TURN IT INSIDE OUT",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "In a notoriously loud city like Rome, it was impossible to get much peace and quiet. The noises of\nwagons, the shouting of vendors, the hammering of a blacksmith—all filled the streets with piercing\nviolence (to say nothing of the putrid smells of a city with poor sewage and sanitation). So philosophers\nwent on a lot of walks—to get where they needed to go, to clear their heads, to get fresh air.\nThroughout the ages, philosophers, writers, poets, and thinkers have found that walking offers an\nadditional benefit—time and space for better work. As Nietzsche would later say: “It is only ideas gained\nfrom walking that have any worth.”\nToday, make sure you take a walk. And in the future, when you get stressed or overwhelmed, take a\nwalk. When you have a tough problem to solve or a decision to make, take a walk. When you want to be\ncreative, take a walk. When you need to get some air, take a walk. When you have a phone call to make,\ntake a walk. When you need some exercise, take a long walk. When you have a meeting or a friend over,\ntake a walk together.\nNourish yourself and your mind and solve your problems along the way.",
    date: "June 21st",
    docId: "17.8",
    quote:
      " “We should take wandering outdoor walks, so that the mind might be nourished and refreshed by the open air and deep breathing.”",
    title: "TAKE A WALK",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "To steel himself before he committed suicide rather than submit to Julius Caesar’s destruction of the\nRoman Republic, the great Stoic philosopher Cato read a bit of Plato’s Phaedo. In it, Plato writes,\n“It is the child within us that trembles before death.” Death is scary because it is such an unknown. No\none can come back and tell us what it is like. We are in the dark about it.\nAs childlike and ultimately ignorant as we are about death, there are plenty of wise men and women\nwho can at least provide some guidance. There’s a reason that the world’s oldest people never seem to be\nafraid of death: they’ve had more time to think about it than we have (and they realized how pointless\nworrying was). There are other wonderful resources: Florida Scott-Maxwell’s Stoic diary during her\nterminal illness, The Measure of My Days, is one. Seneca’s famous words to his family and friends, who\nhad broken down and begged with his executioners, is another. “Where,” Seneca gently chided them, “are\nyour maxims of philosophy, or the preparation of so many years’ study against evils to come?” Throughout\nphilosophy there are inspiring, brave words from brave men and women who can help us face this fear.\nThere is another helpful consideration about death from the Stoics. If death is truly the end, then what\nis there exactly to fear? For everything from your fears to your pain receptors to your worries and your\nremaining wishes, they will perish with you. As frightening as death might seem, remember: it contains\nwithin it the end of fear.",
    date: "December 20th",
    docId: "3.26.38–39",
    quote:
      " “Do you then ponder how the supreme of human evils, the surest mark of the base and cowardly, is not death, but the fear of death? I urge you to discipline yourself against such fear, direct all your thinking, exercises, and reading this way—and you will know the only path to human freedom.”",
    title: "FEAR THE FEAR OF DEATH",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The first book of Marcus Aurelius’s Meditations begins with a catalog of gratitude. He thanks, one by\none, the leading influences in his life. One of the people he thanks is Quintus Junius Rusticus, a\nteacher who developed in his student a love of deep clarity and understanding—a desire to not just stop at\nthe surface when it comes to learning.\nIt was also from Rusticus that Marcus was introduced to Epictetus. In fact, Rusticus loaned Marcus his\npersonal copy of Epictetus’s lectures. Marcus clearly wasn’t satisfied with just getting the gist of these\nlectures and didn’t simply accept them on his teacher’s recommendation. Paul Johnson once joked that\nEdmund Wilson read books “as though the author was on trial for his life.” That’s how Marcus read\nEpictetus—and when the lessons passed muster, he absorbed them. They became part of his DNA as a\nhuman being. He quoted them at length over the course of his life, finding real clarity and strength in\nwords, even amid the immense luxury and power he would come to possess.\nThat’s the kind of deep reading and study we need to cultivate as well, which is why we’re reading\njust one page a day instead of a chapter at a time. So we can take the time to read attentively and deeply.",
    date: "January 24th",
    docId: "1.7.3",
    quote:
      " “From Rusticus . . . I learned to read carefully and not be satisfied with a rough understanding of the whole, and not to agree too quickly with those who have a lot to say about something.”",
    title: "PUSH FOR DEEP UNDERSTANDING",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "As the Stoics say repeatedly, it’s dangerous to have faith in what you do not control. But your own\nreasoned choice? Well, for now that is in your control. Therefore it is one of the few things you can\nhave confidence in. It’s the one area of health that can’t suddenly be given a terminal diagnosis (except for\nthe one we all get the day we’re born). It’s the only one that remains pristine and never wears down—it’s\nonly the user who quits it; never will it quit the user.\nIn this passage, Epictetus points out that slaves and workers and philosophers alike can live this way.\nSocrates, Diogenes, and Cleanthes lived this way—even while they had families and while they were\nstruggling students.\nAnd so can you.",
    date: "December 16th",
    docId: "3.26.23b–24",
    quote:
      " “I tell you, you only have to learn to live like the healthy person does . . . living with complete confidence. What confidence? The only one worth holding, in what is trustworthy, unhindered, and can’t be taken away—your own reasoned choice.”",
    title: "EVERLASTING GOOD HEALTH",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It is almost impossible to stare up at the stars and not feel something. As cosmologist Neil deGrasse\nTyson has explained, the cosmos fills us with complicated emotions. On the one hand, we feel an\ninfinitesimal smallness in comparison to the vast universe; on the other, an extreme connectedness to this\nlarger whole.\nObviously, given that we’re in our bodies every day, it’s tempting to think that’s the most important\nthing in the world. But we counteract that bias by looking at nature—at things much bigger than us. A line\nfrom Seneca, which has since become a proverb, expresses Marcus’s insight well: Mundus ipse est\ningens deorum omnium templum (The world itself is a huge temple of all the gods).\nLooking at the beautiful expanse of the sky is an antidote to the nagging pettiness of earthly concerns.\nAnd it is good and sobering to lose yourself in that as often as you can.",
    date: "April 29th",
    docId: "7.47",
    quote:
      " “Watch the stars in their courses and imagine yourself running alongside them. Think constantly on the changes of the elements into each other, for such thoughts wash away the dust of earthly life.”",
    title: "WASHING AWAY THE DUST OF LIFE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Prayer has a religious connotation, but in life we all find ourselves hoping and asking for things. In a\ntough situation, we might silently ask for help; or, after a tough break, for a second chance from\nabove; during a sports game, we might sit on the edge of our seat wishing for some outcome. “C’mon,\nc’mon, c’mon,” we say. “Please . . .” Even if it is to no one in particular, we’re still praying. Yet it’s so\nrevealing in these moments, when we’re privately, powerfully yearning for something, just how nakedly\nselfish our requests usually are.\nWe want divine intervention so that our lives will magically be easier. But what about asking for\nfortitude and strength so you can do what you need to do? What if you sought clarity on what you do\ncontrol, what is already within your power? You might find your prayers have already been answered.",
    date: "September 14th",
    docId: "9.40.(6)",
    quote:
      " “Try praying differently, and see what happens: Instead of asking for ‘a way to sleep with her,’ try asking for ‘a way to stop desiring to sleep with her.’ Instead of ‘a way to get rid of him,’ try asking for ‘a way to not crave his demise.’ Instead of ‘a way to not lose my child,’ try asking for ‘a way to lose my fear of it.’”",
    title: "A DIFFERENT WAY TO PRAY",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "How long have you been alive? Take the years, multiply them by 365, and then by 24. How many\nhours have you lived? What do you have to show for all of them?\nThe answer for many people is: not enough. We had so many hours that we took them for granted. All\nwe have to show for our time on this planet are rounds of golf, years spent at the office, time spent\nwatching mediocre movies, a stack of mindless books we hardly remember reading, and maybe a garage\nfull of toys. We’re like the character in Raymond Chandler’s The Long Goodbye: “Mostly, I just kill\ntime,” he says, “and it dies hard.”\nOne day, our hours will begin to run out. It would be nice to be able to say: “Hey, I really made the\nmost of it.” Not in the form of achievements, not money, not status—you know what the Stoics think of all\nthat—but in wisdom, insight, and real progress in the things that all humans struggle against.\nWhat if you could say that you really made something of this time that you had? What if you could\nprove that you really did live [insert number] years? And not just lived them, but lived them fully?",
    date: "December 21st",
    docId: "3.8b",
    quote:
      " “Many times an old man has no other evidence besides his age to prove he has lived a long time.”",
    title: "WHAT DO YOU HAVE TO SHOW FOR YOUR YEARS?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Socrates famously traveled around Athens, approaching the people he disagreed with most, and\nengaging them in long discussions. In these discussions—or what record we have of them—there are\nmany examples of his conversation mates getting exasperated, upset, or aggravated by his many questions.\nIndeed, the people of Athens eventually got so upset, they sentenced Socrates to death.\nBut Socrates never seemed to get upset himself. Even when talking about matters of life and death, he\nalways kept his cool. He was much more interested in hearing what the other person had to say than\nmaking sure he was heard or—as most of us insist upon—winning the argument.\nThe next time you face a political dispute or a personal disagreement, ask yourself: Is there any\nreason to fight about this? Is arguing going to help solve anything? Would an educated or wise person\nreally be as quarrelsome as you might initially be inclined to be? Or would they take a breath, relax, and\nresist the temptation for conflict? Just think of what you could accomplish—and how much better you\nwould feel—if you could conquer the need to fight and win every tiny little thing.",
    date: "June 24th",
    docId: "4.5.1; 7b–8a",
    quote:
      " “The beautiful and good person neither fights with anyone nor, as much as they are able, permits others to fight . . . this is the meaning of getting an education—learning what is your own affair and what is not. If a person carries themselves so, where is there any room for fighting?”",
    title: "THE TRULY EDUCATED AREN’T QUARRELSOME",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "One of the striking things about Seneca’s letters and essays is how often he quotes the philosopher\nEpicurus. Why is that strange? Because Stoicism and Epicureanism are supposed to be diametrically\nopposed philosophies! (In reality the differences while significant tend to be overblown.)\nBut this is true to form for Seneca. He was looking for wisdom, period. It didn’t matter where it came\nfrom. This is something that a lot of fundamentalists—in religion, philosophy, anything—seem to miss.\nWho cares whether some bit of wisdom is from a Stoic, who cares whether it perfectly jibes with\nStoicism? What matters is whether it makes your life better, whether it makes you better.\nWhat wisdom or help would you be able to find today if you stopped caring about affiliations and\nreputations? How much more could you see if you just focused on merit?",
    date: "August 24th",
    docId: "11.8",
    quote: " “I’ll never be ashamed to quote a bad writer with a good saying.”",
    title: "PILLAGE FROM ALL SOURCES",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "When coins were much more rudimentary, people had to spend a lot of time testing them to confirm\nthe currency they’d just received was genuine. The Greek word dokimazein means “to assay” or\ncheck the quality of a mineral ore. Merchants were often skilled enough that they could test coinage by\nthrowing it against a hard surface and listen to the note it rang. Even today, though, if someone were to\nhand you a hundred-dollar bill, you might rub it between your fingers or hold it up to the light, just to\nconfirm it wasn’t a fake.\nAll this for an imaginary currency, an invention of society. The point of this metaphor is to highlight\nhow much effort we put into making sure money is real, whereas we accept potentially life-changing\nthoughts or assumptions without so much as a question. One ironic assumption along these lines: that\nhaving a lot of money makes you wealthy. Or that because a lot of people believe something, it must be\ntrue.\nReally, we should be testing these notions as vigilantly as a money changer. For, as Epictetus reminds\nus, “the first and greatest task of the philosopher is to test and separate appearances, and to act on nothing\nthat is untested.”",
    date: "April 8th",
    docId: "1.20.8; 11",
    quote:
      " “When it comes to money, where we feel our clear interest, we have an entire art where the tester uses many means to discover the worth . . . just as we give great attention to judging things that might steer us badly. But when it comes to our own ruling principle, we yawn and doze off, accepting any appearance that flashes by without counting the cost.”",
    title: "THE COST OF ACCEPTING COUNTERFEITS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The psychologist Viktor Frankl spent three years imprisoned in various concentration camps, including\nAuschwitz. His family and his wife had been killed, his life’s work destroyed, his freedom taken\nfrom him. He quite literally had nothing left. Yet, as he discovered after much thought, he still retained one\nthing: the ability to determine what this suffering meant. Not even the Nazis could take that from him.\nFurther, Frankl realized that he could actually find positives in his situation. Here was an opportunity\nto continue testing and exploring his psychological theories (and perhaps revise them). He could still be\nof service to others. He even took some solace in the fact that his loved ones were spared the pain and\nmisery that he faced daily in that camp.\nYour hidden power is your ability to use reason and make choices, however limited or small. Think\nabout the areas of your life where you are under duress or weighed down by obligation. What are the\nchoices available to you, day after day? You might be surprised at how many there actually are. Are you\ntaking advantage? Are you finding the positives?",
    date: "September 7th",
    docId: "2.10.1",
    quote:
      " “Consider who you are. Above all, a human being, carrying no greater power than your own reasoned choice, which oversees all other things, and is free from any other master.”",
    title: "OUR HIDDEN POWER",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "was just born this way.” “I never learned anything different.” “My parents set a terrible example.”\n“I\n“Everyone else does it.” What are these? Excuses that people use to justify staying as they are instead of\nstriving to become better.\nOf course it’s possible to curb our arrogance, control our anger, and be a caring person. How do you\nthink others do it? Certainly their parents weren’t perfect; they didn’t come out of the womb incapable of\nego or immune to temptation. They worked on it. They made it a priority. They solved it like they would\nsolve any other problem: by dedicating themselves to finding a solution, making incremental progress\nuntil they did.\nThey became who they are. Just like you can.June 30th\nTHE OBSTACLE IS THE WAY",
    date: "June 29th",
    docId: "8.8",
    quote:
      " “It is possible to curb your arrogance, to overcome pleasure and pain, to rise above your ambition, and to not be angry with stupid and ungrateful people—yes, even to care for them.”",
    title: "NO EXCUSES",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "There is a story about Cato the Elder, whose great-grandson Cato the Younger became a towering\nfigure in Roman life. One day Cato witnessed a fine oration from Carneades, a Skeptic philosopher,\nwho waxed poetically on the importance of justice. Yet the next day Cato found Carneades arguing\npassionately about the problems with justice—that it was merely a device invented by society to create\norder. Cato was aghast at this kind of “philosopher,” who treated such a precious topic like a debate\nwhere one would argue both sides of an issue purely for show. What on earth was the point?\nAnd so he lobbied the Senate to have Carneades sent back to Athens, where he could no longer\ncorrupt the Roman youth with his rhetorical tricks. To a Stoic, the idea of idly discussing some issue—of\nbelieving or arguing two contradictory ideas—is an absurd waste of time, energy, and belief. As Seneca\nsaid, philosophy is not a fun trick. It’s for use—for life.",
    date: "August 14th",
    docId: "16.3",
    quote:
      " “Philosophy isn’t a parlor trick or made for show. It’s not concerned with words, but with facts. It’s not employed for some pleasure before the day is spent, or to relieve the uneasiness of our leisure. It shapes and builds up the soul, it gives order to life, guides action, shows what should and shouldn’t be done—it sits at the rudder steering our course as we vacillate in uncertainties. Without it, no one can live without fear or free from care. Countless things happen every hour that require advice, and such advice is to be sought out in philosophy.”",
    title: "THIS ISN’T FOR FUN. IT’S FOR LIFE",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "After Captain James Stockdale was shot down over Vietnam, he endured seven and a half years in\nvarious prison camps. He was subjected to brutal torture but always struggled to resist. Once, when\nhis captors intended to force him to appear in a propaganda video, he purposely and severely injured\nhimself to make that impossible.\nWhen Stockdale’s plane was hit, he told himself that he was “entering the world of Epictetus.” He\ndidn’t mean that he was attending a philosophy seminar. He knew what he was to face when he crashlanded. He knew it wouldn’t be easy to survive.\nInterviewed by Jim Collins for the business classic Good to Great, Stockdale explained there was one\ngroup that had the most trouble in the prison. “It was the optimists,” he said, “. . . the ones who said,\n‘We’re going to be out by Christmas.’ And Christmas would come, and Christmas would go. Then they’d\nsay, ‘We’re going to be out by Easter.’ And Easter would come, and Easter would go. And then\nThanksgiving, and then it would be Christmas again. And they died of a broken heart.”\nBut Stockdale persevered and did make it out. He quenched his desires and focused exclusively on\nwhat he did control: himself.",
    date: "September 5th",
    docId: "1.3",
    quote:
      " “Remember, then, if you deem what is by nature slavish to be free, and what is not your own to be yours, you will be shackled and miserable, blaming both gods and other people. But if you deem as your own only what is yours, and what belongs to others as truly not yours, then no one will ever be able to coerce or to stop you, you will find no one to blame or accuse, you will do nothing against your will, you will have no enemy, no one will harm you, because no harm can affect you.”",
    title: "FOCUS ON WHAT IS YOURS ALONE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "When General Dwight D. Eisenhower wrote to his wife on the eve of the invasion of Normandy, he\ntold her, “Everything we could think of has been done, the troops are fit everybody is doing his\nbest. The answer is in the lap of the gods.” He’d done everything he could—and now, what would happen\nwould happen and as Epictetus might say, he was ready to bear whatever that was. In fact, Eisenhower\nhad written another letter that night and prepared it for release in case the invasion failed. If failure was\nwhat God—or fate or luck or whatever you want to call it—willed, he was ready.\nThere is a wonderful lesson there. The man in charge of perhaps the most powerful army the world\nhad ever assembled, on the eve of the most expertly organized and planned invasion the world will\nhopefully ever know, was humble enough to know that the outcome ultimately belonged to someone or\nsomething bigger than him.\nAnd so it goes with all our ventures. No matter how much preparation, no matter how skilled or smart\nwe are, the ultimate outcome is in the lap of the gods. The sooner we know that, the better we will be.",
    date: "November 2nd",
    docId: "4.1.89",
    quote:
      " “But I haven’t at any time been hindered in my will, nor forced against it. And how is this possible? I have bound up my choice to act with the will of God. God wills that I be sick, such is my will. He wills that I should choose something, so do I. He wills that I reach for something, or something be given to me—I wish for the same. What God doesn’t will, I do not wish for.”",
    title: "BINDING OUR WISHES TO WHAT WILL BE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "We could look at the upcoming day and despair at all the things we don’t control: other people, our\nhealth, the temperature, the outcome of a project once it leaves our hands.\nOr we could look out at that very same day and rejoice at the one thing we do control: the ability to\ndecide what any event means.\nThis second option offers the ultimate power—a true and fair form of control. If you had control over\nother people, wouldn’t other people have control over you? Instead, what you’ve been granted is the\nfairest and most usable of trump cards. While you don’t control external events, you retain the ability to\ndecide how you respond to those events. You control what every external event means to you personally.\nThis includes the difficult one in front of you right now. You’ll find, if you approach it right, that this\ntrump card is plenty.",
    date: "September 28th",
    docId: "1.1.7–8",
    quote:
      " “How appropriate that the gods put under our control only the most powerful ability that governs all the rest—the ability to make the right use of external appearances—and that they didn’t put anything else under our control. Was this simply because they weren’t willing to give us more? I think if it had been possible they would have given us more, but it was impossible.",
    title: "YOU HOLD THE TRUMP CARD",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "When a dog is barking loudly because someone is at the door, the worst thing you can do is yell. To\nthe dog, it’s like you’re barking too! When a dog is running away, it’s not helpful to chase it—\nagain, now it’s like you’re both running. A better option in both scenarios is to give the dog something\nelse to do. Tell it to sit. Tell it to go to its bed or kennel. Run in the other direction. Break the pattern,\ninterrupt the negative impulse.\nThe same goes for us. When a bad habit reveals itself, counteract it with a commitment to a contrary\nvirtue. For instance, let’s say you find yourself procrastinating today—don’t dig in and fight it. Get up and\ntake a walk to clear your head and reset instead. If you find yourself saying something negative or nasty,\ndon’t kick yourself. Add something positive and nice to qualify the remark.\nOppose established habits, and use the counterforce of training to get traction and make progress. If\nyou find yourself cutting corners during a workout or on a project, say to yourself: “OK, now I am going\nto go even further or do even better.”\nGood habits have the power to drive out bad habits. And habits are easy to pick up—as we all know.",
    date: "October 19th",
    docId: "3.12.6",
    quote:
      " “Since habit is such a powerful influence, and we’re used to pursuing our impulses to gain and avoid outside our own choice, we should set a contrary habit against that, and where appearances are really slippery, use the counterforce of our training.”",
    title: "GOOD HABITS DRIVE OUT BAD HABITS",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "In an overly quantified world of policies and processes, some are swinging back in the other direction.\nBold leaders will “trust their gut.” A spiritual guru will say that it’s important to “let your body guide\nyou.” A friend trying to help us with a difficult decision might ask, “What feels right here?”\nThese approaches to decision making contradict voluminous case studies in which people’s instincts\nhave led them right into trouble. Our senses are wrong all the time! As animals subjected to the slow\nforce of evolution, we have developed all sorts of heuristics, biases, and emotional responses that might\nhave worked well on the savannah but are totally counterproductive in today’s world.\nPart of Stoicism is cultivating the awareness that allows you to step back and analyze your own\nsenses, question their accuracy, and proceed only with the positive and constructive ones. Sure, it’s\ntempting to throw discipline and order to the wind and go with what feels right—but if our many youthful\nregrets are any indication, what feels right right now doesn’t always stand up well over time. Hold your\nsenses suspect. Again, trust, but always verify.",
    date: "April 9th",
    docId: "1.5",
    quote:
      " “From the very beginning, make it your practice to say to every harsh impression, ‘you are an impression and not at all what you appear to be.’ Next, examine and test it by the rules you possess, the first and greatest of which is this—whether it belongs to the things in our control or not in our control, and if the latter, be prepared to respond, ‘It is nothing to me.’”",
    title: "TEST YOUR IMPRESSIONS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The next time you do something wrong, try to remember how it made you feel. Rarely does one say, “I\nfelt great!”\nThere is a reason there’s often vomit at crime scenes. Instead of the catharsis the person thought they’d\nfeel when they let themselves get out of control or when they got their revenge, they ended up making\nthemselves sick. We feel a version of this when we lie, when we cheat, when we screw someone over.\nSo in that split second before your ill-gotten gains kick in, ask: How do I feel about myself? Is that\nmoment when fear rises in your throat because you suspect you may get caught really worth it?\nSelf-awareness and wrongdoing rarely go together. If you need a selfish reason to not do wrong—put\nyourself in touch with these feelings. They’re a powerful disincentive.",
    date: "October 7th",
    docId: "9.4",
    quote:
      " “The person who does wrong, does wrong to themselves. The unjust person is unjust to themselves—making themselves evil.”",
    title: "A SELFISH REASON TO BE GOOD",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Do you remember, in school or early in your life, being afraid to try something because you feared you\nmight fail at it? Most teenagers choose to fool around rather than exert themselves. Halfhearted, lazy\neffort gives them a ready-made excuse: “It doesn’t matter. I wasn’t even trying.”\nAs we get older, failure is not so inconsequential anymore. What’s at stake is not some arbitrary grade\nor intramural sports trophy, but the quality of your life and your ability to deal with the world around you.\nDon’t let that intimidate you, though. You have the best teachers in the world: the wisest philosophers\nwho ever lived. And not only are you capable, the professor is asking for something very simple: just\nbegin the work. The rest follows.",
    date: "January 17th",
    docId: "2.19.29–34",
    quote:
      " “I am your teacher and you are learning in my school. My aim is to bring you to completion, unhindered, free from compulsive behavior, unrestrained, without shame, free, flourishing, and happy, looking to God in things great and small—your aim is to learn and diligently practice all these things. Why then don’t you complete the work, if you have the right aim and I have both the right aim and right preparation? What is missing? . . . The work is quite feasible, and is the only thing in our power. . . . Let go of the past. We must only begin. Believe me and you will see.”",
    title: "REBOOT THE REAL WORK",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Have you had a bad couple of weeks? Have you been drifting away from the principles and beliefs\nthat you hold dear? It’s perfectly fine. It happens to all of us.\nIn fact, it probably happened to Marcus—that may be why he scribbled this note to himself. Perhaps\nhe’d been dealing with difficult senators or having difficulties with his troubled son. Perhaps in these\nscenarios he’d lost his temper, became depressed, or stopped checking in with himself. Who wouldn’t?\nBut the reminder here is that no matter what happens, no matter how disappointing our behavior has\nbeen in the past, the principles themselves remain unchanged. We can return and embrace them at any\nmoment. What happened yesterday—what happened five minutes ago—is the past. We can reignite and\nrestart whenever we like.\nWhy not do it right now?",
    date: "January 20th",
    docId: "7.2",
    quote:
      " “Your principles can’t be extinguished unless you snuff out the thoughts that feed them, for it’s continually in your power to reignite new ones. . . . It’s possible to start living again! See things anew as you once did—that is how to restart life!”",
    title: "REIGNITE YOUR THOUGHTS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "History abounds with evidence that humanity is capable of doing evil, not only actively but passively.\nIn some of our most shameful moments—from slavery to the Holocaust to segregation to the murder\nof Kitty Genovese—guilt wasn’t limited to perpetrators but to ordinary citizens who, for a multitude of\nreasons, declined to get involved. It’s that old line: all evil needs to prevail is for good men to do nothing.\nIt’s not enough to just not do evil. You must also be a force for good in the world, as best you can.",
    date: "July 26th",
    docId: "9.5",
    quote:
      " “Often injustice lies in what you aren’t doing, not only in what you are doing.”",
    title: "WHEN GOOD MEN DO NOTHING",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Of Seneca’s many letters, this is probably one of the most important—and one of the least understood.\nHe’s making a point that goes unheard in a society of ever-bigger houses and ever more possessions:\nthat there’s a hidden cost to all that accumulating. And the sooner we’re aware of it, the better.\nRemember: even what we get for free has a cost, if only in what we pay to store it—in our garages\nand in our minds. As you walk past your possessions today, ask yourself: Do I need this? Is it\nsuperfluous? What’s this actually worth? What is it costing me?\nYou might be surprised by the answers and how much we’ve been paying without even knowing it.",
    date: "March 5th",
    docId: "42.6",
    quote:
      " “So, concerning the things we pursue, and for which we vigorously exert ourselves, we owe this consideration—either there is nothing useful in them, or most aren’t useful. Some of them are superfluous, while others aren’t worth that much. But we don’t discern this and see them as free, when they cost us dearly.”",
    title: "CUTTING BACK ON THE COSTLY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "It’s been said that the definition of insanity is trying the same thing over and over again but expecting a\ndifferent result. Yet that’s exactly what most people do. They tell themselves: Today, I won’t get angry.\nToday, I won’t gorge myself. But they don’t actually do anything differently. They try the same routine and\nhope it will work this time. Hope is not a strategy!\nFailure is a part of life we have little choice over. Learning from failure, on the other hand, is\noptional. We have to choose to learn. We must consciously opt to do things differently—to tweak and\nchange until we actually get the result we’re after. But that’s hard.\nSticking with the same unsuccessful pattern is easy. It doesn’t take any thought or any additional effort,\nwhich is probably why most people do it.",
    date: "June 22nd",
    docId: "2.18.31",
    quote:
      " “If you are defeated once and tell yourself you will overcome, but carry on as before, know in the end you’ll be so ill and weakened that eventually you won’t even notice your mistake and will begin to rationalize your behavior.”",
    title: "THE DEFINITION OF INSANITY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Have you ever heard some ask: “What would you do if you found out tomorrow that you had cancer?”\nThe question is designed to make you consider how different life might be if you were suddenly\ngiven just a few months or weeks to live. There’s nothing like a terminal illness to wake people up.\nBut here’s the thing: you already have a terminal diagnosis. We all do! As the writer Edmund Wilson\nput it, “Death is one prophecy that never fails.” Every person is born with a death sentence. Each second\nthat passes by is one you’ll never get back.\nOnce you realize this, it will have a profound impact on what you do, say, and think. Don’t let another\nday tick away in ignorance of the reality that you’re a dying person. We all are. Can today be the day we\nstop pretending otherwise?",
    date: "December 2nd",
    docId: "2.11.1",
    quote:
      " “Let each thing you would do, say or intend be like that of a dying person.”",
    title: "DON’T MIND ME, I’M ONLY DYING SLOW",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "If you notice, Marcus repeatedly reminds himself what Stoicism is. These bullet points are helpful to\nthose of us reading thousands of years later, but really they were intended to be helpful to him. Maybe\nthat day he had accepted a bad impression or had acted selfishly. Maybe he had pinned his hopes on\nsomething outside his control or complained and fought against something that had happened. Or maybe it\nhad just been awhile since he’d thought about these things and wanted a reminder.\nWhatever his case was, or whatever ours is today, let’s align our minds along these four critical\nhabits:\n1. Accept only what is true.\n2. Work for the common good.\n3. Match our needs and wants with what is in our control.\n4. Embrace what nature has in store for us.",
    date: "November 18th",
    docId: "8.7",
    quote:
      " “Our rational nature moves freely forward in its impressions when it: 1) accepts nothing false or uncertain; 2) directs its impulses only to acts for the common good; 3) limits its desires and aversions only to what’s in its own power; 4) embraces everything nature assigns it.”",
    title: "FOUR HABITS OF THE STOIC MIND",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "You will only get one shot at today. You have only twenty-four hours with which to take it. And then it\nis gone and lost forever. Will you fully inhabit all of today? Will you call out, “I’ve got this,” and do\nyour very best to be your very best?\nWhat will you manage to make of today before it slips from your fingers and becomes the past? When\nsomeone asks you what you did yesterday, do you really want the answer to be “nothing”?",
    date: "May 9th",
    docId: "108.27b–28a",
    quote:
      " “Let us therefore set out whole-heartedly, leaving aside our many distractions and exert ourselves in this single purpose, before we realize too late the swift and unstoppable flight of time and are left behind. As each day arises, welcome it as the very best day of all, and make it your own possession. We must seize what flees.”",
    title: "CARPE DIEM",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Why do athletes talk trash to each other? Why do they deliberately say offensive and nasty things to\ntheir competitors when the refs aren’t looking? To provoke a reaction. Distracting and angering\nopponents is an easy way to knock them off their game.\nTry to remember that when you find yourself getting mad. Anger is not impressive or tough—it’s a\nmistake. It’s weakness. Depending on what you’re doing, it might even be a trap that someone laid for\nyou.\nFans and opponents called boxer Joe Louis the “Ring Robot” because he was utterly unemotional—his\ncold, calm demeanor was far more terrifying than any crazed look or emotional outburst would have been.\nStrength is the ability to maintain a hold of oneself. It’s being the person who never gets mad, who\ncannot be rattled, because they are in control of their passions—rather than controlled by their passions.",
    date: "February 1st",
    docId: "11.18.5b",
    quote:
      " “Keep this thought handy when you feel a fit of rage coming on—it isn’t manly to be enraged. Rather, gentleness and civility are more human, and therefore manlier. A real man doesn’t give way to anger and discontent, and such a person has strength, courage, and endurance—unlike the angry and complaining. The nearer a man comes to a calm mind, the closer he is to strength.”",
    title: "FOR THE HOT-HEADED MAN",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It’s pretty obvious that one should keep away from the wicked and two-faced as much as possible—the\njealous friend, the narcissistic parent, the untrustworthy partner. At first glance, Marcus Aurelius is\nreminding us to avoid false friends.\nBut what if we turn it around? What if, instead, we ask about the times that we have been false to our\nfriends? Ultimately that’s what Stoicism is about—not judging other people’s behavior, but judging our\nown.\nWe’ve all been a frenemy at one point or another. We’ve been nice to their face—usually because\nthere was something in it for us—but later, in different company, we said how we really felt. Or we’ve\nstrung someone along, cared only when things were going well, or declined to help even though someone\nreally needed us.\nThis behavior is beneath us—and worth remembering the next time we accuse someone else of being a\nbad friend.",
    date: "October 18th",
    docId: "11.15",
    quote:
      " “There’s nothing worse than a wolf befriending sheep. Avoid false friendship at all costs. If you are good, straightforward, and well meaning it should show in your eyes and not escape notice.”",
    title: "FRENEMIES",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Before the advent of modern warfare, armies typically disbanded during the winter. War was not the\ntotal war as we understand it today, but more like a series of raids punctuated by the rare decisive\nbattle.\nWhen Epictetus says we ought to go through “hard winter training”—the Greek word is cheimaskêsai\n—he was disputing the notion that there is such a thing as part-time soldiering (or part-time anything for\nthat matter). In order to achieve victory, one must dedicate every second and every resource into\npreparation and training. LeBron James doesn’t take a summer break—he uses it to work on other aspects\nof his game. The U.S. military trains its soldiers day and night when not at war, in preparation for when\nthey have to go to war; when they do go to war, they fight until it’s over.\nThe same is true for us. We can’t do this life thing halfheartedly. There’s no time off. There aren’t even\nweekends. We are always preparing for what life might throw at us—and when it does, we’re ready and\ndon’t stop until we’ve handled it.",
    date: "September 3rd",
    docId: "1.2.32",
    quote:
      " “We must undergo a hard winter training and not rush into things for which we haven’t prepared.”",
    title: "FIRST, A HARD WINTER TRAINING",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "They say age is just a number, but to some people it’s a very important one—otherwise, women\nwouldn’t lie about being younger, and ambitious young men wouldn’t lie about being older. Rich\npeople and health nuts spend billions of dollars in an effort to move the expiration date from around\nseventy-eight years to hopefully forever.\nThe number of years we manage to eke out doesn’t matter, only what those years are composed of.\nSeneca put it best when he said, “Life is long if you know how to use it.” Sadly, most people don’t—they\nwaste the life they’ve been given. Only when it is too late do they try to compensate for that waste by\nvainly hoping to put more time on the clock.\nUse today. Use every day. Make yourself satisfied with what you have been given.",
    date: "December 13th",
    docId: "6.49",
    quote:
      " “You aren’t bothered, are you, because you weigh a certain amount and not twice as much? So why get worked up that you’ve been given a certain lifespan and not more? Just as you are satisfied with your normal weight, so you should be with the time you’ve been given.”",
    title: "IT’S JUST A NUMBER",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Plutarch, a Roman biographer as well as an admirer of the Stoics, didn’t begin his study of the greats\nof Roman literature until late in life. But, as he recounts in his biography of Demosthenes, he was\nsurprised at how quickly it all came to him. He wrote, “It wasn’t so much that the words brought me into a\nfull understanding of events, as that, somehow, I had a personal experience of the events that allowed me\nto follow closely the meaning of the words.”\nThis is what Epictetus means about the study of philosophy. Study, yes, but go live your life as well.\nIt’s the only way that you’ll actually understand what any of it means. And more important, it’s only from\nyour actions and choices over time that it will be possible to see whether you took any of the teachings to\nheart.\nBe aware of that today when you’re going to work, going on a date, deciding whom to vote for, calling\nyour parents in the evening, waving to your neighbor as you walk to your door, tipping the delivery man,\nsaying goodnight to someone you love. All of that is philosophy. All of it is experience that brings\nmeaning to the words.",
    date: "March 24th",
    docId: "3.21.5–6",
    quote:
      " “Eat like a human being, drink like a human being, dress up, marry, have children, get politically active—suffer abuse, bear with a headstrong brother, father, son, neighbor, or companion. Show us these things so we can see that you truly have learned from the philosophers.”",
    title: "THERE IS PHILOSOPHY IN EVERYTHING",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Socrates, perhaps the wisest person to ever live, used to say that “nobody does wrong willingly.”\nMeaning that no one is wrong on purpose either. Nobody thinks they’re wrong, even when they are.\nThey think they’re right, they’re just mistaken. Otherwise, they wouldn’t think it anymore!\nCould it be that the slights you’ve experienced or the harm that others have done to you was not\ninflicted intentionally? What if they simply thought they were doing the right thing—for them, even for\nyou? It’s like the memorial for Confederate soldiers at Arlington (obviously a cause that was wrongly\nfought for by people doing wrong), which states, in part, that the Confederate soldiers served “in simple\nobedience to duty, as they understood it.” Again—they understood wrongly, but it was their genuine\nunderstanding, just as Lincoln was genuine when he ended his famous Cooper Union speech by saying,\n“Let us, to the end, dare to do our duty as we understand it.”\nHow much more tolerant and understanding would you be today if you could see the actions of other\npeople as attempts to do the right thing? Whether you agree or not, how radically would this lens change\nyour perspective on otherwise offensive or belligerent actions?",
    date: "March 12th",
    docId: "7.26",
    quote:
      " “Whenever someone has done wrong by you, immediately consider what notion of good or evil they had in doing it. For when you see that, you’ll feel compassion, instead of astonishment or rage. For you may yourself have the same notions of good and evil, or similar ones, in which case you’ll make an allowance for what they’ve done. But if you no longer hold the same notions, you’ll be more readily gracious for their error.”",
    title: "SEEING THINGS AS THE PERSON AT FAULT DOES",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Anne Lamott once observed that all writers “are little rivers running into one lake,” all contributing to\nthe same big project. The same is true in many industries—though sadly, even inside the same\ncompany, people selfishly forget they’re working together. As human beings we all breathe the atoms that\nmade up our ancestors and flow into the same earth when we die.\nOver and over again, the Stoics reminded themselves of the interconnectedness of life. Perhaps that\nwas because life in Greece and Rome was particularly harsh. Animals and people were slaughtered\nsenselessly to amuse the masses in the Colosseum (events lamented in the Stoic writings). Countries were\nconquered and its citizens sold into slavery to expand the empire (the futility of which the Stoics also\nlamented). This kind of cruelty is possible only when we forget how we’re related to our fellow human\nbeings and the environment.\nToday, take a moment to remember that we are woven together and that each of us plays a role (good,\nbad, or ugly) in this world.",
    date: "October 3rd",
    docId: "6.38",
    quote:
      " “Meditate often on the interconnectedness and mutual interdependence of all things in the universe. For in a sense, all things are mutually woven together and therefore have an affinity for each other—for one thing follows after another according to their tension of movement, their sympathetic stirrings, and the unity of all substance.”",
    title: "A MANTRA OF MUTUAL INTERDEPENDENCE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Cato the Younger, a Roman politician best known for his self-discipline and for his heroic defense of\nthe Republic against Julius Caesar, appears constantly throughout Stoic literature—which is\ninteresting because he didn’t write anything down. He taught no classes. He gave no interviews. His bold\nand brave example is what made him such a commonly cited and quoted philosopher.\nSeneca tells us that we should each have our own Cato—a great and noble person we can allow into\nour minds and use to guide our actions, even when they’re not physically present. The economist Adam\nSmith had a similar concept, which he called the indifferent spectator. It doesn’t have to be an actual\nperson, just someone who, like Seneca said, can stand witness to our behavior. Someone who can quietly\nadmonish us if we are considering doing something lazy, dishonest, or selfish.\nAnd if we do it right, and live our lives in such a way, perhaps we can serve as someone else’s Cato\nor indifferent spectator when they need it.",
    date: "March 10th",
    docId: "11.9",
    quote:
      " “We can remove most sins if we have a witness standing by as we are about to go wrong. The soul should have someone it can respect, by whose example it can make its inner sanctum more inviolable. Happy is the person who can improve others, not only when present, but even when in their thoughts!”",
    title: "FIND YOURSELF A CATO",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "worker is asked: “Why did you do it this way?” The answer, “Because that’s the way we’ve always\nA\ndone things.” The answer frustrates every good boss and sets the mouth of every entrepreneur watering.\nThe worker has stopped thinking and is mindlessly operating out of habit. The business is ripe for\ndisruption by a competitor, and the worker will probably get fired by any thinking boss.\nWe should apply the same ruthlessness to our own habits. In fact, we are studying philosophy\nprecisely to break ourselves of rote behavior. Find what you do out of rote memory or routine. Ask\nyourself: Is this really the best way to do it? Know why you do what you do—do it for the right reasons.January 17th\nREBOOT THE REAL WORK",
    date: "January 16th",
    docId: "6.25.5–11",
    quote:
      " “So in the majority of other things, we address circumstances not in accordance with the right assumptions, but mostly by following wretched habit. Since all that I’ve said is the case, the person in training must seek to rise above, so as to stop seeking out pleasure and steering away from pain; to stop clinging to living and abhorring death; and in the case of property and money, to stop valuing receiving over giving.”",
    title: "NEVER DO ANYTHING OUT OF HABIT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Imagine you’ve dreamed of a life in politics. You’re young, you’re vigorous, and you’ve held\nincreasingly powerful positions over the course of your career. Then at thirty-nine, you start to feel run\ndown. Your doctors tell you that you have polio and your life will never be the same. Your career is over\n—right?\nThis is the story of Franklin Delano Roosevelt, now widely regarded as one of America’s greatest\npolitical leaders. He was, at middle age, diagnosed with polio after spending years preparing for and\ndreaming about the presidency.\nIt’s impossible to understand FDR without understanding this disability. The “external thing” was that\nhe was crippled—this was a literal fact—but his judgment of it was that it did not cripple his career or\nhis personhood. Though he was certainly the victim of a then incurable disease, he wiped away—almost\nimmediately—the victim’s mentality.\nLet’s not confuse acceptance with passivity.",
    date: "November 11th",
    docId: "8.47",
    quote:
      " “When you are distressed by an external thing, it’s not the thing itself that troubles you, but only your judgment of it. And you can wipe this out at a moment’s notice.”",
    title: "IT’S NOT THE THING, IT’S WHAT WE MAKE OF IT",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Diogenes the Cynic was a controversial philosopher who wandered the streets like a homeless\nperson. A few thousand years later, his utterances still make us think. But if most of us had seen him\nat the time, we’d have thought: Who is that crazy guy?\nIt’s tempting to take philosophy to extremes, but who does that serve? In fact, rejection of the basics of\nsociety alienates other people, even threatens them. More important, outward transformation—in our\nclothes, in our cars, in our grooming—might feel important but is superficial compared with the inward\nchange. That’s the change that only we know about.",
    date: "August 20th",
    docId: "5.2",
    quote:
      " “Inwardly, we ought to be different in every respect, but our outward dress should blend in with the crowd.”",
    title: "WHERE IT COUNTS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Hope is generally regarded as good. Fear is generally regarded as bad. To a Stoic like Hecato (known\nas Hecato of Rhodes), they are the same—both are projections into the future about things we do not\ncontrol. Both are the enemy of this present moment that you are actually in. Both mean you’re living a life\nin opposition to amor fati.\nIt’s not about overcoming our fears but understanding that both hope and fear contain a dangerous\namount of want and worry in them. And, sadly, the want is what causes the worry.",
    date: "November 16th",
    docId: "5.7b–8",
    quote:
      " “Hecato says, ‘cease to hope and you will cease to fear.’ . . . The primary cause of both these ills is that instead of adapting ourselves to present circumstances we send out thoughts too far ahead.”",
    title: "HOPE AND FEAR ARE THE SAME",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Seneca has said, “Without a ruler to do it against, you can’t make crooked straight.” That is the role of\nwise people in our lives—to serve as model and inspiration. To bounce our ideas off and test our\npresumptions.\nWho that person will be for you is up to you. Perhaps it’s your father or your mother. Maybe it’s a\nphilosopher or a writer or a thinker. Perhaps WWJD (What would Jesus do?) is the right model for you.\nBut pick someone, watch what they do (and what they don’t do), and do your best to do the same.",
    date: "January 28th",
    docId: "4.38",
    quote:
      " “Take a good hard look at people’s ruling principle, especially of the wise, what they run away from and what they seek out.”",
    title: "WATCHING THE WISE",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "As Hamlet says,\n“There are more things in heaven and earth, Horatio,\nThan are dreamt of in your philosophy.”\nThere is no time to chop logic over whether our theories are correct. We’re dealing with the real\nworld here. What matters is how you’re going to deal with this situation right in front of you and whether\nyou’re going to be able to move past it and onto the next one. That’s not saying that anything goes—but we\ncan’t forget that although theories are clean and simple, situations rarely are.August 12th\nMAKE THE WORDS YOUR OWN",
    date: "August 11th",
    docId: "5.17.31–32",
    quote:
      " “When the problem arose for us whether habit or theory was better for getting virtue—if by theory is meant what teaches us correct conduct, and by habit we mean being accustomed to act according to this theory—Musonius thought habit to be more effective.”",
    title: "NO TIME FOR THEORIES, JUST RESULTS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Traditions are often time-tested best practices for doing something. But remember that today’s\nconservative ideas were once controversial, cutting-edge, and innovative. This is why we can’t be\nafraid to experiment with new ideas.\nIn Seneca’s case, he might be embracing some new philosophical insight that improves on the writing\nof Zeno or Cleanthes. In our case, perhaps a breakthrough in psychology improves on the writing of\nSeneca or Marcus Aurelius. Or perhaps we have a breakthrough of our own. If these ideas are true and\nbetter, embrace them—use them. You don’t need to be a prisoner of dead old men who stopped learning\ntwo thousand years ago.",
    date: "August 25th",
    docId: "33.11",
    quote:
      " “Won’t you be walking in your predecessors’ footsteps? I surely will use the older path, but if I find a shorter and smoother way, I’ll blaze a trail there. The ones who pioneered these paths aren’t our masters, but our guides. Truth stands open to everyone, it hasn’t been monopolized.”",
    title: "RESPECT THE PAST, BUT BE OPEN TO THE FUTURE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "The opposing team comes out strong, establishes an early lead, and you never had time to recover. You\nwalk into a business meeting, are caught off guard, and the whole thing goes poorly. A delicate\nconversation escalates into a shouting match. You switched majors halfway through college and had to\nstart your coursework over and graduate late. Sound familiar?\nIt’s the chaos that ensues from not having a plan. Not because plans are perfect, but because people\nwithout plans—like a line of infantrymen without a strong leader—are much more likely to get\noverwhelmed and fall apart. The Super Bowl–winning coach Bill Walsh used to avoid this risk by\nscripting the beginning of his games. “If you want to sleep at night before the game,” he said in a lecture\non game planning, “have your first 25 plays established in your own mind the night before that. You can\nwalk into the stadium and you can start the game without that stress factor.” You’ll also be able to ignore a\ncouple of early points or a surprise from your opponent. It’s irrelevant to you—you already have your\nmarching orders.\nDon’t try to make it up on the fly. Have a plan.",
    date: "March 28th",
    docId: "95.46",
    quote:
      " “Life without a design is erratic. As soon as one is in place, principles become necessary. I think you’ll concede that nothing is more shameful than uncertain and wavering conduct, and beating a cowardly retreat. This will happen in all our affairs unless we remove the faults that seize and detain our spirits, preventing them from pushing forward and making an all-out effort.”",
    title: "COWARDICE AS A DESIGN PROBLEM",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "From what we understand, Marcus wrote many of his meditations later in life, when he was suffering\nfrom serious illnesses. So when he says, “Soon you will die,” he was speaking frankly to himself\nabout his own mortality. How scary that must have been. He was staring at the real possibility of death\nand not liking what he saw in these last minutes.\nSure, he’d accomplished many things in his life, but his emotions were still the cause of discomfort,\npain, and frustration. He knew that with his limited time left, better choices would provide relief.\nHopefully, you have a lot more time left—but that makes it even more important to make headway\nwhile you still can. We are unfinished products up until the end, as Marcus knew very well. But the\nearlier we learn it, the more we can enjoy the fruits of the labor on our character—and the sooner we can\nbe free (or freer) of insincerity, anxiety, ungraciousness, and un-Stoic-ness.",
    date: "December 14th",
    docId: "4.37",
    quote:
      " “Soon you will die, and still you aren’t sincere, undisturbed, or free from suspicion that external things can harm you, nor are you gracious to all, knowing that wisdom and acting justly are one and the same.”",
    title: "WHAT WE SHOULD KNOW BY THE END",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Imagine the power you’d have in your life and relationships if all the things that trouble everyone else—\nhow thin they are, how much money they have, how long they have left to live, how they will die—\ndidn’t matter so much. What if, where others were upset, envious, excited, possessive, or greedy, you\nwere objective, calm, and clearheaded? Can you envision that? Imagine what it would do for your\nrelationships at work, or for your love life, or your friendships.\nSeneca was an incredibly wealthy, even famous, man—yet he was a Stoic. He had many material\nthings, yet, as the Stoics say, he was also indifferent to them. He enjoyed them while they were there, but\nhe accepted that they might someday disappear. What a better attitude than desperately craving more or\nfearfully dreading losing even one penny. Indifference is solid middle ground.\nIt’s not about avoidance or shunning, but rather not giving any possible outcome more power or\npreference than is appropriate. This not easy to do, certainly, but if you could manage, how much more\nrelaxed would you be?",
    date: "February 27th",
    docId: "2.19.12b–13",
    quote:
      " “Of all the things that are, some are good, others bad, and yet others indifferent. The good are virtues and all that share in them; the bad are the vices and all that indulge them; the indifferent lie in between virtue and vice and include wealth, health, life, death, pleasure, and pain.”",
    title: "CULTIVATING INDIFFERENCE WHERE OTHERS GROW PASSION",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "You can be certain as clockwork that at some point today you’re going to interact with someone who\nseems like a jerk (as we all have been). The question is: Are you going to be ready for it?\nThis exercise calls to mind a joke from the eighteenth-century writer and witticist Nicolas Chamfort,\nwho remarked that if you “swallow a toad every morning,” you’ll be fortified against anything else\ndisgusting that might happen the rest of the day. Might it not be better to understand up front—right when\nyou wake up—that other people often behave in selfish or ignorant ways (the toad) than it is to nibble it\nthroughout the day?\nBut there is a second part to this, just as there is a second half of Marcus’s quote: “No one can\nimplicate me in ugliness—nor can I be angry at my relative or hate him.” The point of this preparation is\nnot to write off everyone in advance. It’s that, maybe, because you’ve prepared for it, you’ll be able to act\nwith patience, forgiveness, and understanding.",
    date: "April 6th",
    docId: "2.1",
    quote:
      " “When you first rise in the morning tell yourself: I will encounter busybodies, ingrates, egomaniacs, liars, the jealous and cranks. They are all stricken with these afflictions because they don’t know the difference between good and evil. Because I have understood the beauty of good and the ugliness of evil, I know that these wrong-doers are still akin to me . . . and that none can do me harm, or implicate me in ugliness—nor can I be angry at my relatives or hate them. For we are made for cooperation.”",
    title: "PREPARE YOURSELF FOR NEGATIVITY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Here’s a common scenario. You’re working with a frustrating coworker or a difficult boss. They ask\nyou to do something and, because you dislike the messenger, you immediately object. There’s this\nproblem or that one, or their request is obnoxious and rude. So you tell them, “No, I’m not going to do it.”\nThen they retaliate by not doing something that you had previously asked of them. And so the conflict\nescalates.\nMeanwhile, if you could step back and see it objectively, you’d probably see that not everything\nthey’re asking for is unreasonable. In fact, some of it is pretty easy to do or is, at least, agreeable. And if\nyou did it, it might make the rest of the tasks a bit more tolerable too. Pretty soon, you’ve done the entire\nthing.\nLife (and our job) is difficult enough. Let’s not make it harder by getting emotional about insignificant\nmatters or digging in for battles we don’t actually care about. Let’s not let emotion get in the way of\nkathêkon, the simple, appropriate actions on the path to virtue.",
    date: "February 16th",
    docId: "6.26",
    quote:
      " “If someone asks you how to write your name, would you bark out each letter? And if they get angry, would you then return the anger? Wouldn’t you rather gently spell out each letter for them? So then, remember in life that your duties are the sum of individual acts. Pay attention to each of these as you do your duty . . . just methodically complete your task.”",
    title: "DON’T MAKE THINGS HARDER THAN THEY NEED TO BE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In the hiring process, most employers look at where someone went to school, what jobs they’ve held in\nthe past. This is because past success can be an indicator of future successes. But is it always? There\nare plenty of people who were successful because of luck. Maybe they got into Oxford or Harvard\nbecause of their parents. And what about a young person who hasn’t had time to build a track record? Are\nthey worthless?\nOf course not. This is why character is a far better measure of a man or woman. Not just for jobs, but\nfor friendships, relationships, for everything. Heraclitus put it as a maxim: “Character is fate.”\nWhen you seek to advance your own position in life, character is the best lever—perhaps not in the\nshort term, but certainly over the long term. And the same goes for the people you invite into your life.",
    date: "October 29th",
    docId: "47.15b",
    quote:
      " “Each person acquires their own character, but their official roles are designated by chance. You should invite some to your table because they are deserving, others because they may come to deserve it.”",
    title: "CHARACTER IS FATE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "To what are you committed? What cause, what mission, what purpose? What are you doing? And more\nimportant, why are you doing it? How does what you do every day reflect, in some way, the values\nyou claim to care about? Are you acting in a way that’s consistent with something you value, or are you\nwandering, unmoored to anything other than your own ambition?\nWhen you examine these questions, you might be uncomfortable with the answers. That’s good. That\nmeans you’ve taken the first step to correcting your behavior—to being better than those wild creatures\nMarcus mentions. It also means you’re closer to discovering what your duty calls you to do in life. And\nonce you discover it, you’ve moved a little bit closer to fulfilling it.",
    date: "July 16th",
    docId: "5.11",
    quote:
      " “To what service is my soul committed? Constantly ask yourself this and thoroughly examine yourself by seeing how you relate to that part called the ruling principle. Whose soul do I have now? Do I have that of a child, a youth . . . a tyrant, a pet, or a wild animal?”",
    title: "PROGRESS OF THE SOUL",
  },
  {
    author: "—SENECA",
    book: "ON CONSOLATION TO HELVIA",
    commentary:
      "We’ve all lost people we were close to—a friend, a colleague, a parent, a grandparent. While we\nwere suffering from our grief, some well-meaning person did their best to take our mind off it or\nmake us think about something else for a couple hours. However kind, these gestures are misguided.\nThe Stoics are stereotyped as suppressing their emotions, but their philosophy was actually intended\nto teach us to face, process, and deal with emotions immediately instead of running from them. Tempting\nas it is to deceive yourself or hide from a powerful emotion like grief—by telling yourself and other\npeople that you’re fine—awareness and understanding are better. Distraction might be pleasant in the\nshort term—by going to gladiatorial games, as a Roman might have done, for example. Focusing is better\nin the long term.\nThat means facing it now. Process and parse what you are feeling. Remove your expectations, your\nentitlements, your sense of having been wronged. Find the positive in the situation, but also sit with your\npain and accept it, remembering that it is a part of life. That’s how one conquers grief.",
    date: "December 8th",
    docId: "17.1b",
    quote: " “It’s better to conquer grief than to deceive it.”",
    title: "DON’T HIDE FROM YOUR FEELINGS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "It would be nice if someone could show us exactly what to do in every situation. Indeed, this is what we\nspend a good portion of our lives doing: preparing for this, studying for that. Saving for or anticipating\nsome arbitrary point in the future. But plans, as the boxer Mike Tyson pointed out, last only until you’re\npunched in the face.\nStoics do not seek to have the answer for every question or a plan for every contingency. Yet they’re\nalso not worried. Why? Because they have confidence that they’ll be able to adapt and change with the\ncircumstances. Instead of looking for instruction, they cultivate skills like creativity, independence, selfconfidence, ingenuity, and the ability to problem solve. In this way, they are resilient instead of rigid. We\ncan practice the same.\nToday, we will focus on the strategic rather than the tactical. We’ll remind ourselves that it’s better to\nbe taught than simply given, and better to be flexible than stick to a script.",
    date: "June 12th",
    docId: "2.2.20b–1; 24b–25a",
    quote:
      " “In this way you must understand how laughable it is to say, ‘Tell me what to do!’ What advice could I possibly give? No, a far better request is, ‘Train my mind to adapt to any circumstance.’ . . . In this way, if circumstances take you off script . . . you won’t be desperate for a new prompting.”",
    title: "A TRAINED MIND IS BETTER THAN ANY SCRIPT",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Marcus’s meditations are filled with self-criticism and so are the writings of other Stoics. It’s\nimportant to remember, however, that that’s as far as it goes. There was no self-flagellation, no\npaying penance, no self-esteem issues from guilt or self-loathing. You never hear them call themselves\nworthless pieces of crap, nor do they ever starve or cut themselves as punishment. Their self-criticism is\nconstructive.\nLaying into yourself, unduly depriving yourself, punishing yourself—that’s self-flagellation, not selfimprovement.\nNo need to be too hard on yourself. Hold yourself to a higher standard but not an impossible one. And\nforgive yourself if and when you slip up.",
    date: "June 28th",
    docId: "5.5",
    quote:
      " “Philosophy calls for simple living, but not for penance—it’s quite possible to be simple without being crude.”",
    title: "NO SELF-FLAGELLATION NEEDED",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The late comedian Mitch Hedberg had a funny story he told in his act. Sitting down for an on-air\ninterview, a radio DJ asked him, “So, who are you?” In that moment, he had to think, Is this guy\nreally deep or did I drive to the wrong station?\nHow often are we asked a simple question like “Who are you?” or “What do you do?” or “Where are\nyou from?” Considering it a superficial question—if we even consider it at all—we don’t bother with\nmore than a superficial answer.\nBut, gun to their head, most people couldn’t give much in the way of a substantive answer. Could you?\nHave you taken the time to get clarity about who you are and what you stand for? Or are you too busy\nchasing unimportant things, mimicking the wrong influences, and following disappointing or unfulfilling or\nnonexistent paths?",
    date: "January 6th",
    docId: "8.52",
    quote:
      " “A person who doesn’t know what the universe is, doesn’t know where they are. A person who doesn’t know their purpose in life doesn’t know who they are or what the universe is. A person who doesn’t know any one of these things doesn’t know why they are here. So what to make of people who seek or avoid the praise of those who have no knowledge of where or who they are?”",
    title: "WHERE, WHO, WHAT, AND WHY",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In the early days of what would become known as the Great Depression, a new president named\nFranklin Delano Roosevelt was sworn in and gave his first inaugural address. As the last president to\nhold office before the Twentieth Amendment was ratified, FDR wasn’t able to take office until March—\nmeaning that the country had been without strong leadership for months. Panic was in the air, banks were\nfailing, and people were scared.\nYou’ve probably heard the “nothing to fear but fear itself” sound bite that FDR gave in that famous\nspeech, but the full line is worth reading because it applies to many difficult things we face in life:\n“Let me assert my firm belief that the only thing we have to fear is fear itself—nameless,\nunreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.”\nThe Stoics knew that fear was to be feared because of the miseries it creates. The things we fear pale\nin comparison to the damage we do to ourselves and others when we unthinkingly scramble to avoid them.\nAn economic depression is bad; a panic is worse. A tough situation isn’t helped by terror—it only makes\nthings harder. And that’s why we must resist it and reject it if we wish to turn this situation around.",
    date: "September 9th",
    docId: "13.12b",
    quote:
      " “But there is no reason to live and no limit to our miseries if we let our fears predominate.”",
    title: "NOTHING TO FEAR BUT FEAR ITSELF",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Not only do even the most fortunate of us complain, it often seems like the more fortunate we are, the\nmore time we have to do so. Marcus Aurelius was a reluctant chief executive—just as you might be\na reluctant accountant, kid’s soccer coach, or lawyer. Or perhaps you generally like your job, but you\ncould do without a few of its attendant responsibilities. Where does that thinking get you? Nowhere, other\nthan in a negative state of mind.\nIt calls to mind a motto of British prime minister Benjamin Disraeli: “Never complain, never\nexplain.” He said this because, like Marcus, he knew that the burdens of responsibility were immense. It’s\nso easy to complain about this or that, or to try to make excuses and justifications for the things you’ve\ndone. But that doesn’t accomplish anything—and it never lightens the load.",
    date: "November 13th",
    docId: "8.9",
    quote:
      " “Don’t allow yourself to be heard any longer griping about public life, not even with your own ears!”",
    title: "NEVER COMPLAIN, NEVER EXPLAIN",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "These three quotes compiled by Epictetus show us—in wisdom across history—the themes of\ntolerance, flexibility, and, ultimately, acceptance. Cleanthes and Euripides evoke destiny and fate as\nconcepts that help ease acceptance. When one has a belief in a greater or higher power (be it God or\ngods), then there is no such thing as an event going contrary to plan.\nEven if you don’t believe in a deity, you can take some comfort in the various laws of the universe or\neven the circle of life. What happens to us as individuals can seem random or upsetting or cruel or\ninexplicable, when in fact these events make perfect sense when our perspective is zoomed out, even just\nslightly.\nLet’s practice this perspective today. Pretend that each event—whether desired or unexpected—was\nwilled to happen, willed specifically for you. You wouldn’t fight that, would you?",
    date: "November 19th",
    docId: "53",
    quote:
      " “For any challenge we should hold three thoughts at our command: ‘Lead on God and Destiny, To that Goal fixed for me long ago. I will follow and not stumble; even if my will is weak I will soldier on.’” —CLEANTHES “Whoever embraces necessity count as wise, skilled in divine matters.” —EURIPIDES “If it pleases the gods, so be it. They may well kill me, but they can’t hurt me.” —PLATO’S CRITO AND APOLOGY",
    title: "MAXIMS FROM THREE WISE MEN",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There is one Stoic exercise that might well be described as contemptuous expressions. Stoics use an\nalmost cynical language as a way to dismantle some of the fanciest or most coveted parts of life.\nMarcus’s joke about sex—why would he say something like that? Well, if you take a second to consider\nsex in such an absurd light, you may be less likely to do something shameful or embarrassing in the pursuit\nof it. It’s a counterbalance to the natural bias we have toward something that feels really good.\nWe can apply this same way of thinking to a lot of things that people prize. Consider that envyinducing photo you see on social media—imagine the person painstakingly staging it. What about that job\npromotion that means so much? Look at the lives of other so-called successful people. Still think it holds\nmagical power? Money, which we want more of and are reluctant to part with—consider how covered in\nbacteria and filth it is. That beautiful, perfect person you’re admiring from afar? Remember that if they’re\nsingle, other people must have dumped them at some point. There must be something wrong with them.\nThis exercise won’t turn you into a cynic. But it will provide some much-needed objectivity.",
    date: "April 24th",
    docId: "6.13",
    quote:
      " “Just as when meat or other foods are set before us we think, this is a dead fish, a dead bird or pig; and also, this fine wine is only the juice of a bunch of grapes, this purple-edged robe just sheep’s wool dyed in a bit of blood from a shellfish; or of sex, that it is only rubbing private parts together followed by a spasmic discharge—in the same way our impressions grab actual events and permeate them, so we see them as they really are.”",
    title: "A PRODUCTIVE USE FOR CONTEMPT",
  },
  {
    author: "—SENECA",
    book: "ON PROVIDENCE",
    commentary:
      "No one said life was easy. No one said it would be fair.\nDon’t forget, though, that you come from a long, unbroken line of ancestors who survived\nunimaginable adversity, difficulty, and struggle. It’s their genes and their blood that run through your body\nright now. Without them, you wouldn’t be here.\nYou’re an heir to an impressive tradition—and as their viable offspring, you’re capable of what they\nare capable of. You’re meant for this. Bred for it.\nJust something to keep in mind if things get tough.",
    date: "June 4th",
    docId: "5.7b–8",
    quote:
      " “Why then are we offended? Why do we complain? This is what we’re here for.”",
    title: "THIS IS WHAT WE’RE HERE FOR",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "There’s no need to show Seneca. Show yourself. That no matter how many years you’re ultimately\ngiven, your life can be clearly and earnestly said to have been a long and full one. We all know\nsomeone like that—someone we lost too early but even now think, If I could do half of what they did, I’ll\nconsider my life well lived.\nThe best way to get there is by focusing on what is here right now, on the task you have at hand—big\nor small. As he says, by pouring ourselves fully and intentionally into the present, it “gentle[s] the passing\nof time’s precipitous flight.”",
    date: "May 23rd",
    docId: "49.10b",
    quote:
      " “Show me that the good life doesn’t consist in its length, but in its use, and that it is possible—no, entirely too common—for a person who has had a long life to have lived too little.”",
    title: "SHOW ME HOW TO LIVE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It’s easy to blame our circumstances. One person curses that they weren’t born taller, another that\nthey’re not smarter, with a different complexion, or born in a different country. It’d be hard to find a\nsingle person on this planet—from supermodels on down—who doesn’t think they’re deficient in at least\nsome way. But whatever your perceived deficits are, remember that there are positive qualities that you\ncan develop that don’t depend on genetic accidents.\nYou have the choice to be truthful. You have the choice to be dignified. You can choose to endure. You\ncan choose to be happy. You can choose to be chaste. You can choose to be thrifty. You can choose to be\nkind to others. You can choose to be free. You can persist under difficult odds. You can avoid trafficking\nin gossip. You can choose to be gracious.\nAnd honestly, aren’t the traits that are the result of effort and skill more impressive anyway?",
    date: "October 23rd",
    docId: "5.5",
    quote:
      " “People aren’t in awe of your sharp mind? So be it. But you have many other qualities you can’t claim to have been deprived of at birth. Display then those qualities in your own power: honesty, dignity, endurance, chastity, contentment, frugality, kindness, freedom, persistence, avoiding gossip, and magnanimity.”",
    title: "SHOW THE QUALITIES YOU WERE MADE FOR",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We have an irrational fear of acknowledging our own mortality. We avoid thinking about it because\nwe think it will be depressing. In fact, reflecting on mortality often has the opposite effect—\ninvigorating us more than saddening us. Why? Because it gives us clarity.\nIf you were suddenly told you had but a week to live, what changes would you make? If you died but\nwere resuscitated, how different would your perspective be?\nWhen, as Shakespeare’s Prospero puts it, “every third thought shall be my grave,” there’s no risk of\ngetting caught up in petty matters or distractions. Instead of denying our fear of death, let’s let it make us\nthe best people we can be.\nToday.",
    date: "December 7th",
    docId: "7.56–57",
    quote:
      " “Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?”",
    title: "THE CARDS WE’RE DEALT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "dog that’s allowed to chase cars will chase cars. A child who is never given any boundaries will\nA\nbecome spoiled. An investor without discipline is not an investor—he’s a gambler. A mind that isn’t in\ncontrol of itself, that doesn’t understand its power to regulate itself, will be jerked around by external\nevents and unquestioned impulses.\nThat can’t be how you’d like tomorrow to go. So you must be aware of that. You must put in place\ntraining and habits now to replace ignorance and ill discipline. Only then will you begin to behave and act\ndifferently. Only then will you stop seeking the impossible, the shortsighted, and the unnecessary.",
    date: "March 31st",
    docId: "5.17",
    quote:
      " “Chasing what can’t be done is madness. But the base person is unable to do anything else.”",
    title: "YOU’RE A PRODUCT OF YOUR TRAINING",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "At the end of a frustrating exchange, you might find yourself thinking, Ugh, this person is such an\nidiot. Or asking, Why can’t they just do things right?\nBut not everyone has had the advantages that you’ve had. That’s not to say that your own life has been\neasy—you just had a head start over some people. That’s why it is our duty to understand and be patient\nwith others.\nPhilosophy is spiritual formation, care of the soul. Some need more care than others, just as some have\na better metabolism or were born taller than others. The more forgiving and tolerant you can be of others\n—the more you can be aware of your various privileges and advantages—the more helpful and patient\nyou will be.",
    date: "July 28th",
    docId: "1.1.33–1.3.1–3.",
    quote:
      " “Some people are sharp and others dull; some are raised in a better environment, others in worse, the latter, having inferior habits and nurture, will require more by way of proof and careful instruction to master these teachings and to be formed by them—in the same way that bodies in a bad state must be given a great deal of care when perfect health is sought.”",
    title: "CHECK YOUR PRIVILEGE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Marcus borrows this wonderful metaphor from Heraclitus, who said, “No man steps in the same\nriver twice.” Because the river has changed, and so has the man.\nLife is in a constant state of change. And so are we. To get upset by things is to wrongly assume that\nthey will last. To kick ourselves or blame others is grabbing at the wind. To resent change is to wrongly\nassume that you have a choice in the matter.\nEverything is change. Embrace that. Flow with it.",
    date: "November 15th",
    docId: "5.23",
    quote:
      " “Meditate often on the swiftness with which all that exists and is coming into being is swept by us and carried away. For substance is like a river’s unending flow, its activities continually changing and causes infinitely shifting so that almost nothing at all stands still.”",
    title: "EVERYTHING IS CHANGE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Imagine, for a second, what Marcus’s life as an emperor must have been like. He would preside over\nthe Senate. He would lead the troops in battle, direct the grand strategy of the army as its highest\ncommander. He would also hear appeals—from citizens, from lawyers, from foreign governments. In\nother words, like most people in power, he was called on to make decisions: all day, every day, decision\nafter decision.\nHis formula for decision making is a battle-tested method for doing and acting right—literally. Which\nis why we ought to try to use it ourselves.\nFirst, don’t get upset—because that will color your decision negatively and make it harder than it\nneeds to be.\nSecond, remember the purpose and principles you value most. Running potential actions through this\nfilter will eliminate the bad choices and highlight the right ones.\nDon’t get upset.\nDo the right thing.\nThat’s it.",
    date: "May 28th",
    docId: "8.5",
    quote:
      " “The first thing to do—don’t get worked up. For everything happens according to the nature of all things, and in a short time you’ll be nobody and nowhere, even as the great emperors Hadrian and Augustus are now. The next thing to do—consider carefully the task at hand for what it is, while remembering that your purpose is to be a good human being. Get straight to doing what nature requires of you, and speak as you see most just and fitting—with kindness, modesty, and sincerity.”",
    title: "THE FIRST TWO THINGS BEFORE ACTING",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We regularly covet what other people have. We desperately try to keep up with the Joneses, all the\nwhile the Joneses are miserable trying to keep up with us.\nIt would be funny if it weren’t so sad. So today, stop trying to get what other people have. Fight your\nurge to gather and hoard. That’s not the right way to live and act. Appreciate and take advantage of what\nyou already do have, and let that attitude guide your actions.",
    date: "May 15th",
    docId: "7.27",
    quote:
      " “Don’t set your mind on things you don’t possess as if they were yours, but count the blessings you actually possess and think how much you would desire them if they weren’t already yours. But watch yourself, that you don’t value these things to the point of being troubled if you should lose them.”",
    title: "COUNT YOUR BLESSINGS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Will this make me rich? Will people be impressed? How hard do I need to try? How long will this\ntake? What’s in it for me? Should I do this other thing instead? These are the questions we ask\nourselves amid the day’s opportunities and obligations.\nMarcus Aurelius had many responsibilities, as those who hold executive power do. He judged cases,\nheard appeals, sent troops into battle, appointed administrators, approved budgets. A lot rode on his\nchoices and actions. Should he do this or that? What about this concern or that concern? When would he\nget to enjoy himself? The simple reminder above was a way to cut through the Gordian knot of incentives,\ncomplaints, fears, and competing interests.\nIt’s what we must use to decide what to do in each and every phase of life. Morality can be\ncomplicated—but the right thing is usually clear and intuitive enough to feel in our gut. Our duty is rarely\neasy, but it is important. It’s also usually the harder choice. But we must do it.",
    date: "July 2nd",
    docId: "6.2",
    quote:
      " “Never shirk the proper dispatch of your duty, no matter if you are freezing or hot, groggy or well-rested, vilified or praised, not even if dying or pressed by other demands. Even dying is one of the important assignments of life and, in this as in all else, make the most of your resources to do well the duty at hand.”",
    title: "ON DUTY AND CIRCUMSTANCE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "You have two essential tasks in life: to be a good person and to pursue the occupation that you love.\nEverything else is a waste of energy and a squandering of your potential.\nHow does one do that? OK, that’s a tougher question. But the philosophy we see from the Stoics\nmakes it simple enough: say no to distractions, to destructive emotions, to outside pressure. Ask yourself:\nWhat is it that only I can do? What is the best use of my limited time on this planet? Try to do the right\nthing when the situation calls for it. Treat other people the way you would hope to be treated. And\nunderstand that every small choice and tiny matter is an opportunity to practice these larger principles.\nThat’s it. That’s what goes into the most important skill of all: how to live.",
    date: "October 25th",
    docId: "4.1.62–64",
    quote:
      " “What, then, makes a person free from hindrance and self-determining? For wealth doesn’t, neither does high-office, state or kingdom—rather, something else must be found . . . in the case of living, it is the knowledge of how to live.”",
    title: "TWO TASKS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "If your happiness is dependent on accomplishing certain goals, what happens if fate intervenes? What if\nyou’re snubbed? If outside events interrupt? What if you do achieve everything but find that nobody is\nimpressed? That’s the problem with letting your happiness be determined by things you can’t control. It’s\nan insane risk.\nIf an actor focuses on the public reception to a project—whether critics like it or whether it’s a hit,\nthey will be constantly disappointed and hurt. But if they love their performance—and put everything they\nhave into making it the best that they’re capable of—they will always find satisfaction in their job. Like\nthem, we should take pleasure from our actions—in taking the right actions—rather than the results that\ncome from them.\nOur ambition should not be to win, then, but to play with our full effort. Our intention is not to be\nthanked or recognized, but to help and to do what we think is right. Our focus is not on what happens to us\nbut on how we respond. In this, we will always find contentment and resilience.",
    date: "May 14th",
    docId: "6:51",
    quote:
      " “Those obsessed with glory attach their well-being to the regard of others, those who love pleasure tie it to feelings, but the one with true understanding seeks it only in their own actions. . . . Think on the character of the people one wishes to please, the possessions one means to gain, and the tactics one employs to such ends. How quickly time erases such things, and how many will yet be wiped away.”",
    title: "OUR WELL-BEING LIES IN OUR ACTIONS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Many successful people have a morning ritual. For some, it’s meditation. For others, it’s exercise.\nFor many, it’s journaling—just a few pages where they write down their thoughts, fears, hopes. In\nthese cases, the point is not so much the activity itself as it is the ritualized reflection. The idea is to take\nsome time to look inward and examine.\nTaking that time is what Stoics advocated more than almost anything else. We don’t know whether\nMarcus Aurelius wrote his Meditations in the morning or at night, but we know he carved out moments of\nquiet alone time—and that he wrote for himself, not for anyone else. If you’re looking for a place to start\nyour own ritual, you could do worse than Marcus’s example and Epictetus’s checklist.\nEvery day, starting today, ask yourself these same tough questions. Let philosophy and hard work\nguide you to better answers, one morning at a time, over the course of a life.",
    date: "January 21st",
    docId: "4.6.34–35",
    quote:
      " “Ask yourself the following first thing in the morning: What am I lacking in attaining freedom from passion? What for tranquility? What am I? A mere body, estate-holder, or reputation? None of these things. What, then? A rational being. What then is demanded of me? Meditate on your actions. How did I steer away from serenity? What did I do that was unfriendly, unsocial, or uncaring? What did I fail to do in all these things?”",
    title: "A MORNING RITUAL",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "In a scene in Steven Pressfield’s classic novel about Alexander the Great, The Virtues of War,\nAlexander reaches a river crossing only to be confronted by a philosopher who refuses to move. “This\nman has conquered the world!” one of Alexander’s men shouts. “What have you done?” The philosopher\nresponds, with complete confidence, “I have conquered the need to conquer the world.”\nWe do know that Alexander did clash with Diogenes the Cynic, a philosopher known for his rejection\nof what society prizes and, by extension, Alexander’s self-image. Just as in Pressfield’s fictional\nencounter, in Diogenes’s real confrontation with Alexander, the philosopher was more powerful than the\nmost powerful man in the world—because, unlike him, Diogenes had fewer wants. They were able to\nlook each other in the eye and see who really had control over himself, who had achieved the self-mastery\nrequired for real and lasting power.\nYou can have that too. It just means focusing inward on acquiring power rather than outward. As\nPublilius Syrus, himself a former slave, put it: “Would you have a great empire? Rule over yourself!”",
    date: "November 7th",
    docId: "3.26.34–35",
    quote:
      " “Don’t trust in your reputation, money, or position, but in the strength that is yours—namely, your judgments about the things that you control and don’t control. For this alone is what makes us free and unfettered, that picks us up by the neck from the depths and lifts us eye to eye with the rich and powerful.”",
    title: "HOW TO BE POWERFUL",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "There is no prize for having read the most books before you die. Even if you were the most dedicated\nreader in the world—a book a day, even—your collection would probably never be bigger than a\nsmall branch library. You’ll never even come close to matching what’s stored in the servers at Google\nBooks or keep up with the hundreds of thousands of new titles published on Amazon each year.\nWhat if, when it came to your reading and learning, you prioritized quality over quantity? What if you\nread the few great books deeply instead of briefly skimming all the new books? Your shelves might be\nemptier, but your brain and your life would be fuller.",
    date: "May 20th",
    docId: "9.4",
    quote:
      " “What’s the point of having countless books and libraries, whose titles could hardly be read through in a lifetime. The learner is not taught, but burdened by the sheer volume, and it’s better to plant the seeds of a few authors than to be scattered about by many.”",
    title: "QUALITY OVER QUANTITY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Take a walk down Forty-first Street toward the beautiful New York City Public Library, with its\nmajestic stone lions. On your way up “Library Way,” you’ll pass a gold placard laid into the cement,\npart of a series of quotations from great writers throughout history. This one is from Marcus Aurelius:\n“Everything is only for a day, both that which remembers and that which is remembered.”\nThe library itself was designed by the firm of John Merven Carrère, one of the twentieth century’s\nmost accomplished architects. It combines the collections of such luminaries and philanthropists as\nSamuel Tilden, John Jacob Astor, and James Lenox, and their names are carved into the stone. Today, the\nnaming rights go to hedge fund manager Stephen A. Schwarzman. The opening of the library in 1911 was\nattended by President William Howard Taft, Governor John Alden Dix, and New York City mayor\nWilliam Jay Gaynor. The plaques you pass on your way were designed by the excellent Gregg LeFevre.\nMarcus’s quote makes us ponder: How many of these people have we even heard of? The people\ninvolved in the story of the library were some of the most famous men in the world, masters of their\nrespective crafts, rich beyond imagination in some cases. Even along “Library Way,” many of the famous\nauthors are unfamiliar to the modern reader. They are all long gone, as are the people who remembered\nthem.\nAll of us, including Marcus—who is passed over by just as many unaware pedestrians—last for just a\nday, at most.",
    date: "December 28th",
    docId: "4.35",
    quote:
      " “Everything lasts for a day, the one who remembers and the remembered.”",
    title: "ON BEING REMEMBERED",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The Stoics loved to use boxing and wrestling metaphors the way we use baseball and football\nanalogies today. This is probably because the sport of pankration—literally, “all strength,” but a\npurer form of mixed martial arts than one sees today—in the UFC was integral to boyhood and manhood\nin Greece and Rome. (In fact, recent analysis has found instances of “cauliflower ear,” a common\ngrappling injury, on Greek statues.) The Stoics refer to fighting because it’s what they knew.\nSeneca writes that unbruised prosperity is weak and easy to defeat in the ring, but “a man who has\nbeen at constant feud with misfortunes acquires a skin calloused by suffering.” This man, he says, fights\nall the way to the ground and never gives up.\nThat’s what Epictetus means too. What kind of boxer are you if you leave because you get hit? That’s\nthe nature of the sport! Is that going to stop you from continuing?",
    date: "May 21st",
    docId: "3.10.6–7",
    quote:
      " “But what is philosophy? Doesn’t it simply mean preparing ourselves for what may come? Don’t you understand that really amounts to saying that if I would so prepare myself to endure, then let anything happen that will? Otherwise, it would be like the boxer exiting the ring because he took some punches. Actually, you can leave the boxing ring without consequence, but what advantage would come from abandoning the pursuit of wisdom? So, what should each of us say to every trial we face? This is what I’ve trained for, for this my discipline!”",
    title: "WHAT KIND OF BOXER ARE YOU?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Professionals don’t have to justify spending time training or practicing their work. It’s what they do,\nand practice is how they get good at it. The raw materials vary from career to career, just as the\nlocations and duration vary depending on the person and the profession. But the one constant is the\nworking of those materials, the gradual improvements and proficiency.\nAccording to the Stoics, your mind is the asset that must be worked on most—and understood best.",
    date: "May 5th",
    docId: "3.3.1",
    quote:
      " “The raw material for the work of a good and excellent person is their own guiding reason, the body is that of the doctor and the physical trainer, and the farm the farmer’s.”",
    title: "YOU ARE THE PROJECT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "“We are what we repeatedly do,” Aristotle said, “therefore, excellence is not an act but a habit.”\nThe Stoics add to that that we are a product of our thoughts (“Such as are your habitual\nthoughts, such also will be the character of your mind,” Marcus Aurelius put it).\nThink about your activities of the last week as well as what you have planned for today and the week\nthat follows. The person you’d like to be, or the person you see yourself as—how closely do your actions\nactually correspond to him or her? Which fire are you fueling? Which person are you becoming?",
    date: "May 13th",
    docId: "2.18.1–5",
    quote:
      " “Every habit and capability is confirmed and grows in its corresponding actions, walking by walking, and running by running . . . therefore, if you want to do something make a habit of it, if you don’t want to do that, don’t, but make a habit of something else instead. The same principle is at work in our state of mind. When you get angry, you’ve not only experienced that evil, but you’ve also reinforced a bad habit, adding fuel to the fire.”",
    title: "FUELING THE HABIT BONFIRE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "It was said that Epictetus walked with a permanent limp as a result of being chained up as a slave. Two\nthousand years later, James Stockdale also had his legs chained in irons (and his arms bound behind his\nback and pulled from the ceiling, repeatedly wrenching them from their sockets). Future senator John\nMcCain was in that same prison, subjected to much of the same abuse. Because his father was famous,\nMcCain was repeatedly offered by his captors a chance to abandon his men and be sent home early. He\ntoo held tightly to his freedom of choice, declining to submit to that temptation even though it meant a loss\nof the physical freedom he must have ached for.\nNone of these men broke. No one could make them sacrifice their principles. That’s the thing—\nsomeone can throw you in chains, but they don’t have the power to change who you are. Even under the\nworst torture and cruelties that humans can inflict on one another, our power over our own mind and our\npower to make our own decisions can’t be broken—only relinquished.",
    date: "September 6th",
    docId: "1.1.23",
    quote:
      " “You can bind up my leg, but not even Zeus has the power to break my freedom of choice.”",
    title: "THEY CAN THROW YOU IN CHAINS, BUT . . .",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Psychologists speak of cognitive distortions—exaggerated thinking patterns that have a destructive\nimpact on the life of the patient. One of the most common is known as all-or-nothing thinking (also\nreferred to as splitting). Examples of this include thoughts like:\nIf you’re not with me, you’re against me.\nSo-and-so is all good/bad.\nBecause this wasn’t a complete success, it is a total failure.\nThis sort of extreme thinking is associated with depression and frustration. How could it not be?\nPerfectionism rarely begets perfection—only disappointment.\nPragmatism has no such hang-ups. It’ll take what it can get. That’s what Epictetus is reminding us.\nWe’re never going to be perfect—if there is even such a thing. We’re human, after all. Our pursuits should\nbe aimed at progress, however little that it’s possible for us to make.",
    date: "August 10th",
    docId: "1.2.37b",
    quote:
      " “We don’t abandon our pursuits because we despair of ever perfecting them.”",
    title: "PERFECTION IS THE ENEMY OF ACTION",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "The next time you see something you want, remember Epictetus’s metaphor of life’s banquet. As you\nfind yourself getting excited, ready to do anything and everything to get it—the equivalent of reaching\nacross the table and grabbing a dish out of someone’s hands—just remind yourself: that’s bad manners\nand unnecessary. Then wait patiently for your turn.\nThis metaphor has other interpretations too. For instance, we might reflect that we’re lucky to have\nbeen invited to such a wonderful feast (gratitude). Or that we should take our time and savor the taste of\nwhat’s on offer (enjoying the present moment) but that to stuff ourselves sick with food and drink serves\nno one, least of all our health (gluttony is a deadly sin, after all). That at the end of the meal, it’s rude not\nto help the host clean up and do the dishes (selflessness). And finally, that next time, it’s our turn to host\nand treat others just as we had been treated (charity).\nEnjoy the meal!",
    date: "February 19th",
    docId: "15",
    quote:
      " “Remember to conduct yourself in life as if at a banquet. As something being passed around comes to you, reach out your hand and take a moderate helping. Does it pass you by? Don’t stop it. It hasn’t yet come? Don’t burn in desire for it, but wait until it arrives in front of you. Act this way with children, a spouse, toward position, with wealth—one day it will make you worthy of a banquet with the gods.”",
    title: "THE BANQUET OF LIFE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Ask most people what they’re working toward and you’ll get an answer like: “I’m trying to become a\n[insert profession].” Or they’ll tell you they’re trying to get appointed to some impressive committee\nor position, become a millionaire, get discovered, become famous, whatever. Now you ask a couple more\nquestions, such as “Why are you doing that?” or “What are you hoping it will be like when you get it?”\nand you find at the very core of it, people want freedom, they want happiness, and they want the respect of\ntheir peers.\nA Stoic looks at all this and shakes his head at the immense effort and expense we put into chasing\nthings that are simple and straightforward to acquire. It’s as if we prefer to spend years building a\ncomplicated Rube Goldberg machine instead of just reaching out and picking up what we want. It’s like\nlooking all over for your sunglasses and then realizing they were on your head the whole time.\nFreedom? That’s easy. It’s in your choices.\nHappiness? That’s easy. It’s in your choices.\nRespect of your peers? That too is in the choices you make.\nAnd all of that is right in front of you. No need to take the long way to get there.",
    date: "June 23rd",
    docId: "12.1",
    quote:
      " “You could enjoy this very moment all the things you are praying to reach by taking the long way around—if you’d stop depriving yourself of them.”",
    title: "THE LONG WAY AROUND",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "well-meaning friend might ask you today: “What do you think about [insert tragedy from the other side\nA\nof the world]?” You, in your equally well-meaning concern, might say, “I just feel awful about it.”\nIn this scenario, both of you have put aside your reasoned choice without doing a single thing for the\nvictims suffering from the actual tragedy. It can be so easy to get distracted by, even consumed by,\nhorrible news from all over the world. The proper response of the Stoic to these events is not to not care,\nbut mindless, meaningless sympathy does very little either (and comes at the cost of one’s own serenity, in\nmost cases). If there is something you can actually do to help these suffering people, then, yes, the\ndisturbing news (and your reaction to it) has relevance to your reasoned choice. If emoting is the end of\nyour participation, then you ought to get back to your own individual duty—to yourself, to your family, to\nyour country.July 25th\nWHAT’S ON YOUR TOMBSTONE?",
    date: "July 24th",
    docId: "3.18.1–2",
    quote:
      " “Whenever disturbing news is delivered to you, bear in mind that no news can ever be relevant to your reasoned choice. Can anyone break news to you that your assumptions or desires are wrong? No way! But they can tell you someone died—even so, what is that to you?”",
    title: "SOMEWHERE SOMEONE’S DYING",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "It has become a cliché to quote Theodore Roosevelt’s “Man in the Arena” speech, which lionizes “the\none whose face is marred by dust and sweat and blood; who strives valiantly . . .” compared with the\ncritic who sits on the sidelines. Roosevelt gave that speech shortly after he left office, at the height of his\npopularity. In a few years, he would run against his former protégé in an attempt to retake the White\nHouse, losing badly and nearly assassinated in the process. He would also nearly die exploring a river in\nthe Amazon, kill thousands of animals in African safaris, and then beg Woodrow Wilson to allow him to\nenlist in World War I despite being 59 years old. He would do a lot of things that seem somewhat baffling\nin retrospect.\nTheodore Roosevelt was a truly great man. But he was also driven by a compulsion, a work and\nactivity addiction that was seemingly without end. Many of us share this affliction—being driven by\nsomething we can’t control. We’re afraid of being still, so we seek out strife and action as a distraction.\nWe choose to be at war—in some cases, literally—when peace is in fact the more honorable and fitting\nchoice.\nYes, the man in the arena is admirable. As is the soldier and the politician and the businesswoman and\nall the other occupations. But, and this is a big but, only if we’re in the arena for the right reasons.",
    date: "February 6th",
    docId: "28.7",
    quote:
      " “I don’t agree with those who plunge headlong into the middle of the flood and who, accepting a turbulent life, struggle daily in great spirit with difficult circumstances. The wise person will endure that, but won’t choose it—choosing to be at peace, rather than at war.”",
    title: "DON’T SEEK OUT STRIFE",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "Every few years, a sad spectacle is played out in the news. An old millionaire, still lord of his\nbusiness empire, is taken to court. Shareholders and family members go to court to argue that he is no\nlonger mentally competent to make decisions—that the patriarch is not fit to run his own company and\nlegal affairs. Because this powerful person refused to ever relinquish control or develop a succession\nplan, he is subjected to one of life’s worst humiliations: the public exposure of his most private\nvulnerabilities.\nWe must not get so wrapped up in our work that we think we’re immune from the reality of aging and\nlife. Who wants to be the person who can never let go? Is there so little meaning in your life that your only\npursuit is work until you’re eventually carted off in a coffin?\nTake pride in your work. But it is not all.",
    date: "July 31st",
    docId: "20.2",
    quote:
      " “How disgraceful is the lawyer whose dying breath passes while at court, at an advanced age, pleading for unknown litigants and still seeking the approval of ignorant spectators.”",
    title: "YOUR CAREER IS NOT A LIFE SENTENCE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Have you ever watched a seasoned pro handle the media? No question is too tough, no tone too\npointed or insulting. They parry every blow with humor, poise, and patience. Even when stung or\nprovoked, they choose not to flinch or react. They’re able to do this not only because of training and\nexperience, but because they understand that reacting emotionally will only make the situation worse. The\nmedia is waiting for them to slip up or get upset, so to successfully navigate press events they have\ninternalized the importance of keeping themselves under calm control.\nIt’s unlikely you’ll face a horde of probing reporters bombarding you with insensitive questions today.\nBut it might be helpful—whatever stresses or frustrations or overload that do come your way—to picture\nthat image and use it as your model for dealing with them. Our reasoned choice—our prohairesis, as the\nStoics called it—is a kind of invincibility that we can cultivate. We can shrug off hostile attacks and\nbreeze through pressure or problems. And, like our model, when we finish, we can point back into the\ncrowd and say, “Next!”",
    date: "February 4th",
    docId: "1.18.21",
    quote:
      " “Who then is invincible? The one who cannot be upset by anything outside their reasoned choice.”",
    title: "ON BEING INVINCIBLE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "good teacher knows that when a student is failing, the blame falls on the instructor, not the pupil. How\nA\nmuch more generous and tolerant would we be if we could extend this understanding to other spheres in\nour life? To be able to see that if a friend is unreliable, maybe it’s because they don’t know what’s wrong\nor because we haven’t tried to help them fix their flaw. If an employee is underperforming, just talk to\nthem or figure out if they’re lacking in support. If someone is being annoying, try talking to them about the\nproblem with their behavior, or ask yourself: Why am I being so sensitive?\nAnd if this doesn’t work, try letting it go. It might be an isolated incident anyway.November 29th\nYOU’RE GOING TO BE OK",
    date: "November 28th",
    docId: "10.4",
    quote:
      " “If someone is slipping up, kindly correct them and point out what they missed. But if you can’t, blame yourself—or no one.”",
    title: "IT’S NOT ON THEM, IT’S ON YOU",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "The way we nervously worry about some looming bad news is strange if you think about it. By\ndefinition, the waiting means it hasn’t happened yet, so that feeling bad in advance is totally\nvoluntary. But that’s what we do: chewing our nails, feeling sick to our stomachs, rudely brushing aside\nthe people around us. Why? Because something bad might occur soon.\nThe pragmatist, the person of action, is too busy to waste time on such silliness. The pragmatist can’t\nworry about every possible outcome in advance. Think about it. Best case scenario—if the news turns out\nto be better than expected, all this time was wasted with needless fear. Worst case scenario—we were\nmiserable for extra time, by choice.\nAnd what better use could you make of that time? A day that could be your last—you want to spend it\nin worry? In what other area could you make some progress while others might be sitting on the edges of\ntheir seat, passively awaiting some fate?\nLet the news come when it does. Be too busy working to care.",
    date: "August 21st",
    docId: "98.5b–6a",
    quote:
      " “It’s ruinous for the soul to be anxious about the future and miserable in advance of misery, engulfed by anxiety that the things it desires might remain its own until the very end. For such a soul will never be at rest—by longing for things to come it will lose the ability to enjoy present things.”",
    title: "DON’T BE MISERABLE IN ADVANCE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "If you start something and right away feel yourself getting lazy and irritated, first ask yourself: Why am I\ndoing this? If it really is a necessity, ask yourself: What’s behind my reluctance? Fear? Spite?\nFatigue?\nDon’t forge ahead hoping that someone will come along and relieve you of this task you don’t want to\ndo. Or that someone else will suddenly explain why what you’re doing matters. Don’t be the person who\nsays yes with their mouth but no with their actions. Steve Jobs told BusinessWeek in 2005, only midway\nthrough Apple’s stunning rise to becoming one of the world’s most valuable companies: “Quality is much\nbetter than quantity. . . . One home run is much better than two doubles.”",
    date: "August 30th",
    docId: "31.b–32",
    quote:
      " “Anything that must yet be done, virtue can do with courage and promptness. For anyone would call it a sign of foolishness for one to undertake a task with a lazy and begrudging spirit, or to push the body in one direction and the mind in another, to be torn apart by wildly divergent impulses.”",
    title: "WHEN YOU FEEL LAZY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Today, we could hope that goodness comes our way—good news, good weather, good luck. Or we\ncould find it ourselves, in ourselves. Goodness isn’t something that’s going to be delivered by mail.\nYou have to dig it up inside your own soul. You find it within your own thoughts, and you make it with\nyour own actions.",
    date: "October 24th",
    docId: "7.59",
    quote:
      " “Dig deep within yourself, for there is a fountain of goodness ever ready to flow if you will keep digging.”",
    title: "THE FOUNTAIN OF GOODNESS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Today, things will happen that will be contrary to your plans. If not today, then certainly tomorrow. As\na result of these obstacles, you will not be able to do what you planned. This is not as bad as it\nseems, because your mind is infinitely elastic and adaptable. You have the power to use the Stoic exercise\nof turning obstacles upside down, which takes one negative circumstance and uses it as an opportunity to\npractice an unintended virtue or form of excellence.\nIf something prevents you from getting to your destination on time, then this is a chance to practice\npatience.\nIf an employee makes an expensive mistake, this is a chance to teach a valuable lesson.\nIf a computer glitch erases your work, it’s a chance to start over with a clean slate.\nIf someone hurts you, it’s a chance to practice forgiveness.\nIf something is hard, it is a chance to get stronger.\nTry this line of thinking and see whether there is a situation in which one could not find some virtue to\npractice or derive some benefit. There isn’t one. Every impediment can advance action in some form or\nanother.",
    date: "June 30th",
    docId: "5.20",
    quote:
      " “While it’s true that someone can impede our actions, they can’t impede our intentions and our attitudes, which have the power of being conditional and adaptable. For the mind adapts and converts any obstacle to its action into a means of achieving it. That which is an impediment to action is turned to advance action. The obstacle on the path becomes the way.”",
    title: "THE OBSTACLE IS THE WAY",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "well-known writer once complained that after becoming successful, wealthy friends were always\nA\ninviting him to their beautiful, exotic houses. “Come to our home in the south of France,” they would say.\nOr, “Our Swiss ski chalet is a wonderful place to write.” The writer traveled the world, living in luxury,\nhoping to find inspiration and creativity in these inspiring manors and mansions. Yet it rarely happened.\nThere was always the allure of another, better house. There were always distractions, always so many\nthings to do—and the writer’s block and insecurity that plagues creative types traveled with him\nwherever he went.\nWe tell ourselves that we need the right setup before we finally buckle down and get serious. Or we\ntell ourselves that some vacation or time alone will be good for a relationship or an ailment. This is selfdeceit at its finest.\nIt’s far better that we become pragmatic and adaptable—able to do what we need to do anywhere,\nanytime. The place to do your work, to live the good life, is here.August 4th\nNO BLAME, JUST FOCUS",
    date: "August 3rd",
    docId: "28.5b–6a",
    quote:
      " “At this moment you aren’t on a journey, but wandering about, being driven from place to place, even though what you seek—to live well—is found in all places. Is there any place more full of confusion than the Forum? Yet even there you can live at peace, if needed.”",
    title: "THE GOOD LIFE IS ANYWHERE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Aulus Gellius relates that Epictetus once said, “If anyone would take two words to heart and take\npains to govern and watch over themselves by them, they will live an impeccable and immensely\ntranquil life. The two words are: persist and resist.” That’s great advice. But what principles should\ndetermine what we persist in and what we ought to resist?\nMarcus supplies that answer: reverence and justice. In other words, virtue.",
    date: "October 10th",
    docId: "12.1",
    quote:
      " “Leave the past behind, let the grand design take care of the future, and instead only rightly guide the present to reverence and justice. Reverence so that you’ll love what you’ve been allotted, for nature brought you both to each other. Justice so that you’ll speak the truth freely and without evasion, and so that you’ll act only as the law and value of things require.”",
    title: "REVERENCE AND JUSTICE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The writer Robert Greene often uses the phrase “As in war, so in life.” It’s an aphorism worth keeping\nclose, because our life is a battle both literally and figuratively. As a species, we fight to survive on\na planet indifferent to our survival. As individuals, we fight to survive among a species whose population\nnumbers in the billions. Even inside our own bodies, diverse bacteria battle it out. Vivere est militare.\n(To live is to fight.)\nToday, you’ll be fighting for your goal, fighting against impulses, fighting to be the person you want to\nbe. So what are the attributes necessary to win these many wars?\nDiscipline\nFortitude\nCourage\nClearheadedness\nSelflessness\nSacrifice\nAnd which attributes lose wars?\nCowardice\nRashness\nDisorganization\nOverconfidence\nWeakness\nSelfishness\nAs in war, so these attributes matter in daily life.",
    date: "June 13th",
    docId: "3.24.31–36",
    quote:
      " “Don’t you know life is like a military campaign? One must serve on watch, another in reconnaissance, another on the front line. . . . So it is for us—each person’s life is a kind of battle, and a long and varied one too. You must keep watch like a soldier and do everything commanded. . . . You have been stationed in a key post, not some lowly place, and not for a short time but for life.”",
    title: "LIFE IS A BATTLEFIELD",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "When you set your mind to a task, do you always follow through? It’s an impressive feat if you do.\nBut don’t let yourself become a prisoner of that kind of determination. That asset might become a\nliability someday.\nConditions change. New facts come in. Circumstances arise. If you can’t adapt to them—if you simply\nproceed onward, unable to adjust according to this additional information—you are no better than a robot.\nThe point is not to have an iron will, but an adaptable will—a will that makes full use of reason to clarify\nperception, impulse, and judgment to act effectively for the right purpose.\nIt’s not weak to change and adapt. Flexibility is its own kind of strength. In fact, this flexibility\ncombined with strength is what will make us resilient and unstoppable.",
    date: "September 19th",
    docId: "8.16",
    quote:
      " “Remember that to change your mind and to follow someone’s correction are consistent with a free will. For the action is yours alone—to fulfill its purpose in keeping with your impulse and judgment, and yes, with your intelligence.”",
    title: "FLEXIBILITY OF THE WILL",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "One of the most powerful things you can do as a human being in our hyperconnected, 24/7 media\nworld is say: “I don’t know.” Or, more provocatively: “I don’t care.” Most of society seems to have\ntaken it as a commandment that one must know about every single current event, watch every episode of\nevery critically acclaimed television series, follow the news religiously, and present themselves to others\nas an informed and worldly individual.\nBut where is the evidence that this is actually necessary? Is the obligation enforced by the police? Or\nis it that you’re just afraid of seeming silly at a dinner party? Yes, you owe it to your country and your\nfamily to know generally about events that may directly affect them, but that’s about all.\nHow much more time, energy, and pure brainpower would you have available if you drastically cut\nyour media consumption? How much more rested and present would you feel if you were no longer\nexcited and outraged by every scandal, breaking story, and potential crisis (many of which never come to\npass anyway)?",
    date: "January 30th",
    docId: "13a",
    quote:
      " “If you wish to improve, be content to appear clueless or stupid in extraneous matters—don’t wish to seem knowledgeable. And if some regard you as important, distrust yourself.”",
    title: "YOU DON’T HAVE TO STAY ON TOP OF EVERYTHING",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Musing in his notebook about the topic of immortality, Ralph Waldo Emerson complained how\nwriters dance around a difficult topic by relying on quotes. “I hate quotation,” he wrote. “Tell me\nwhat you know.”\nSeneca was throwing down the same gauntlet some twenty centuries before. It’s easier to quote, to rely\non the wise words of others. Especially when the people you’re deferring to are such towering figures!\nIt’s harder (and more intimidating) to venture out on your own and express your own thoughts. But\nhow do you think those wise and true quotes from those towering figures were created in the first place?\nYour own experiences have value. You have accumulated your own wisdom too. Stake your claim. Put\nsomething down for the ages—in words and also in example.",
    date: "December 22nd",
    docId: "33.7",
    quote:
      " “For it’s disgraceful for an old person, or one in sight of old age, to have only the knowledge carried in their notebooks. Zeno said this . . . what do you say? Cleanthes said that . . . what do you say? How long will you be compelled by the claims of another? Take charge and stake your own claim—something posterity will carry in its notebook.”",
    title: "STAKE YOUR OWN CLAIM",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "If doing good was easy, everyone would do it. (And if doing bad wasn’t tempting or attractive, nobody\nwould do it.) The same goes for your duty. If anyone could do it, it would have been assigned to\nsomeone else. But instead it was assigned to you.\nThankfully, you’re not like everyone. You’re not afraid of doing what is hard. You can resist\nsuperficially attractive rewards. Can’t you?",
    date: "July 5th",
    docId: "76.18",
    quote:
      " “Good people will do what they find honorable to do, even if it requires hard work; they’ll do it even if it causes them injury; they’ll do it even if it will bring danger. Again, they won’t do what they find base, even if it brings wealth, pleasure, or power. Nothing will deter them from what is honorable, and nothing will lure them into what is base.”",
    title: "NO ONE SAID IT’D BE EASY",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Is there anything sadder than the immense lengths we’ll go to impress someone? The things we’ll do to\nearn someone’s approval can seem, when examined in retrospect, like the result of some temporary\nform of insanity. Suddenly we’re wearing uncomfortable, ridiculous clothes we’ve been told are cool,\neating differently, talking differently, eagerly waiting for a call or text. If we did these things because we\nliked it, that would be one thing. But that’s not what it is. It’s just a means to an end—to get someone to\ngive us the nod.\nThe irony, as Marcus Aurelius points out repeatedly, is that the people whose opinion we covet are\nnot all that great. They’re flawed—they’re distracted and wowed by all sorts of silly things themselves.\nWe know this and yet we don’t want to think about it. To quote Fight Club again, “We buy things we don’t\nneed, to impress people we don’t like.”\nDoesn’t that sound pretty ridiculous? But more than that, isn’t it about as far as possible as you can get\nfrom the serenity and security that philosophy can provide?",
    date: "March 29th",
    docId: "23",
    quote:
      " “If you should ever turn your will to things outside your control in order to impress someone, be sure that you have wrecked your whole purpose in life. Be content, then, to be a philosopher in all that you do, and if you wish also to be seen as one, show yourself first that you are and you will succeed.”",
    title: "WHY DO YOU NEED TO IMPRESS THESE PEOPLE AGAIN?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "degree on a wall means you’re educated as much as shoes on your feet mean you’re walking. It’s a\nA\nstart, but hardly sufficient.\nOtherwise, how could so many “educated” people make unreasonable decisions? Or miss so many\nobvious things? Partly it’s because they forget that they ought to focus only on that which lies within their\npower to control. A surviving fragment from the philosopher Heraclitus expresses that reality:\n“Many who have learned\nfrom Hesiod the countless names\nof gods and monsters\nnever understand\nthat night and day are one.”\nJust as you can walk plenty well without shoes, you don’t need to step into a classroom to understand\nthe basic, fundamental reality of nature and of our proper role in it. Begin with awareness and reflection.\nNot just once, but every single second of every single day.March 23rd\nTHE STRAITJACKETED SOUL",
    date: "March 22nd",
    docId: "1.22.9–10a",
    quote:
      " “What is it then to be properly educated? It is learning to apply our natural preconceptions to the right things according to Nature, and beyond that to separate the things that lie within our power from those that don’t.”",
    title: "THE SIGN OF TRUE EDUCATION",
  },
  {
    author: "—SENECA",
    book: "ON CONSOLATION TO HELVIA",
    commentary:
      "It can be beneficial to reflect on what you used to accept as normal. Consider your first paycheck—how\nbig it seemed then. Or your first apartment, with its own bedroom and bathroom and the ramen you\ngladly scarfed down in the kitchen. Today, as you’ve become more successful, these conditions would\nhardly feel sufficient. In fact, you probably want even more than what you have right now. Yet just a few\nyears ago those paltry conditions were not only enough, they felt great!\nWhen we become successful, we forget how strong we used to be. We are so used to what we have,\nwe half believe we’d die without it. Of course, this is just the comfort talking. In the days of the world\nwars, our parents and grandparents made do with rationed gas, butter, and electricity. They were fine, just\nas you have been fine when you had less.\nRemember today that you’d be OK if things suddenly went wrong. Your actual needs are small. There\nis very little that could happen that would truly threaten your survival. Think about that—and adjust your\nworries and fears accordingly.",
    date: "September 29th",
    docId: "10.11b",
    quote:
      " “Nothing can satisfy greed, but even a small measure satisfies nature. So it is that the poverty of an exile brings no misfortune, for no place of exile is so barren as not to produce ample support for a person.”",
    title: "YOUR ACTUAL NEEDS ARE SMALL",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "What is “a cure for the self”? Perhaps Seneca means that, through nature and nurture, we develop a\nunique set of characteristics—some positive and some negative. When those negative\ncharacteristics begin to have consequences in our lives, some of us turn to therapy, psychoanalysis, or the\nhelp of a support group. The point? To cure certain selfish, destructive parts of ourselves.\nBut of all the avenues for curing our negative characteristics, philosophy has existed the longest and\nhelped the most people. It is concerned not just with mitigating the effects of a mental illness or a\nneurosis, but it is designed to encourage human flourishing. It’s designed to help you live the Good Life.\nDon’t you deserve to flourish? Wouldn’t you like to be great of soul, filled with confidence, and\ninvincible to external events? Wouldn’t you like to be like the proverbial onion, packed with layers of\ngreatness?\nThen practice your philosophy.",
    date: "July 29th",
    docId: "111.2",
    quote:
      " “The person who has practiced philosophy as a cure for the self becomes great of soul, filled with confidence, invincible—and greater as you draw near.”",
    title: "A CURE FOR THE SELF",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Think of all the things you can be grateful for today. That you are alive, that you live in a time\nprimarily of peace, that you have enough health and leisure to read this book. What of the little\nthings? The person who smiled at you, the woman who held the door open, that song you like on the radio,\nthe pleasant weather.\nGratitude is infectious. Its positivity is radiant.\nEven if today was your last day on earth—if you knew in advance that it was going to end in a few\nshort hours—would there still be plenty to be grateful for? How much better would your life be if you\nkicked off every day like that? If you let it carry through from morning to night and touch every part of\nyour life?",
    date: "December 29th",
    docId: "81.19",
    quote:
      " “In all things we should try to make ourselves be as grateful as possible. For gratitude is a good thing for ourselves, in a manner in which justice, commonly held to belong to others, is not. Gratitude pays itself back in large measure.”",
    title: "GIVE THANKS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Nelson Mandela was imprisoned for resistance to the brutal apartheid regime in South Africa for\ntwenty-seven years. For eighteen of those years, he had a bucket for a toilet, a hard cot in a small\ncell, and once a year he was allowed a single visitor—for thirty minutes. It was vicious treatment meant\nto isolate and break down the prisoners. And yet, in spite of that, Mandela became a figure of dignity\nwithin the prison.\nThough he was deprived of many things, he still found creative ways to assert his will. As one of his\nfellow prisoners, Neville Alexander, explained on Frontline, “He [Mandela] always made the point, if\nthey say you must run, insist on walking. If they say you must walk fast, insist on walking slowly. That was\nthe whole point. We are going to set the terms.” He pretended to jump rope and shadowboxed to stay in\nshape. He held his head higher than other prisoners, encouraged them when times got tough, and always\nretained his sense of self-assurance.\nThat self-assurance is yours to claim as well. No matter what happens today, no matter where you find\nyourself, shift to what lies within your reasoned choices. Ignore, as best you can, the emotions that pop up,\nwhich would be so easy to distract yourself with. Don’t get emotional—get focused.",
    date: "August 4th",
    docId: "3.22.13",
    quote:
      " “You must stop blaming God, and not blame any person. You must completely control your desire and shift your avoidance to what lies within your reasoned choice. You must no longer feel anger, resentment, envy, or regret.”",
    title: "NO BLAME, JUST FOCUS",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Lyndon Johnson’s college classmates used to tell an embarrassing story about him. Johnson apparently\nhad a big mouth and felt he had to constantly dominate and intimidate others. Yet his biographer,\nRobert Caro, makes it clear that when someone stood up to young Lyndon, he proved himself to be a\ncomplete coward. In one instance, during an argument over a poker game, instead of fighting, Johnson\nthrew himself on a bed and “began kicking his feet in the air with a frantic, windmilling motion . . . like a\ngirl.” He shouted, “If you hit me, I’ll kick you! If you hit me, I’ll kick you!”\nLater in his life, Johnson also worked extremely hard to avoid serving in World War II and lived it up\nin California while other soldiers fought and died abroad. He later claimed to be a war hero. It was one\nof his most shameful lies.\nWe do not need to disregard our physical safety or engage in wanton acts of violence to be brave. But\nnobody respects a coward. Nobody likes a shirker of duty. Nobody admires a person who puts too high a\nprice on their own comfort and needs.\nThat’s the irony of cowardice. It’s aimed at self-protection, but it creates shameful secrets. Selfpreservation is hardly worth it because of everything it costs in return.\nBe brave. Be dignified.",
    date: "December 11th",
    docId: "11.4b",
    quote:
      " “As Cicero says, we hate gladiators if they are quick to save their lives by any means; we favor them if they show contempt for their lives.”",
    title: "DIGNITY AND BRAVERY",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Watching other people succeed is one of the toughest things to do—especially if we are not doing\nwell ourselves. In our hunter-gatherer minds, we suspect that life is a zero-sum game—that for\nsomeone to have more means that we might end up with less.\nBut like all parts of philosophy, empathy and selflessness are a matter of practice. As Seneca\nobserved, it’s possible to learn to “rejoice in all their successes and be moved by their every failure.”\nThis is what a virtuous person does.\nThey teach themselves to actively cheer for other people—even in cases where that might come at\ntheir own expense—and to put aside jealousy and possessiveness. You can do that too.",
    date: "October 6th",
    docId: "109.15",
    quote:
      " “It’s in keeping with Nature to show our friends affection and to celebrate their advancement, as if it were our very own. For if we don’t do this, virtue, which is strengthened only by exercising our perceptions, will no longer endure in us.”",
    title: "LOOKING OUT FOR EACH OTHER",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "As we begin to make progress in our lives, we’ll encounter the limitations of the people around us.\nIt’s like a diet. When everyone is eating unhealthy, there is a kind of natural alignment. But if one\nperson starts eating healthy, suddenly there are opposing agendas. Now there’s an argument about where\nto go for dinner.\nJust as you must not abandon your new path simply because other people may have a problem with it,\nyou must not abandon those other folks either. Don’t simply write them off or leave them in the dust. Don’t\nget mad or fight with them. After all, they’re at the same place you were not long ago.",
    date: "July 17th",
    docId: "11.9",
    quote:
      " “As you move forward along the path of reason, people will stand in your way. They will never be able to keep you from doing what’s sound, so don’t let them knock out your goodwill for them. Keep a steady watch on both fronts, not only for well-based judgments and actions, but also for gentleness with those who would obstruct our path or create other difficulties. For getting angry is also a weakness, just as much as abandoning the task or surrendering under panic. For doing either is an equal desertion—the one by shrinking back and the other by estrangement from family and friend.”",
    title: "DON’T ABANDON OTHERS . . . OR YOURSELF",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The busier we get, the more we work and learn and read, the further we may drift. We get in a rhythm.\nWe’re making money, being creative, and we’re stimulated and busy. It seems like everything is going\nwell. But we drift further and further from philosophy.\nEventually this neglect will contribute to a problem—the stress builds up, our mind gets cloudy, we\nforget what’s important—and result in an injury of some kind. When that happens, it’s important that we\ntap the brakes—put aside all the momentum and the moment. Return to the regimen and practices that we\nknow are rooted in clarity, good judgment, good principles, and good health.\nStoicism is designed to be medicine for the soul. It relieves us of the vulnerabilities of modern life. It\nrestores us with the vigor we need to thrive in life. Check in with it today, and let it do its healing.",
    date: "January 31st",
    docId: "5.9",
    quote:
      " “Don’t return to philosophy as a task-master, but as patients seek out relief in a treatment of sore eyes, or a dressing for a burn, or from an ointment. Regarding it this way, you’ll obey reason without putting it on display and rest easy in its care.”",
    title: "PHILOSOPHY AS MEDICINE OF THE SOUL",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In a world that is in many ways becoming more and more unequal, there aren’t many truly equalitarian\nexperiences left. When Benjamin Franklin observed that “in this world nothing can be said to be\ncertain, except death and taxes,” he couldn’t have known how good some people would get at avoiding\ntheir taxes. But death? That’s still the one thing that everyone experiences.\nWe all face the same end. Whether you conquer the known world or shine the shoes of the people who\ndo, at the end death will be a radical equalizer—a lesson in abject humility. Shakespeare had Hamlet\ntrace out the logic in stark terms for both Alexander and Julius Caesar:\n“Imperious Caesar, dead and turn’d to clay,\nMight stop a hole to keep the wind away:\nO, that that earth, which kept the world in awe,\nShould patch a wall to expel the winter flaw!”\nThe next time you feel yourself getting high and mighty—or conversely, feeling low and inferior—just\nremember, we all end up the same way. In death, no one is better, no one is worse. All our stories have\nthe same finale.",
    date: "December 18th",
    docId: "6.24",
    quote:
      " “Both Alexander the Great and his mule-keeper were both brought to the same place by death— they were either received into the all-generative reason, or scattered among the atoms.”",
    title: "WHAT COMES TO US ALL",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Through the work of the psychologist Albert Ellis, Stoicism has reached millions of people through\nwhat’s known as cognitive-behavioral therapy (CBT). As a form of a therapy, CBT helps patients\nidentify destructive patterns in their thoughts and behavior so they can, over time, direct and influence\nthem in a more positive direction.\nOf course, Marcus Aurelius had no formal training in psychology, but his words here are as important\nas any doctor’s. He’s asking you to become an observer of your own thoughts and the actions those\nthoughts provoke. Where do they come from? What biases do they contain? Are they constructive or\ndestructive? Do they cause you to make mistakes or engage in behavior you later regret? Look for\npatterns; find where cause meets effect.\nOnly when this is done can negative behavior patterns be broken; only then can real life improvements\nbe made.",
    date: "April 16th",
    docId: "7.4",
    quote:
      " “Pay close attention in conversation to what is being said, and to what follows from any action. In the action, immediately look for the target, in words, listen closely to what’s being signaled.”",
    title: "OBSERVE CAUSE AND EFFECT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It is difficult even to conceive of what life must have been like for Marcus Aurelius—he wasn’t born\nemperor, nor did he obtain the position deliberately. It was simply thrust upon him. Nevertheless, he\nwas suddenly the richest man in the world, head of the most powerful army on earth, ruling over the\nlargest empire in history, considered a god among men.\nIt’s no wonder he wrote little messages like this one to remind himself not to spin off the planet.\nWithout them, he might have lost his sense of what was important—falling prey to the lies from all the\npeople who needed things from him. And here we are, whatever we happen to be doing, at risk of\nspinning off ourselves.\nWhen we experience success, we must make sure that it doesn’t change us—that we continue to\nmaintain our character despite the temptation not to. Reason must lead the way no matter what good\nfortune comes along.",
    date: "April 4th",
    docId: "6.30",
    quote:
      " “Make sure you’re not made ‘Emperor,’ avoid that imperial stain. It can happen to you, so keep yourself simple, good, pure, saintly, plain, a friend of justice, god-fearing, gracious, affectionate, and strong for your proper work. Fight to remain the person that philosophy wished to make you. Revere the gods, and look after each other. Life is short—the fruit of this life is a good character and acts for the common good.”",
    title: "DON’T LET THIS GO TO YOUR HEAD",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "You know that feeling you get when you haven’t been to the gym in a few days? A bit doughy.\nIrritable. Claustrophobic. Uncertain. Others get a similar feeling when they’ve been on vacation for\ntoo long or right after they first retire. The mind and the body are there to be used—they begin to turn on\nthemselves when not put to some productive end.\nIt’s sad to think that this kind of frustration is an everyday reality for a lot of people. They leave so\nmuch of their potential unfulfilled because they have jobs where they don’t really do much or because they\nhave too much time on their hands. Worse is when we try to push these feelings away by buying things,\ngoing out, fighting, creating drama—indulging in the empty calories of existence instead of finding the real\nnourishment.\nThe solution is simple and, thankfully, always right at hand. Get out there and work.",
    date: "May 29th",
    docId: "31.5",
    quote: " “Work nourishes noble minds.”",
    title: "WORK IS THERAPY",
  },
  {
    author: "—ZENO, QUOTED IN DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "Zeno is not claiming magic powers but simply that while his body can be victimized, philosophy\nprotects his mind—cultivated under his teacher, Stilpo—with an inner fortress whose gates can never\nbe broken from the outside, only surrendered.\nLook at Rubin “Hurricane” Carter, the boxer wrongly convicted of homicide who spent nearly twenty\nyears in prison. He would say, “I don’t acknowledge the existence of the prison. It doesn’t exist for me.”\nOf course, the prison literally existed, and he was physically inside it. But he refused to let his mind be\ncontained by it.\nThat’s a power that you have too. Hopefully you’ll never have to use this power in a situation of\nviolence or grave injustice; however, in the midst of any and every kind of adversity, it is there. No matter\nwhat’s happening to your body, no matter what the outside world inflicts on you, your mind can remain\nphilosophical. It’s still yours. It’s untouchable—and in a way, then, so are you.",
    date: "September 30th",
    docId: "7.1.24",
    quote:
      " “If you lay violent hands on me, you’ll have my body, but my mind will remain with Stilpo.”",
    title: "YOU CAN’T TOUCH ME",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "There’s an old proverb that money doesn’t change people, it just makes them more of who they are.\nRobert Caro has written that “power doesn’t corrupt, it reveals.” In some ways, prosperity—\nfinancial and personal—is the same way.\nIf your mind has developed a certain cast—the habit of panicking, in Seneca’s example—then it won’t\nmatter how good things get for you. You’re still primed for panic. Your mind will still find things to worry\nabout, and you’ll still be miserable. Perhaps more so even, because now you have more to lose.\nThis is why it’s foolish to hope for good fortune. If you were to hope for one thing, you could hope for\nthe strength of character that’s able to thrive in good fortune. Or better, work for that kind of character and\nconfidence. Consider every action and every thought—think of them as building blocks of your\nindestructible character. Then work to make each one strong and significant in its own right.",
    date: "September 27th",
    docId: "104.10b",
    quote:
      " “For even peace itself will supply more reason for worry. Not even safe circumstances will bring you confidence once your mind has been shocked—once it gets in the habit of blind panic, it can’t provide for its own safety. For it doesn’t really avoid danger, it just runs away. Yet we are exposed to greater danger with our backs turned.”",
    title: "WHAT WILL PROSPERITY REVEAL?",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Hesiod, the poet, said that “the best treasure is a sparing tongue.” Robert Greene considers it a law of\npower: Always Say Less Than Necessary.\nWe talk because we think it’s helping, whereas in reality it’s making things hard for us. If our spouse is\nventing, we want to tell them what they should do. In fact, all they actually want us to do is hear them. In\nother situations, the world is trying to give us feedback or input, but we try to talk ourselves out of the\nproblem—only to make it worse.\nSo today, will you be part of the problem or part of the solution? Will you hear the wisdom of the\nworld or drown it out with more noise?",
    date: "June 25th",
    docId: "13.3b",
    quote:
      " “This is why we say that nothing happens to the wise person contrary to their expectations.”",
    title: "THE WISE DON’T HAVE “PROBLEMS”",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Stoicism is not an evangelical religion. You’re not obligated to save anyone—there’s no risk of hell if\na soul remains in ignorance of the teachings of Epictetus or Marcus Aurelius.\nBut now that you’ve learned and studied a better path, you can be of service to others. You can share\nyour wisdom or insight with a friend or stranger—remembering that behavior is always a better example\nthan a lecture.\nEveryone deserves to benefit from “philosophy’s principles” as Seneca put it. If you see someone who\nis in need of help, or has asked for guidance, provide it. You owe them that much.",
    date: "October 16th",
    docId: "95.36–37",
    quote:
      " “Some people with exceptional minds quickly grasp virtue, or produce it within themselves. But other dim and lazy types, hindered by bad habits, must have their rusty souls constantly scrubbed down. . . . The weaker sorts will be helped and lifted from their bad opinions if we put them in the care of philosophy’s principles.”",
    title: "SPREAD THE WORD",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The single most important practice in Stoic philosophy is differentiating between what we can change\nand what we can’t. What we have influence over and what we do not. A flight is delayed because of\nweather—no amount of yelling at an airline representative will end a storm. No amount of wishing will\nmake you taller or shorter or born in a different country. No matter how hard you try, you can’t make\nsomeone like you. And on top of that, time spent hurling yourself at these immovable objects is time not\nspent on the things we can change.\nThe recovery community practices something called the Serenity Prayer: “God, grant me the serenity\nto accept the things I cannot change, the courage to change the things I can, and the wisdom to know the\ndifference.” Addicts cannot change the abuse suffered in childhood. They cannot undo the choices they\nhave made or the hurt they have caused. But they can change the future—through the power they have in\nthe present moment. As Epictetus said, they can control the choices they make right now.\nThe same is true for us today. If we can focus on making clear what parts of our day are within our\ncontrol and what parts are not, we will not only be happier, we will have a distinct advantage over other\npeople who fail to realize they are fighting an unwinnable battle.",
    date: "January 1st",
    docId: "2.5.4–5",
    quote:
      " “The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own . . .”",
    title: "CONTROL AND CHOICE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Take a look at some of the most powerful, rich, and famous people in the world. Ignore the trappings\nof their success and what they’re able to buy. Look instead at what they’re forced to trade in return—\nlook at what success has cost them.\nMostly? Freedom. Their work demands they wear a suit. Their success depends on attending certain\nparties, kissing up to people they don’t like. It will require—inevitably—realizing they are unable to say\nwhat they actually think. Worse, it demands that they become a different type of person or do bad things.\nSure, it might pay well—but they haven’t truly examined the transaction. As Seneca put it, “Slavery\nresides under marble and gold.” Too many successful people are prisoners in jails of their own making. Is\nthat what you want? Is that what you’re working hard toward? Let’s hope not.",
    date: "March 11th",
    docId: "4.1.128b–129a",
    quote:
      " “The unrestricted person, who has in hand what they will in all events, is free. But anyone who can be restricted, coerced, or pushed into something against what they will is a slave.”",
    title: "LIVING WITHOUT RESTRICTION",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Think of all the interests vying for a share of your wallet or for a second of your attention. Food\nscientists are engineering products to exploit your taste buds. Silicon Valley engineers are designing\napplications as addictive as gambling. The media is manufacturing stories to provoke outrage and anger.\nThese are just a small slice of the temptations and forces acting on us—distracting us and pulling us\naway from the things that truly matter. Marcus, thankfully, was not exposed to these extreme parts of our\nmodern culture. But he knew plenty of distracting sinkholes too: gossip, the endless call of work, as well\nas fear, suspicion, lust. Every human being is pulled by these internal and external forces that are\nincreasingly more powerful and harder to resist.\nPhilosophy is simply asking us to pay careful attention and to strive to be more than a pawn. As Viktor\nFrankl puts it in The Will to Meaning, “Man is pushed by drives but pulled by values.” These values and\ninner awareness prevent us from being puppets. Sure, paying attention requires work and awareness, but\nisn’t that better than being jerked about on a string?",
    date: "January 14th",
    docId: "12.19",
    quote:
      " “Understand at last that you have something in you more powerful and divine than what causes the bodily passions and pulls you like a mere puppet. What thoughts now occupy my mind? Is it not fear, suspicion, desire, or something like that?”",
    title: "CUT THE STRINGS THAT PULL YOUR MIND",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The world is unfair. The game is rigged. So-and-so has it out for you. Maybe these theories are true,\nbut practically speaking—for the right here and now—what good are they to you? That government\nreport or that sympathetic news article isn’t going to pay the bills or rehab your broken leg or find that\nbridge loan you need. Succumbing to the self-pity and “woe is me” narrative accomplishes nothing—\nnothing except sapping you of the energy and motivation you need to do something about your problem.\nWe have a choice: Do we focus on the ways we have been wronged, or do we use what we’ve been\ngiven and get to work? Will we wait for someone to save us, or will we listen to Marcus Aurelius’s\nempowering call to “get active in your own rescue—if you care for yourself at all—and do it while you\ncan.” That’s better than just blowing your own nose (which is a step forward in itself).",
    date: "June 5th",
    docId: "2.16.13",
    quote:
      " “We cry to God Almighty, how can we escape this agony? Fool, don’t you have hands? Or could it be God forgot to give you a pair? Sit and pray your nose doesn’t run! Or, rather just wipe your nose and stop seeking a scapegoat.”",
    title: "BLOW YOUR OWN NOSE",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "The Israeli general Herzl Halevi believes that philosophy is essential in his role as a leader and\nwarrior. “People used to tell me that business administration is for the practical life and philosophy\nis for the spirit,” he said. “Through the years I found it is exactly the opposite—I used philosophy much\nmore practically.” War and leadership offer an unending series of ethical decisions that require priorities,\nbalance, and clarity. That’s what philosophy helps with.\nPlato knew this when he imagined a utopia ruled by a philosopher king. “Either philosophers should\nbecome kings,” he said in The Republic, “or those now called kings should truly and sufficiently\nundertake philosophy.” Marcus Aurelius was quite literally that philosopher king.\nWhat does that have to do with you? There are fewer kings these days, but we’re all leaders in one\nway or another—of families, of companies, of a team, of an audience, of a group of friends, of ourselves.\nIt’s the study of philosophy that cultivates our reason and ethics so that we can do our job well. We can’t\njust wing it—too many people are counting on us to do it right.",
    date: "July 9th",
    docId: "8.33.32–34",
    quote:
      " “For I believe a good king is from the outset and by necessity a philosopher, and the philosopher is from the outset a kingly person.”",
    title: "THE PHILOSOPHER KING",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In 1997, a psychotherapist named Richard Carlson published a book called Don’t Sweat the Small\nStuff . . . and It’s All Small Stuff. It quickly became one of the fastest-selling books of all time and\nspent years on the bestseller lists, ultimately selling millions of copies in many languages.\nWhether you read the book or not, Carlson’s pithy articulation of this timeless idea is worth\nremembering. Even Cornelius Fronto, Marcus Aurelius’s rhetoric teacher, would have thought it a\nsuperior way of expressing the wisdom his student attempted in the quote above. They both say the same\nthing: don’t spend your time (the most valuable and least renewable of all your resources) on the things\nthat don’t matter. What about the things that don’t matter but you’re absolutely obligated to do? Well,\nspend as little time and worry on them as possible.\nIf you give things more time and energy than they deserve, they’re no longer lesser things. You’ve\nmade them important by the life you’ve spent on them. And sadly, you’ve made the important things—your\nfamily, your health, your true commitments—less so as a result of what you’ve stolen from them.",
    date: "August 22nd",
    docId: "4.32b",
    quote:
      " “It is essential for you to remember that the attention you give to any action should be in due proportion to its worth, for then you won’t tire and give up, if you aren’t busying yourself with lesser things beyond what should be allowed.”",
    title: "DON’T SWEAT THE SMALL STUFF",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In Plutarch’s Life of Theseus, he describes how the ship of Theseus, an Athenian hero, was preserved\nby the people of Athens in battle-ready condition for many centuries. Each time a board decayed, it\nwould be replaced until eventually every stick of wood in it had been replaced. Plutarch asks: Is it still\nthe ship of Theseus, or is it a new one?\nIn Japan, a famous Shinto shrine is rebuilt every twenty-three years. It’s gone through more than sixty\nof those cycles. Is it one shrine, 1,400 years old? Or sixty consecutive shrines? Even the U.S. Senate,\ngiven its staggered elections, could be said to have never been fully turned over. Is it the same body\nformed in the days of George Washington?\nOur understanding of what something is is just a snapshot—an ephemeral opinion. The universe is in a\nconstant state of change. Our nails grow and are cut and keep growing. New skin replaces dead skin. Old\nmemories are replaced by new memories. Are we still the same people? Are the people around us the\nsame? Nothing is exempt from this fluidity, not even the things we hold most sacred.",
    date: "November 9th",
    docId: "4.3.4b",
    quote: " “The universe is change. Life is opinion.”",
    title: "ALL IS FLUID",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Today, notice how often you look for more. That is, wanting the past to be more than what it was\n(different, better, still here, etc.) or wanting the future to unfold exactly as you expect (with hardly a\nthought as to how that might affect other people).\nWhen you do this, you’re neglecting the present moment. Talk about ungrateful! There’s a saying—\nattributed to Bil Keane, the cartoonist—worth remembering: “Yesterday’s the past, tomorrow’s the future,\nbut today is a gift. That’s why it’s called the present.” This present is in our possession—but it has an\nexpiration date, a quickly approaching one. If you enjoy all of it, it will be enough. It can last a whole\nlifetime.",
    date: "March 15th",
    docId: "2.14",
    quote:
      " “Were you to live three thousand years, or even a countless multiple of that, keep in mind that no one ever loses a life other than the one they are living, and no one ever lives a life other than the one they are losing. The longest and the shortest life, then, amount to the same, for the present moment lasts the same for all and is all anyone possesses. No one can lose either the past or the future, for how can someone be deprived of what’s not theirs?”",
    title: "THE PRESENT IS ALL WE POSSESS",
  },
  {
    author: "—SENECA",
    book: "THYESTES",
    commentary:
      "Recall the last time you said a really boneheaded thing, something that came back to bite you. Why did\nyou say it? Chances are you didn’t need to, but you thought doing so would make you look smart or\ncool or part of the group.\n“The more you say,” Robert Greene has written, “the more likely you are to say something foolish.”\nTo that we add: the more you say, the more likely you are to blow past opportunities, ignore feedback, and\ncause yourself suffering.\nThe inexperienced and fearful talk to reassure themselves. The ability to listen, to deliberately keep\nout of a conversation and subsist without its validity is rare. Silence is a way to build strength and selfsufficiency.",
    date: "August 5th",
    docId: "309",
    quote: " “Silence is a lesson learned from the many sufferings of life.”",
    title: "SILENCE IS STRENGTH",
  },
  {
    author: "—SENECA",
    book: "ON THE HAPPY LIFE",
    commentary:
      "The first person you meet today—passing acquaintance or friend—no matter the context—positive or\nnegative—is an opportunity for kindness. Or as different translators have taken this line from Seneca\nto mean, it is an opportunity for benefit. For both of you. You can seek to understand where they are\ncoming from. You can seek to understand who they are, what they need, and what forces or impulses might\nbe acting on them. And you can treat them well and be better off for it.\nThe same is true with the second person you encounter, and the third. Of course, there is no guarantee\nthat they will return the favor, but that’s not our concern. As always, we’re going to focus on what we\ncontrol: in this case, the ability to choose to respond with kindness.",
    date: "October 17th",
    docId: "24.2–3",
    quote:
      " “A benefit should be kept like a buried treasure, only to be dug up in necessity. . . . Nature bids us to do well by all. . . . Wherever there is a human being, we have an opportunity for kindness.”",
    title: "THE BENEFIT OF KINDNESS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "word can have multiple meanings. One usage can be harsh and another might be completely innocent.\nA\nThe same word can mean a cruel slur or a pile of sticks. In the same way, something said sarcastically\ndiffers drastically from something that was pointed and mean.\nThe interpretation of a remark or a word has an immense amount of power. It’s the difference between\na laugh and hurt feelings. The difference between a fight breaking out and two people connecting.\nThis is why it is so important to control the biases and lenses we bring to our interactions. When you\nhear or see something, which interpretation do you jump to? What is your default interpretation of\nsomeone else’s intentions?\nIf being upset or hurt is something you’d like to experience less often, then make sure your\ninterpretations of others’ words make that possible. Choose the right inference from someone’s actions or\nfrom external events, and it’s a lot more likely that you’ll have the right response.April 18th\nOPINIONS ARE LIKE . . .",
    date: "April 17th",
    docId: "4.7",
    quote:
      " “Do away with the opinion I am harmed, and the harm is cast away too. Do away with being harmed, and harm disappears.”",
    title: "NO HARM, NO FOUL",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "“From good people you’ll learn good, but if you mingle with the bad you’ll destroy such soul as\nyou had.”\n—MUSONIUS RUFUS, QUOTING THEOGNIS OF MEGARA, LECTURES, 11.53.21–22J",
    date: "March 9th",
    docId: "4.2.1; 4–5",
    quote:
      " “Above all, keep a close watch on this—that you are never so tied to your former acquaintances and friends that you are pulled down to their level. If you don’t, you’ll be ruined. . . . You must choose whether to be loved by these friends and remain the same person, or to become a better person at the cost of those friends . . . if you try to have it both ways you will neither make progress nor keep what you once had.”",
    title: "FIND THE RIGHT SCENE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "You deserve a vacation. You work hard. You sacrifice. You push yourself. It’s time for a break. Hop a\nplane, check into your hotel, and head to the beach—but tuck a book under your arm (and not a\ntrashy beach read). Make sure you enjoy your relaxation like a poet—not idly but actively, observing the\nworld around you, taking it all in, better understanding your place in the universe. Take a day off from\nwork every now and then, but not a day off from learning.\nMaybe your goal is to make enough money so that you can retire early. Good for you! But the purpose\nof retirement is not to live a life of indolence or to run out the clock, as easy as that might be to do. Rather,\nit’s to allow for the pursuit of your real calling now that a big distraction is out of the way. To sit around\nall day and do nothing? To watch endless amounts of television or simply travel from place to place so\nthat you might cross locations off a checklist? That is not life. It’s not freedom either.",
    date: "September 26th",
    docId: "82.4",
    quote: " “Leisure without study is death—a tomb for the living person.”",
    title: "WHAT TIME OFF IS FOR",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In most areas of life, the saying “Less is more” stands true. For instance, the writers we admire tend to\nbe masters of economy and brevity. What they leave out is just as important—sometimes more\nimportant—than what they leave in. There is a poem by Philip Levine titled “He Would Never Use One\nWord Where None Would Do.” And from Hamlet, the best of all—the retort from Queen Gertrude after a\nlong, rhetorical speech from Polonius: “More matter with less art,” she tells him. Get to the point!\nImagine the emperor of Rome, with his captive audience and unlimited power, telling himself not to be\na person of “too many words and too many deeds.” Let that be a reminder the next time you feel selfindulgent or a little full of yourself, the next time you feel like impressing people.",
    date: "April 13th",
    docId: "3.5",
    quote:
      " “Don’t act grudgingly, selfishly, without due diligence, or to be a contrarian. Don’t overdress your thought in fine language. Don’t be a person of too many words and too many deeds. . . . Be cheerful, not wanting outside help or the relief others might bring. A person needs to stand on their own, not be propped up.”",
    title: "LESS IS MORE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The first rule of holes, goes the adage, is that “if you find yourself in a hole, stop digging.” This might\nbe the most violated piece of commonsense wisdom in the world. Because what most of us do when\nsomething happens, goes wrong, or is inflicted on us is make it worse—first, by getting angry or feeling\naggrieved, and next, by flailing around before we have much in the way of a plan.\nToday, give yourself the most simple and doable of tasks: just don’t make stuff worse. Whatever\nhappens, don’t add angry or negative emotions to the equation. Don’t react for the sake of reacting. Leave\nit as it is. Stop digging. Then plan your way out.",
    date: "June 11th",
    docId: "11.18.8",
    quote:
      " “How much more harmful are the consequences of anger and grief than the circumstances that aroused them in us!”",
    title: "JUST DON’T MAKE THINGS WORSE",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "In one of his letters, Seneca tells a story about Alexander the Great. Apparently as Alexander was\nconquering the world, certain countries would offer him pieces of their territory in hopes that he’d\nleave them alone in exchange. Alexander would tell them, writes Seneca, that he hadn’t come all the way\nto Asia to accept whatever they would give him, but instead they were going to have to accept whatever\nhe chose to leave them.\nAccording to Seneca, we should treat philosophy the same way in our lives. Philosophy shouldn’t\nhave to accept what time or energy is left over from other occupations but instead we should graciously\nmake time for those other pursuits only once our study is finished.\nIf real self-improvement is what we’re after, why do we leave our reading until those few minutes\nbefore we shut off the lights and go to bed? Why do we block off eight to ten hours in the middle of the\nday to be at the office or to go to meetings but block out no time for thinking about the big questions? The\naverage person somehow manages to squeeze in twenty-eight hours of television per week—but ask them\nif they had time to study philosophy, and they will probably tell you they’re too busy.",
    date: "October 30th",
    docId: "3.5b",
    quote:
      " “Aren’t you ashamed to reserve for yourself only the remnants of your life and to dedicate to wisdom only that time can’t be directed to business?”",
    title: "WHO GETS THE LION’S SHARE?",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Consider the fugitives who willingly turn themselves in after years on the run. Why would they do\nthat? They were free, one step ahead of the law, but they gave up! Because the guilt and the stress of\nthe fugitive life eventually gets worse than the prospect of lost freedom—in fact, it was its own kind of\nprison.\nIt’s the same reason why, as a child, you might have confessed to a lie to completely unsuspecting\nparents. It’s the reason why one partner might voluntarily admit to a crushing infidelity—even though the\nother partner had no idea. “Why are you telling me this?!” the betrayed shouts as she walks out the door.\n“Because things have been going so well and I couldn’t take it anymore!”\nThere are immense costs of doing wrong, not only to society, but to the perpetrator. Look at the lives\nof most people who reject ethics and discipline, and the chaos and misery that so often follows. This\npunishment is almost always as bad or worse than whatever society metes out.\nThis is why so many petty criminals confess or voluntarily surrender. They don’t always stick to it, but\nat the lowest moment, they finally realize: this is no way to live. They want the peace of mind that comes\nwith doing right. And so do you.",
    date: "May 11th",
    docId: "105.7",
    quote:
      " “The greatest portion of peace of mind is doing nothing wrong. Those who lack self-control live disoriented and disturbed lives.”",
    title: "GUILT IS WORSE THAN JAIL",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "By seeing each day and each situation as a kind of training exercise, the stakes suddenly become a lot\nlower. The way you interpret your own mistakes and the mistakes of others is suddenly a lot more\ngenerous. It’s certainly a more resilient attitude than going around acting like the stakes of every encounter\nput the championship on the line.\nWhen you catch an elbow or an unfair blow today, shake off the pain and remind yourself: I’m\nlearning. My sparring partner is learning too. This is practice for both of us—that’s all. I know a bit\nmore about him or her, and from my reaction, they’re going to learn a little bit more about me too.",
    date: "April 26th",
    docId: "6.20",
    quote:
      " “When your sparring partner scratches or head-butts you, you don’t then make a show of it, or protest, or view him with suspicion or as plotting against you. And yet you keep an eye on him, not as an enemy or with suspicion, but with a healthy avoidance. You should act this way with all things in life. We should give a pass to many things with our fellow trainees. For, as I’ve said, it’s possible to avoid without suspicion or hate.”",
    title: "THINGS HAPPEN IN TRAINING",
  },
  {
    author: "—DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "You can buy a Plume Blanche diamond-encrusted sofa for close to two hundred thousand dollars. It’s\nalso possible to hire one person to kill another person for five hundred dollars. Remember that next\ntime you hear someone ramble on about how the market decides what things are worth. The market might\nbe rational . . . but the people who comprise it are not.\nDiogenes, who founded the Cynic school, emphasized the true worth (axia) of things, a theme that\npersisted in Stoicism and was strongly reflected in both Epictetus and Marcus. It’s easy to lose track.\nWhen the people around you dump a fortune into trinkets they can’t take with them when they die, it might\nseem like a good investment for you to make too.\nBut of course it isn’t. The good things in life cost what they cost. The unnecessary things are not worth\nit at any price. The key is being aware of the difference.",
    date: "March 27th",
    docId: "6.2.35b",
    quote:
      " “Diogenes of Sinope said we sell things of great value for things of very little, and vice versa.”",
    title: "PAY WHAT THINGS ARE WORTH",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The Stoics seek steadiness, stability, and tranquility—traits most of us aspire to but seem to\nexperience only fleetingly. How do they accomplish this elusive goal? How does one embody\neustatheia (the word Arrian used to describe this teaching of Epictetus)?\nWell, it’s not luck. It’s not by eliminating outside influences or running away to quiet and solitude.\nInstead, it’s about filtering the outside world through the straightener of our judgment. That’s what our\nreason can do—it can take the crooked, confusing, and overwhelming nature of external events and make\nthem orderly.\nHowever, if our judgments are crooked because we don’t use reason, then everything that follows will\nbe crooked, and we will lose our ability to steady ourselves in the chaos and rush of life. If you want to\nbe steady, if you want clarity, proper judgment is the best way.",
    date: "January 10th",
    docId: "1.29.1–3",
    quote:
      " “The essence of good is a certain kind of reasoned choice; just as the essence of evil is another kind. What about externals, then? They are only the raw material for our reasoned choice, which finds its own good or evil in working with them. How will it find the good? Not by marveling at the material! For if judgments about the material are straight that makes our choices good, but if those judgments are twisted, our choices turn bad.”",
    title: "IF YOU WANT TO BE STEADY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "There are two ways to be wealthy—to get everything you want or to want everything you have. Which\nis easier right here and right now? The same goes for freedom. If you chafe and fight and struggle for\nmore, you will never be free. If you could find and focus on the pockets of freedom you already have?\nWell, then you’d be free right here, right now.",
    date: "March 25th",
    docId: "4.1.175",
    quote:
      " “. . . freedom isn’t secured by filling up on your heart’s desire but by removing your desire.”",
    title: "WEALTH AND FREEDOM ARE FREE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "What is the more productive notion of good luck? One that is defined by totally random factors\noutside your control, or a matter of probability that can be increased—though not guaranteed—by\nthe right decisions and the right preparation? Obviously, the latter. This is why successful yet mysteriously\n“lucky” people seem to gravitate toward it.\nAccording to the wonderful site Quote Investigator, versions of this idea date back at least to the\nsixteenth century in the proverb “Diligence is the mother of good luck.” In the 1920s, Coleman Cox put a\nmodern spin on it by saying, “I am a great believer in luck. The harder I work, the more of it I seem to\nhave.” (That saying has been incorrectly attributed to Thomas Jefferson, who said nothing of the kind.)\nToday, we say, “Luck is where hard work meets opportunity.” Or is it typically flipped?\nToday, you can hope that good fortune and good luck magically come your way. Or you can prepare\nyourself to get lucky by focusing on doing the right thing at the right time—and, ironically, render luck\nmostly unnecessary in the process.",
    date: "May 24th",
    docId: "5.36",
    quote:
      " “You say, good fortune used to meet you at every corner. But the fortunate person is the one who gives themselves a good fortune. And good fortunes are a well-tuned soul, good impulses and good actions.”",
    title: "MAKING YOUR OWN GOOD FORTUNE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "To be rational today, we have to do just three things:\nFirst, we must look inward.\nNext, we must examine ourselves critically.\nFinally, we must make our own decisions—uninhibited by biases or popular notions.April 23rd\nTHE MIND IS ALL YOURS",
    date: "April 22nd",
    docId: "11.1–2",
    quote:
      " “These are the characteristics of the rational soul: self-awareness, self-examination, and selfdetermination. It reaps its own harvest. . . . It succeeds in its own purpose . . .”",
    title: "THE MARKS OF A RATIONAL PERSON",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "At first, this can seem like the opposite of everything you’ve been taught. Don’t we cultivate our minds\nand critical thinking skills precisely so we don’t simply accept things at face value? Yes, most of the\ntime. But sometimes this approach can be counterproductive.\nWhat a philosopher also has is the ability, as Nietzsche put it, “to stop courageously, at the surface”\nand see things in plain, objective form. Nothing more, nothing less. Yes, Stoics were “superficial,” he\nsaid, “out of profundity.” Today, while other people are getting carried away, that’s what you’re going to\npractice. A kind of straightforward pragmatism—seeing things as their initial impressions make them.",
    date: "August 9th",
    docId: "8.49",
    quote:
      " “Don’t tell yourself anything more than what the initial impressions report. It’s been reported to you that someone is speaking badly about you. This is the report—the report wasn’t that you’ve been harmed. I see that my son is sick—but not that his life is at risk. So always stay within your first impressions, and don’t add to them in your head—this way nothing can happen to you.”",
    title: "STICK WITH JUST THE FACTS",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "The famous journalist William Seabrook suffered from such debilitating alcoholism that in 1933 he\ncommitted himself to an insane asylum, which was then the only place to get treatment for addiction.\nIn his memoir, Asylum, he tells the story of the struggle to turn his life around inside the facility. At first,\nhe stuck to his addict way of thinking—and as a result, he was an outsider, constantly getting in trouble\nand rebelling against the staff. He made almost no progress and was on the verge of being asked to leave.\nThen one day this very quote from Epictetus—about everything having two handles—occurred to him.\n“I took hold now by the other handle,” he related later, “and carried on.” He actually began to have a\ngood time there. He focused on his recovery with real enthusiasm. “I suddenly found it wonderful,\nstrange, and beautiful, to be sober. . . . It was as if a veil, or scum, or film had been stripped from all\nthings visual and auditory.” It’s an experience shared by many addicts when they finally stop doing things\ntheir way and actually open themselves to the perspectives and wisdom and lessons of those who have\ngone before them.\nThere is no promise that trying things this way—of grabbing the different handle—will have such\nmomentous results for you. But why continue to lift by the handle that hasn’t worked?",
    date: "June 14th",
    docId: "43",
    quote:
      " “Every event has two handles—one by which it can be carried, and one by which it can’t. If your brother does you wrong, don’t grab it by his wronging, because this is the handle incapable of lifting it. Instead, use the other—that he is your brother, that you were raised together, and then you will have hold of the handle that carries.”",
    title: "TRY THE OTHER HANDLE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In the midst of the breakdown of the Roman Republic, during the civil war between Pompey and\nCaesar, Pompey made the decision to give control of the military fleet to Cato. It was a massive honor\nand hugely powerful position. But then a few days later, responding to the protests of his jealous inner\ncircle, Pompey reversed his decision and took the command away.\nIt could have been seen as an enormous public humiliation—to be given a promotion and then have it\ntaken away. The record shows that Cato’s reaction was basically nothing. He responded to the honor and\nthe dishonor the same way: with indifference and acceptance. He certainly didn’t let it affect his support\nfor the cause. In fact, after the snub, he worked to rally the soldiers before battle with inspirational\nspeeches—the very men who should have been under his command.\nThat’s what Marcus is saying. Do not take the slights of the day personally—or the exciting rewards\nand recognitions either, especially when duty has assigned you an important cause. Trivial details like the\nrise and fall of your position say nothing about you as a person. Only your behavior—as Cato’s did—\nwill.",
    date: "July 23rd",
    docId: "8.33",
    quote: " “Receive without pride, let go without attachment.”",
    title: "RECEIVE HONORS AND SLIGHTS ",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "We throw around the word “joy” casually. “I’m overjoyed at the news.” “She’s a joy to be around.”\n“It’s a joyous occasion.” But none of those examples really touches on true joy. They are closer to\n“cheer” than anything else. Cheerfulness is surface level.\nJoy, to Seneca, is a deep state of being. It is what we feel inside us and has little to do with smiles or\nlaughing. So when people say that the Stoics are dour or depressive, they’re really missing the point. Who\ncares if someone is bubbly when times are good? What kind of accomplishment is that?\nBut can you be fully content with your life, can you bravely face what life has in store from one day to\nthe next, can you bounce back from every kind of adversity without losing a step, can you be a source of\nstrength and inspiration to others around you? That’s Stoic joy—the joy that comes from purpose,\nexcellence, and duty. It’s a serious thing—far more serious than a smile or a chipper voice.",
    date: "July 30th",
    docId: "23.4",
    quote:
      " “Trust me, real joy is a serious thing. Do you think someone can, in the charming expression, blithely dismiss death with an easy disposition? Or swing open the door to poverty, keep pleasures in check, or meditate on the endurance of suffering? The one who is comfortable with turning these thoughts over is truly full of joy, but hardly cheerful. It’s exactly such a joy that I would wish for you to possess, for it will never run dry once you’ve laid claim to its source.”",
    title: "STOIC JOY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Opinions. Everyone’s got one.\nThink about all the opinions you have: about whether today’s weather is convenient, about what\nliberals and conservatives believe, about whether so-and-so’s remark is rude or not, about whether\nyou’re successful (or not), and on and on. We’re constantly looking at the world around us and putting our\nopinion on top of it. And our opinion is often shaped by dogma (religious or cultural), entitlements,\nexpectations, and in some cases, ignorance.\nNo wonder we feel upset and angry so often! But what if we let these opinions go? Let’s try weeding\n(ekkoptein; cutting or knocking out) them out of our lives so that things simply are. Not good or bad, not\ncolored with opinion or judgment. Just are.",
    date: "April 18th",
    docId: "3.3.18b–19",
    quote:
      " “What is bad luck? Opinion. What are conflict, dispute, blame, accusation, irreverence, and frivolity? They are all opinions, and more than that, they are opinions that lie outside of our own reasoned choice, presented as if they were good or evil. Let a person shift their opinions only to what belongs in the field of their own choice, and I guarantee that person will have peace of mind, whatever is happening around them.”",
    title: "OPINIONS ARE LIKE . . .",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "In the mid-twentieth century, there was an Indian Jesuit priest named Anthony de Mello. Born in\nBombay when it was still under British control, de Mello was an amalgam of many different cultures\nand perspectives: East, West; he even trained as a psychotherapist. It’s interesting when one sees timeless\nwisdom develop across schools, across epochs and ideas. Here is a quote from de Mello’s book, The\nWay to Love, that sounds almost exactly like Epictetus:\n“The cause of my irritation is not in this person but in me.”\nRemember, each individual has a choice. You are always the one in control. The cause of irritation—\nor our notion that something is bad—that comes from us, from our labels or our expectations. Just as\neasily, we can change those labels; we can change our entitlement and decide to accept and love what’s\nhappening around us. And this wisdom has been repeated and independently discovered in every century\nand every country since time began.",
    date: "March 19th",
    docId: "3.10.18",
    quote:
      " “For there are two rules to keep at the ready—that there is nothing good or bad outside my own reasoned choice, and that we shouldn’t try to lead events but to follow them.”",
    title: "TIMELESS WISDOM",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The image of the Zen philosopher is the monk up in the green, quiet hills, or in a beautiful temple on\nsome rocky cliff. The Stoics are the antithesis of this idea. Instead, they are the man in the\nmarketplace, the senator in the Forum, the brave wife waiting for her soldier to return from battle, the\nsculptor busy in her studio. Still, the Stoic is equally at peace.\nEpictetus is reminding you that serenity and stability are results of your choices and judgment, not your\nenvironment. If you seek to avoid all disruptions to tranquility—other people, external events, stress—\nyou will never be successful. Your problems will follow you wherever you run and hide. But if you seek\nto avoid the harmful and disruptive judgments that cause those problems, then you will be stable and\nsteady wherever you happen to be.",
    date: "January 11th",
    docId: "2.1.12",
    quote:
      " “For if a person shifts their caution to their own reasoned choices and the acts of those choices, they will at the same time gain the will to avoid, but if they shift their caution away from their own reasoned choices to things not under their control, seeking to avoid what is controlled by others, they will then be agitated, fearful, and unstable.”",
    title: "IF YOU WANT TO BE UNSTEADY",
  },
  {
    author: "—DIOGENES LAERTIUS",
    book: "LIVES OF EMINENT PHILOSOPHERS",
    commentary:
      "Why do the wise have so few problems compared with the rest of us? There are a few simple\nreasons.\nFirst, the wise seem to manage expectations as much as possible. They rarely expect what isn’t\npossible in the first place.\nSecond, the wise always consider both the best and worst case scenarios. They don’t just think about\nwhat they wish to happen, but also what very realistically can happen if things were to suddenly turn.\nThird, the wise act with a reverse clause—meaning that they not only consider what might go wrong,\nbut they are prepared for that to be exactly what they want to happen—it is an opportunity for excellence\nand virtue.\nAnd if you follow it today, you too will find that nothing surprises you or happens contrary to your\nexpectations.",
    date: "June 15th",
    docId: "7.1.23",
    quote:
      " “To the youngster talking nonsense Zeno said, ‘The reason why we have two ears and only one mouth is so we might listen more and talk less.’”",
    title: "LISTENING ACCOMPLISHES MORE THAN SPEAKING",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "This is classic Stoic thinking, as you’ve gathered by now. An event itself is objective. How we\ndescribe it—that it was unfair, or it’s a great calamity, or that they did it on purpose—is on us.\nMalcolm X (then Malcolm Little) went into prison a criminal, but he left as an educated, religious, and\nmotivated man who would help in the struggle for civil rights. Did he suffer an evil? Or did he choose to\nmake his experience a positive one?\nAcceptance isn’t passive. It’s the first step in an active process toward self-improvement.",
    date: "November 14th",
    docId: "3.8.5b–6a",
    quote:
      " “He was sent to prison. But the observation ‘he has suffered evil,’ is an addition coming from you.”",
    title: "YOU CHOOSE THE OUTCOME",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "“How much better to heal than seek revenge from injury. Vengeance wastes a lot of time and\nexposes you to many more injuries than the first that sparked it. Anger always outlasts hurt.\nBest to take the opposite course. Would anyone think it normal to return a kick to a mule or a\nbite to a dog?”\n—SENECA, ON ANGER, 3.27.2L",
    date: "October 13th",
    docId: "6.6",
    quote: " “The best way to avenge yourself is to not be like that.”",
    title: "REVENGE IS A DISH BEST NOT SERVED",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Surely, Epictetus isn’t saying that peace, leisure, travel, and learning are bad, is he? Thankfully, no.\nBut ceaseless, ardent desire—if not bad in and of itself—is fraught with potential complications.\nWhat we desire makes us vulnerable. Whether it’s an opportunity to travel the world or to be the\npresident or for five minutes of peace and quiet, when we pine for something, when we hope against\nhope, we set ourselves up for disappointment. Because fate can always intervene and then we’ll likely\nlose our self-control in response.\nAs Diogenes, the famous Cynic, once said, “It is the privilege of the gods to want nothing, and of\ngodlike men to want little.” To want nothing makes one invincible—because nothing lies outside your\ncontrol. This doesn’t just go for not wanting the easy-to-criticize things like wealth or fame—the kinds of\nfolly that we see illustrated in some of our most classic plays and fables. That green light that Gatsby\nstrove for can represent seemingly good things too, like love or a noble cause. But it can wreck someone\nall the same.\nWhen it comes to your goals and the things you strive for, ask yourself: Am I in control of them or\nthey in control of me?",
    date: "February 21st",
    docId: "4.4.1–2; 15",
    quote:
      " “Remember that it’s not only the desire for wealth and position that debases and subjugates us, but also the desire for peace, leisure, travel, and learning. It doesn’t matter what the external thing is, the value we place on it subjugates us to another . . . where our heart is set, there our impediment lies.”",
    title: "WISH NOT, WANT NOT",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "One can’t read Marcus Aurelius and Seneca and not be struck by the difference between these two\nradically different personalities. Each had his own strengths and weaknesses. Which would you\nrather have entrusted with the immense responsibility of an empire? Probably Marcus. But who would\nyou rather be as a person? Probably Seneca.\nOne of the reasons is that Seneca seems to have had what we would now refer to as work/life balance.\nWhereas Marcus can read as though he’s worn down and tired, Seneca always feels energetic, fresh,\nrobust. His philosophy of rest and relaxation—intermixed with his rigorous study and other Stoic rituals\n—probably had a lot to do with it.\nThe mind is a muscle, and like the rest, it can be strained, overworked, even injured. Our physical\nhealth is also worn down by overcommitment, a lack of rest, and bad habits. Remember the tall tale about\nJohn Henry—the man who challenged the machine? He died of exhaustion at the end. Don’t forget that.\nToday, you may face things that try your patience, require considerable focus or clarity, or demand\ncreative breakthroughs. Life is a long haul—it will mean many such moments. Are you going to be able to\nhandle them if you’ve burned the candle at both ends? If you’ve been abusing and overworking your\nbody?",
    date: "December 25th",
    docId: "17.5",
    quote:
      " “The mind must be given relaxation—it will rise improved and sharper after a good break. Just as rich fields must not be forced—for they will quickly lose their fertility if never given a break —so constant work on the anvil will fracture the force of the mind. But it regains its powers if it is set free and relaxed for a while. Constant work gives rise to a certain kind of dullness and feebleness in the rational soul.”",
    title: "DON’T BURN THE CANDLE AT BOTH ENDS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "President James Garfield was a great man—raised in humble circumstances, self-educated, and\neventually a Civil War hero—whose presidency was cut short by an assassin’s bullet. In his brief\ntime in office, he faced a bitterly divided country as well as a bitterly and internally divided Republican\nParty. During one fight, which challenged the very authority of his office, he stood firm, telling an adviser:\n“Of course I deprecate war, but if it is brought to my door the bringer will find me at home.”\nThat’s what Seneca is saying here. We’d be crazy to want to face difficulty in life. But we’d be\nequally crazy to pretend that it isn’t going to happen. Which is why when it knocks on our door—as it\nvery well may this morning—let’s make sure we’re prepared to answer. Not the way we are when a\nsurprise visitor comes late at night, but the way we are when we’re waiting for an important guest:\ndressed, in the right head space, ready to go.",
    date: "March 20th",
    docId: "67.4",
    quote:
      " “I may wish to be free from torture, but if the time comes for me to endure it, I’ll wish to bear it courageously with bravery and honor. Wouldn’t I prefer not to fall into war? But if war does befall me, I’ll wish to carry nobly the wounds, starvation, and other necessities of war. Neither am I so crazy as to desire illness, but if I must suffer illness, I’ll wish to do nothing rash or dishonorable. The point is not to wish for these adversities, but for the virtue that makes adversities bearable.”",
    title: "READY AND AT HOME",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The events that will transpire today are the same as the things that have always occurred. People living\nand dying, animals living and dying, clouds rolling in and rolling out, air sucked in and sucked out, as\nit has for aeons. This moment right now, to paraphrase Emerson, is a quotation of the moments that have\ncome before and will come ever after.\nThis idea is expressed nowhere more beautifully than in the Christianity hymn Gloria Patri. “As it\nwas in the beginning, and now, and always, and to the ages of ages.” This thought is not supposed to be\ndepressing or uplifting. It’s just a fact. However, it can have a calming, centering effect. No need to get\nexcited, no need to wait on pins and needles. If you haven’t seen this before, someone else has. That can\nbe a relief.",
    date: "November 20th",
    docId: "6.37",
    quote:
      " “If you’ve seen the present, you’ve seen all things, from time immemorial into all of eternity. For everything that happens is related and the same.”",
    title: "BEHOLD, NOW AS EVER",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Self-improvement is a noble pursuit. Most people don’t even bother. But among those who do, it’s\npossible for vanity and superficiality to corrupt this process. Do you want six-pack abs because you\nare challenging yourself and committing to a difficult goal? Or is it because you want to impress people\nwith your shirt off? Are you running that marathon because you want to test your limits or because you’re\nrunning away from your problems at home?\nOur will shouldn’t be directed at becoming the person who is in perfect shape or who can speak\nmultiple languages but who doesn’t have a second for other people. What’s the point of winning at sports\nbut losing in the effort to be a good husband, wife, father, mother, son, or daughter? Let’s not confuse\ngetting better at stuff with being a better person. One is a much bigger priority than the other.",
    date: "October 22nd",
    docId: "7.52",
    quote:
      " “So someone’s good at taking down an opponent, but that doesn’t make them more communityminded, or modest, or well-prepared for any circumstance, or more tolerant of the faults of others.”",
    title: "IT’S EASY TO GET BETTER. BUT BETTER AT WHAT?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "It is sad to consider how much time many people spend in the course of a day doing things they “have”\nto do—not necessary obligations like work or family, but the obligations we needlessly accept out of\nvanity or ignorance. Consider the actions we take in order to impress other people or the lengths we’ll go\nto fulfill urges or sate desires we don’t even question. In one of his famous letters, Seneca observes how\noften powerful people are slaves to their money, to their positions, to their mistresses, even—as was\nlegal in Rome—to their slaves. “No slavery is more disgraceful,” he quipped, “than one which is selfimposed.”\nWe see this slavery all the time—a codependent person who can’t help but clean up after a\ndysfunctional friend, a boss who micromanages employees and sweats every penny. The countless causes,\nevents, and get-togethers we’re too busy to attend but agree to anyway.\nTake an inventory of your obligations from time to time. How many of these are self-imposed? How\nmany of them are truly necessary? Are you as free as you think?",
    date: "March 4th",
    docId: "4.1.1–3a",
    quote:
      " “The person is free who lives as they wish, neither compelled, nor hindered, nor limited—whose choices aren’t hampered, whose desires succeed, and who don’t fall into what repels them. Who wishes to live in deception—tripped up, mistaken, undisciplined, complaining, in a rut? No one. These are base people who don’t live as they wish; and so, no base person is free.”",
    title: "AWARENESS IS FREEDOM",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Dancing is a popular metaphor for life. One must be limber and agile and go along with the music.\nOne must feel and follow and flow with their partner. But anyone who has tried to do something\ndifficult, where there is competition or an adversary, knows that the dancing metaphor is insufficient.\nNobody ever gets up on stage and tries to tackle a dancer. The dancer never gets choked out by a rival.\nFor a wrestler, on the other hand, adversity and the unexpected are part and parcel of what they do.\nTheir sport is a battle, just like life. They are fighting an opponent as well as their own limitations,\nemotions, and training.\nLife, like wrestling, requires more than graceful movement. We have to undergo hard training and\ncultivate an indomitable will to prevail. Philosophy is the steel against which we sharpen that will and\nstrengthen that resolve.",
    date: "September 20th",
    docId: "7.61",
    quote:
      " “The art of living is more like wrestling than dancing, because an artful life requires being prepared to meet and withstand sudden and unexpected attacks.”",
    title: "LIFE ISN’T A DANCE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Do you have a vacation coming up? Are you looking forward to the weekend so you can have some\npeace and quiet? Maybe, you think, after things settle down or after I get this over with. But how\noften has that ever actually worked?\nThe Zen meditation teacher Jon Kabat-Zinn coined a famous expression: “Wherever you go, there you\nare.” We can find a retreat at any time by looking inward. We can sit with our eyes closed and feel our\nbreath go in and out. We can turn on some music and tune out the world. We can turn off technology or shut\noff those rampant thoughts in our head. That will provide us peace. Nothing else.",
    date: "March 21st",
    docId: "4.3.1",
    quote:
      " “People seek retreats for themselves in the country, by the sea, or in the mountains. You are very much in the habit of yearning for those same things. But this is entirely the trait of a base person, when you can, at any moment, find such a retreat in yourself. For nowhere can you find a more peaceful and less busy retreat than in your own soul—especially if on close inspection it is filled with ease, which I say is nothing more than being well-ordered. Treat yourself often to this retreat and be renewed.”",
    title: "THE BEST RETREAT IS IN HERE, NOT OUT THERE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Stoics were not monks. They didn’t retreat to the sanctuary of a monastery or a temple. They were\npoliticians, businessmen, soldiers, artists. They practiced their philosophy amid the busyness of life\n—just as you are attempting to do.\nThe key to accomplishing that is to ruthlessly expunge the inessential from our lives. What vanity\nobligates us to do, what greed signs us up for, what ill discipline adds to our plate, what a lack of courage\nprevents us from saying no to. All of this we must cut, cut, cut.",
    date: "August 19th",
    docId: "4.24",
    quote:
      " “It is said that if you would have peace of mind, busy yourself with little. But wouldn’t a better saying be do what you must and as required of a rational being created for public life? For this brings not only the peace of mind of doing few things, but the greater peace of doing them well. Since the vast majority of our words and actions are unnecessary, corralling them will create an abundance of leisure and tranquility. As a result, we shouldn’t forget at each moment to ask, is this one of the unnecessary things? But we must corral not only unnecessary actions but unnecessary thoughts, too, so needless acts don’t tag along after them.”",
    title: "CORRALLING THE UNNECESSARY",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "Late in his life, after a surgery, Theodore Roosevelt was told he might be confined to a wheelchair for\nthe remainder of his days. With his trademark ebullience, he responded, “All right! I can work that\nway too!”\nThis is how we can respond to even the most disabling turns of fate—by working within whatever\nroom is left. Nothing can prevent us from learning. In fact, difficult situations are often opportunities for\ntheir own kinds of learning, even if they’re not the kinds of learning we’d have preferred.\nMusonius Rufus, for his part, was exiled three times (twice by Nero and once by Vespasian), but being\nforcibly expelled from his life and his home didn’t impinge on his study of philosophy. In his way, he\nresponded by saying “All right! I can work that way too.” And he did, managing to squeeze in some time\nbetween exiles with a student named Epictetus and thus helping to bring Stoicism to the world.",
    date: "August 2nd",
    docId: "9.37.30–31",
    quote:
      " “Indeed, how could exile be an obstacle to a person’s own cultivation, or to attaining virtue when no one has ever been cut off from learning or practicing what is needed by exile?”",
    title: "WE CAN WORK ANY WAY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Winifred Gallagher, in her book Rapt, quotes David Meyer, a cognitive scientist at the University of\nMichigan: “Einstein didn’t invent the theory of relativity while he was multitasking at the Swiss\npatent office.” It came after, when he really had time to focus and study. Attention matters—and in an era\nin which our attention is being fought for by every new app, website, article, book, tweet, and post, its\nvalue has only gone up.\nPart of what Epictetus is saying here is that attention is a habit, and that letting your attention slip and\nwander builds bad habits and enables mistakes.\nYou’ll never complete all your tasks if you allow yourself to be distracted with every tiny interruption.\nYour attention is one of your most critical resources. Don’t squander it!",
    date: "April 21st",
    docId: "4.12.1; 19",
    quote:
      " “When you let your attention slide for a bit, don’t think you will get back a grip on it whenever you wish—instead, bear in mind that because of today’s mistake everything that follows will be necessarily worse. . . . Is it possible to be free from error? Not by any means, but it is possible to be a person always stretching to avoid error. For we must be content to at least escape a few mistakes by never letting our attention slide.”",
    title: "DON’T LET YOUR ATTENTION SLIDE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The dysfunctional job that stresses you out, a contentious relationship, life in the spotlight. Stoicism,\nbecause it helps us manage and think through our emotional reactions, can make these kinds of\nsituations easier to bear. It can help you manage and mitigate the triggers that seem to be so constantly\ntripped.\nBut here’s a question: Why are you subjecting yourself to this? Is this really the environment you were\nmade for? To be provoked by nasty emails and an endless parade of workplace problems? Our adrenal\nglands can handle only so much before they become exhausted. Shouldn’t you preserve them for life-anddeath situations?\nSo yes, use Stoicism to manage these difficulties. But don’t forget to ask: Is this really the life I want?\nEvery time you get upset, a little bit of life leaves the body. Are these really the things on which you want\nto spend that priceless resource? Don’t be afraid to make a change—a big one.",
    date: "February 12th",
    docId: "4.3.6b–8",
    quote:
      " “Keep constant guard over your perceptions, for it is no small thing you are protecting, but your respect, trustworthiness and steadiness, peace of mind, freedom from pain and fear, in a word your freedom. For what would you sell these things?”",
    title: "PROTECT YOUR PEACE OF MIND",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Seneca, repeating Heraclitus, writes that “we mortals are lighted and extinguished.” The light of\nreason suffuses the universe. Whether the wick of your lamp is being lit for the first time, after a long\nperiod of darkness, or even right before the proverbial big sleep, it makes no difference.\nHere is where you are right now, and it’s as good a place as any to let virtue shine and continue to\nshine for as long as you exist.",
    date: "October 1st",
    docId: "12.15",
    quote:
      " “Does the light of a lamp shine and keep its glow until its fuel is spent? Why shouldn’t your truth, justice, and self-control shine until you are extinguished?”",
    title: "LET VIRTUE SHINE BRIGHT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "An archer is highly unlikely to hit a target she did not aim for. The same goes for you, whatever your\ntarget. You are certain to miss the target if you don’t bother to draw back and fire. Our perceptions\nand principles guide us in the selection of what we want—but ultimately our actions determine whether\nwe get there or not.\nSo yes, spend some time—real, uninterrupted time—thinking about what’s important to you, what your\npriorities are. Then, work toward that and forsake all the others. It’s not enough to wish and hope. One\nmust act—and act right.",
    date: "May 2nd",
    docId: "3.23.1–2a",
    quote:
      " “First tell yourself what kind of person you want to be, then do what you have to do. For in nearly every pursuit we see this to be the case. Those in athletic pursuit first choose the sport they want, and then do that work.”",
    title: "BE THE PERSON YOU WANT TO BE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Here we have another contemptuous expression, this time from Seneca, who, given his reputation for\nopulence, probably enjoyed a nice drink from time to time. His point will probably rattle anyone for\nwhom success and adulthood has turned them into a wine snob (though the logic can be applied just as\neasily to foodies, techies, audiophiles, and the like).\nAs fun and exciting and pleasurable as these pleasures are, it’s worth putting them in their place. You\ndon’t get a prize at the end of your life for having consumed more, worked more, spent more, collected\nmore, or learned more about the various vintages than everyone else. You are just a conduit, a vessel that\ntemporarily held or interacted with these fancy items.\nIf you find yourself lusting over them, this meditation might help reduce their luster just a smidge.",
    date: "December 24th",
    docId: "77.16",
    quote:
      " “You know what wine and liqueur tastes like. It makes no difference whether a hundred or a thousand bottles pass through your bladder—you are nothing more than a filter.”",
    title: "MEANINGLESS . . . LIKE A FINE WINE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Of all the Stoics, Epictetus is the closest one to a true teacher. He had a school. He hosted classes. In\nfact, his wisdom is passed down to us through a student who took really good lecture notes. One of\nthe things that frustrated Epictetus about philosophy students—and has frustrated all college professors\nsince time began—is how students claim to want to be taught but really secretly believe they already\nknow everything.\nThe reality is that we’re all guilty of thinking we know it all, and we’d all learn more if we could set\nthat attitude aside. As smart or successful as we may be, there is always someone who is smarter, more\nsuccessful, and wiser than us. Emerson put it well: “Every man I meet is my master in some point, and in\nthat I learn of him.”\nIf you want to learn, if you want to improve your life, seeking out teachers, philosophers, and great\nbooks is a good start. But this approach will only be effective if you’re humble and ready to let go of\nopinions you already have.",
    date: "April 11th",
    docId: "2.17.1",
    quote:
      " “Throw out your conceited opinions, for it is impossible for a person to begin to learn what he thinks he already knows.”",
    title: "IF YOU WANT TO LEARN, BE HUMBLE",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "The monk dresses in his robes. A priest puts on his collar. A banker wears an expensive suit and\ncarries a briefcase. A Stoic has no uniform and resembles no stereotype. They are not identifiable by\nlook or by sight or by sound.\nThe only way to recognize them? By their character.",
    date: "May 1st",
    docId: "16.75.15–16",
    quote:
      " “For philosophy doesn’t consist in outward display, but in taking heed to what is needed and being mindful of it.”",
    title: "MAKE CHARACTER YOUR LOUDEST STATEMENT",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "“Live each day as if it were your last” is a cliché. Plenty say it, few actually do it. How reasonable\nwould that be anyway? Surely Seneca isn’t saying to forsake laws and considerations—to find\nsome orgy to join because the world is ending.\nA better analogy would be a soldier about to leave on deployment. Not knowing whether they’ll return\nor not, what do they do?\nThey get their affairs in order. They handle their business. They tell their children or their family that\nthey love them. They don’t have time for quarreling or petty matters. And then in the morning they are\nready to go—hoping to come back in one piece but prepared for the possibility that they might not.\nLet us live today that same way.",
    date: "December 1st",
    docId: "101.7b–8a",
    quote:
      " “Let us prepare our minds as if we’d come to the very end of life. Let us postpone nothing. Let us balance life’s books each day. . . . The one who puts the finishing touches on their life each day is never short of time.”",
    title: "PRETEND TODAY IS THE END",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Alexandria, the city in Egypt, still bears the name of its founder, Alexander the Great, some 2,300\nyears after he set foot there. How cool would it feel to have a city named after you for so many\ncenturies? To know that people are still saying your name?\nHere’s a thought: it wouldn’t be cool. Because, like Alexander, you’ll be dead. You’ll have no idea\nwhether your name lasted down through the centuries. No one gets to enjoy their own legacy—by\ndefinition.\nWorse, think of all the horrible things Alexander did to achieve what he did. He fought pointless wars.\nHe had a terrible temper—even killing his best friend in a drunken fight. He was ruthless and a slave to\nhis ambition. Is he really so admirable?\nInstead of wasting even a second considering the opinions of future people—people who are not even\nborn yet—focus every bit of yourself on being the best person you can be in the present moment. On doing\nthe right thing, right now. The distant future is irrelevant. Be good and noble and impressive now—while\nit still matters.",
    date: "October 21st",
    docId: "6.18",
    quote:
      " “Such behavior! People don’t want to praise their contemporaries whose lives they actually share, but hold great expectations for the praise of future generations—people they haven’t met or ever will! This is akin to being upset that past generations didn’t praise you.”",
    title: "HEROES, HERE AND NOW",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In the year 64, during the reign of Nero, a fire tore through the city of Rome. The French city of Lyons\nsent a large sum of money to aid the victims. The next year the citizens of Lyons were suddenly struck\nby a tragic fire of their own, prompting Nero to send an equal sum to its victims. As Seneca wrote about\nthe event to a friend in one of his letters, he must have been struck by the poetry—one city helping another,\nonly to be struck by similar disaster not long after.\nHow often does that happen to us? We comfort a friend during a breakup, only to be surprised when\nour own relationship ends. We must prepare in our minds for the possibility of extreme reversals of fate.\nThe next time you make a donation to charity, don’t just think about the good turn you’re doing, but take a\nmoment to consider that one day you may need to receive charity yourself.\nAs far as we know, Seneca truly lived these words. Just a year or so after writing this letter, he was\nfalsely accused of plotting against Nero. The price? Seneca was sentenced to commit suicide. As the\nhistorian Tacitus relates the scene, Seneca’s closest friends wept and protested the verdict. “Where,”\nSeneca asked them repeatedly, “are your maxims of philosophy, or the preparations of so many years’\nstudy against evils to come? Who knew not Nero’s cruelty?” That is: he knew it could happen to him too,\nand so he was prepared for it.",
    date: "September 24th",
    docId: "91.3a–4",
    quote:
      " “Being unexpected adds to the weight of a disaster, and being a surprise has never failed to increase a person’s pain. For that reason, nothing should ever be unexpected by us. Our minds should be sent out in advance to all things and we shouldn’t just consider the normal course of things, but what could actually happen. For is there anything in life that Fortune won’t knock off its high horse if it pleases her?”",
    title: "IT COULD HAPPEN TO YOU",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Cato the Younger had enough money to dress in fine clothing. Yet he often walked around Rome\nbarefoot, indifferent to assumptions people made about him as he passed. He could have indulged in\nthe finest food. He chose instead to eat simple fare. Whether it was raining or intensely hot, he went\nbareheaded by choice.\nWhy not indulge in some easy relief? Because Cato was training his soul to be strong and resilient.\nSpecifically, he was learning indifference: an attitude of “let come what may” that would serve him well\nin the trenches with the army, in the Forum and the Senate, and in his life as a father and statesman.\nHis training prepared him for any conditions, any kind of luck. If we undergo our own training and\npreparations, we might find ourselves similarly strengthened.",
    date: "September 1st",
    docId: "98.2b",
    quote:
      " “The rational soul is stronger than any kind of fortune—from its own share it guides its affairs here or there, and is itself the cause of a happy or miserable life.”",
    title: "A STRONG SOUL IS BETTER THAN GOOD LUCK",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "Today there will be endless interruptions: phone calls, emails, visitors, unexpected events. Booker T.\nWashington observed that “the number of people who stand ready to consume one’s time, to no\npurpose, is almost countless.”\nA philosopher, on the other hand, knows that their default state should be one of reflection and inner\nawareness. This is why they so diligently protect their personal space and thoughts from the intrusions of\nthe world. They know that a few minutes of contemplation are worth more than any meeting or report.\nThey also know how little time we’re actually given in life—and how quickly our stores can be depleted.\nSeneca reminds us that while we might be good at protecting our physical property, we are far too lax\nat enforcing our mental boundaries. Property can be regained; there is quite a bit of it out there—some of\nit still untouched by man. But time? Time is our most irreplaceable asset—we cannot buy more of it. We\ncan only strive to waste as little as possible.",
    date: "December 9th",
    docId: "3.1–2",
    quote:
      " “Were all the geniuses of history to focus on this single theme, they could never fully express their bafflement at the darkness of the human mind. No person would give up even an inch of their estate, and the slightest dispute with a neighbor can mean hell to pay; yet we easily let others encroach on our lives—worse, we often pave the way for those who will take it over. No person hands out their money to passersby, but to how many do each of us hand out our lives! We’re tight-fisted with property and money, yet think too little of wasting time, the one thing about which we should all be the toughest misers.”",
    title: "SPENDTHRIFTS OF TIME",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "“Character,” Joan Didion would write in one of her best essays, “the willingness to accept\nresponsibility for one’s own life—is the source from which self-respect springs.”\nMarcus is urging us not to waste time complaining about what we haven’t got or how things have\nworked out. We have to quit monkeying around and be the owners of our own lives. Character can be\ndeveloped, and when it is, self-respect will ensue. But that means starting and getting serious about it. Not\nlater, not after certain questions have been answered or distractions dealt with, but now. Right now.\nTaking responsibility is the first step.\nTo be without this character is the worst of all fates. As Didion put it in “On Self-Respect,” “To live\nwithout self-respect is to lie awake some night, beyond the reach of warm milk, the phenobarbital, and the\nsleeping hand on the coverlet, counting up the sins of commission and omission, the trusts betrayed, the\npromises subtly broken, the gifts irrevocably wasted through sloth or cowardice or carelessness.”\nYou’re so much better than that.",
    date: "July 8th",
    docId: "9.37",
    quote:
      " “Enough of this miserable, whining life. Stop monkeying around! Why are you troubled? What’s new here? What’s so confounding? The one responsible? Take a good look. Or just the matter itself? Then look at that. There’s nothing else to look at. And as far as the gods go, by now you could try being more straightforward and kind. It’s the same, whether you’ve examined these things for a hundred years, or only three.”",
    title: "STOP MONKEYING AROUND",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "“Rivers,” Publilius Syrus reminds us with an epigram, “are easiest to cross at their source.” That’s\nwhat Seneca means too. The raging waters and deadly currents of bad habits, ill discipline,\nchaos, and dysfunction—somewhere they began as no more than just a slight trickle. Somewhere they are\na placid lake or pond, even a bubbling underground spring.\nWhich would you rather do—nearly drown in a dangerous crossing in a few weeks or cross now\nwhile it’s still easy? It’s up to you.",
    date: "June 9th",
    docId: "106.2b–3a",
    quote:
      " “There is no vice which lacks a defense, none that at the outset isn’t modest and easily intervened —but after this the trouble spreads widely. If you allow it to get started you won’t be able to control when it stops. Every emotion is at first weak. Later it rouses itself and gathers strength as it moves along—it’s easier to slow it down than to supplant it.”",
    title: "SOLVE PROBLEMS EARLY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "How quickly we can disregard our own feelings about something and adopt someone else’s. We think\na shirt looks good at the store but will view it with shame and scorn if our spouse or a coworker\nmakes an offhand remark. We can be immensely happy with our own lives—until we find out that\nsomeone we don’t even like has more. Or worse and more precariously, we don’t feel good about our\naccomplishments or talents until some third party validates them.\nLike most Stoic exercises, this one attempts to teach us that although we control our own opinions, we\ndon’t control what other people think—about us least of all. For this reason, putting ourselves at the\nmercy of those opinions and trying to gain the approval of others are a dangerous endeavor.\nDon’t spend much time thinking about what other people think. Think about what you think. Think\ninstead about the results, about the impact, about whether it is the right thing to do.",
    date: "May 26th",
    docId: "12.4",
    quote:
      " “I’m constantly amazed by how easily we love ourselves above all others, yet we put more stock in the opinions of others than in our own estimation of self. . . . How much credence we give to the opinions our peers have of us and how little to our very own!”",
    title: "STOP CARING WHAT PEOPLE THINK",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There is a beautiful dialogue called “Icaromenippus, an Aerial Expedition” by the poet Lucian in\nwhich the narrator is given the ability to fly and sees the world from above. Turning his eyes\nearthward, he sees how comically small even the richest people, the biggest estates, and entire empires\nlook from above. All their battles and concerns were made petty in perspective.\nIn ancient times, this exercise was only theoretical—the highest anyone could get was the top of a\nmountain or a building a few stories tall. But as technology has progressed, humans have been able to\nactually take that bird’s-eye view—and greater.\nEdgar Mitchell, an astronaut, was one of the first people to see the earth from outer space. As he later\nrecounted:\n“In outer space you develop an instant global consciousness, a people orientation, an intense\ndissatisfaction with the state of the world, and a compulsion to do something about it. From out\nthere on the moon, international politics look so petty. You want to grab a politician by the scruff\nof the neck and drag him a quarter of a million miles out and say, ‘Look at that, you son of a\nbitch.’”\nMany a problem can be solved with the perspective of Plato’s view. Use it.",
    date: "June 2nd",
    docId: "7.48",
    quote:
      " “How beautifully Plato put it. Whenever you want to talk about people, it’s best to take a bird’seye view and see everything all at once—of gatherings, armies, farms, weddings and divorces, births and deaths, noisy courtrooms or silent spaces, every foreign people, holidays, memorials, markets—all blended together and arranged in a pairing of opposites.”",
    title: "PLATO’S VIEW",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There are some stunningly beautiful turns of phrase in Marcus’s Meditations—a surprising treat\nconsidering the intended audience (just himself). In one passage, he praises the “charm and allure” of\nnature’s process, the “stalks of ripe grain bending low, the frowning brow of the lion, the foam dripping\nfrom the boar’s mouth.” We should thank private rhetoric teacher Marcus Cornelius Fronto for the\nimagery in these vivid passages. Fronto, widely considered to be Rome’s best orator besides Cicero, was\nchosen by Marcus’s adopted father to teach Marcus to think and write and speak.\nMore than just pretty phrases, they gave him—and now us—a powerful perspective on ordinary or\nseemingly unbeautiful events. It takes an artist’s eye to see that the end of life is not unlike a ripe fruit\nfalling from its tree. It takes a poet to notice the way “baking bread splits in places and those cracks,\nwhile not intended in the baker’s art, catch our eye and serve to stir our appetite” and find a metaphor in\nthem.\nThere is clarity (and joy) in seeing what others can’t see, in finding grace and harmony in places\nothers overlook. Isn’t that far better than seeing the world as some dark place?",
    date: "January 18th",
    docId: "4.48.2",
    quote:
      " “Pass through this brief patch of time in harmony with nature, and come to your final resting place gracefully, just as a ripened olive might drop, praising the earth that nourished it and grateful to the tree that gave it growth.”",
    title: "SEE THE WORLD LIKE A POET AND AN ARTIST",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Obstacles are a part of life—things happen, stuff gets in our way, situations go awry. But nothing can\nstop the Stoic mind when it’s operating properly, because in every course of action, it has retained\n“a reverse clause.”\nWhat’s that? It’s a backup option. If a friend betrays us, our reverse clause is to learn from how this\nhappened and how to forgive this person’s mistake. If we’re thrown in prison, our reverse clause is that\nwe can refuse to be broken by this change of events and try to be of service to our fellow prisoners. When\na technical glitch erases our work, our reverse clause is that we can start fresh and do it better this time.\nOur progress can be impeded or disrupted, but the mind can always be changed—it retains the power to\nredirect the path.\nPart of this is remembering the usual course of things—Murphy’s Law states that “if anything can go\nwrong, it will.” So we keep this reverse clause handy because we know we’re probably going to have to\nuse it. No one can thwart that.",
    date: "June 1st",
    docId: "8.41",
    quote:
      " “Indeed, no one can thwart the purposes of your mind—for they can’t be touched by fire, steel, tyranny, slander, or anything.”",
    title: "ALWAYS HAVE A MENTAL REVERSE CLAUSE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Part of the reason we fight against the things that happen is that we’re so focused on our plan that we\nforget that there might be a bigger plan we don’t know about. Is it not the case that plenty of times\nsomething we thought was a disaster turned out to be, with the passage of time, a lucky break? We also\nforget that we’re not the only people who matter and that our loss might be someone else’s gain.\nThis sense of being wronged is a simple awareness problem. We need to remember that all things are\nguided by reason—but that it is a vast and universal reason that we cannot always see. That the surprise\nhurricane was the result of a butterfly flapping its wings a hemisphere away or that misfortune we have\nexperienced is simply the prelude to a pleasant and enviable future.",
    date: "March 13th",
    docId: "3.17.1",
    quote:
      " “Whenever you find yourself blaming providence, turn it around in your mind and you will see that what has happened is in keeping with reason.”",
    title: "ONE DAY IT WILL ALL MAKE SENSE",
  },
  {
    author: "—SENECA",
    book: "ON PROVIDENCE",
    commentary:
      "Most people who have gone through difficult periods in their life come to later wear those\nexperiences as badges of honor. “Those were the days,” they might say, even though now they live\nin much better circumstances. “To be young and hungry again,” another might say wistfully. “It was the\nbest thing that ever happened to me,” or “I wouldn’t change a thing about it.” As tough as those periods\nwere, they were ultimately formative experiences. They made those people who they are.\nThere’s another benefit of so-called misfortune. Having experienced and survived it, we walk away\nwith a better understanding of our own capacity and inner strength. Passing a trial by fire is empowering\nbecause you know that in the future you can survive similar adversity. “What does not kill me makes me\nstronger,” Nietzsche said.\nSo today if things look like they might take a bad turn or your luck might change, why worry? This\nmight be one of those formative experiences you will be grateful for later.",
    date: "September 4th",
    docId: "4.3",
    quote:
      " “I judge you unfortunate because you have never lived through misfortune. You have passed through life without an opponent—no one can ever know what you are capable of, not even you.”",
    title: "HOW CAN YOU KNOW WHETHER YOU’VE NEVER BEEN TESTED?",
  },
  {
    author: "—SENECA",
    book: "THYESTES",
    commentary:
      "In the modern world, our interactions with tyranny are a bit more voluntary than they were in ancient\ntimes. We put up with our controlling boss, though we could probably get a different job if we wanted.\nWe change how we dress or refrain from saying what we actually think? Because we want to fit in with\nsome cool group. We put up with cruel critics or customers? Because we want their approval. In these\ncases, their power exists because of our wants. You change that, and you’re free.\nThe late fashion photographer Bill Cunningham occasionally declined to invoice magazines for his\nwork. When a young upstart asked him why that was, Cunningham’s response was epic: “If you don’t take\nmoney, they can’t tell you what to do, kid.”\nRemember: taking the money, wanting the money—proverbially or literally—makes you a servant to\nthe people who have it. Indifference to it, as Seneca put it, turns the highest power into no power, at least\nas far as your life is concerned.",
    date: "April 28th",
    docId: "440",
    quote:
      " “Tantalus: The highest power is— Thyestes: No power, if you desire nothing.”",
    title: "WANTS MAKE YOU A SERVANT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Why did you pick up this book? Why pick up any book? Not to seem smarter, not to pass time on the\nplane, not to hear what you want to hear—there are plenty of easier choices than reading.\nNo, you picked up this book because you are learning how to live. Because you want to be freer, fear\nless, and achieve a state of peace. Education—reading and meditating on the wisdom of great minds—is\nnot to be done for its own sake. It has a purpose.\nRemember that imperative on the days you start to feel distracted, when watching television or having\na snack seems like a better use of your time than reading or studying philosophy. Knowledge—selfknowledge in particular—is freedom.",
    date: "January 2nd",
    docId: "2.1.21–23a",
    quote:
      " “What is the fruit of these teachings? Only the most beautiful and proper harvest of the truly educated—tranquility, fearlessness, and freedom. We should not trust the masses who say only the free can be educated, but rather the lovers of wisdom who say that only the educated are free.”",
    title: "EDUCATION IS FREEDOM",
  },
  {
    author: "—DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "Self-awareness is the ability to objectively evaluate the self. It’s the ability to question our own\ninstincts, patterns, and assumptions. Oiêsis, self-deception or arrogant and unchallenged opinion,\nrequires that we hold all our opinions up to hard scrutiny; even our eyes deceive us.\nOn the one hand, that’s alarming. I can’t even trust my own senses?! Sure, you could think about it that\nway. Or you could take it another way: because our senses are often wrong, our emotions overly alarmed,\nour projections overly optimistic, we’re better off not rushing into conclusions about anything. We can\ntake a beat with everything we do and become aware of everything that’s going on so we can make the\nright decision.",
    date: "March 7th",
    docId: "9.7",
    quote:
      " “Heraclitus called self-deception an awful disease and eyesight a lying sense.”",
    title: "DON’T TRUST THE SENSES",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In a letter to his older brother Novatus, Seneca describes a beneficial exercise he borrowed from\nanother prominent philosopher. At the end of each day he would ask himself variations of the following\nquestions: What bad habit did I curb today? How am I better? Were my actions just? How can I\nimprove?\nAt the beginning or end of each day, the Stoic sits down with his journal and reviews: what he did,\nwhat he thought, what could be improved. It’s for this reason that Marcus Aurelius’s Meditations is a\nsomewhat inscrutable book—it was for personal clarity and not public benefit. Writing down Stoic\nexercises was and is also a form of practicing them, just as repeating a prayer or hymn might be.\nKeep your own journal, whether it’s saved on a computer or in a little notebook. Take time to\nconsciously recall the events of the previous day. Be unflinching in your assessments. Notice what\ncontributed to your happiness and what detracted from it. Write down what you’d like to work on or\nquotes that you like. By making the effort to record such thoughts, you’re less likely to forget them. An\nadded bonus: you’ll have a running tally to track your progress too.",
    date: "January 22nd",
    docId: "83.2",
    quote:
      " “I will keep constant watch over myself and—most usefully—will put each day up for review. For this is what makes us evil—that none of us looks back upon our own lives. We reflect upon only that which we are about to do. And yet our plans for the future descend from the past.”",
    title: "THE DAY IN REVIEW",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The Stoics give us a marvelous concept: the Inner Citadel. It is this fortress, they believed, that\nprotects our soul. Though we might be physically vulnerable, though we might be at the mercy of fate\nin many ways, our inner domain is impenetrable. As Marcus Aurelius put it (repeatedly, in fact), “stuff\ncannot touch the soul.”\nBut history teaches us that impenetrable fortresses can still be breached, if betrayed from the inside.\nThe citizens inside the walls—if they fall prey to fear or greed or avarice—can open the gates and let the\nenemy in. This is what many of us do when we lose our nerve and give in to fear.\nYou’ve been granted a strong fortress. Don’t betray it.",
    date: "September 13th",
    docId: "4.1.85–86; 87a",
    quote:
      " “No, it is events that give rise to fear—when another has power over them or can prevent them, that person becomes able to inspire fear. How is the fortress destroyed? Not by iron or fire, but by judgments . . . here is where we must begin, and it is from this front that we must seize the fortress and throw out the tyrants.”",
    title: "PROTECTING OUR INNER FORTRESS FROM FEAR",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Here is how to guarantee you have a good day: do good things.\nAny other source of joy is outside your control or is nonrenewable. But this one is all you, all the\ntime, and unending. It is the ultimate form of self-reliance.",
    date: "May 7th",
    docId: "1.29.4",
    quote:
      " “God laid down this law, saying: if you want some good, get it from yourself.”",
    title: "HOW TO HAVE A GOOD DAY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "On tough days we might say, “My work is overwhelming,” or “My boss is really frustrating.” If only\nwe could understand that this is impossible. Someone can’t frustrate you, work can’t overwhelm\nyou—these are external objects, and they have no access to your mind. Those emotions you feel, as real\nas they are, come from the inside, not the outside.\nThe Stoics use the word hypolêpsis, which means “taking up”—of perceptions, thoughts, and\njudgments by our mind. What we assume, what we willingly generate in our mind, that’s on us. We can’t\nblame other people for making us feel stressed or frustrated any more than we can blame them for our\njealousy. The cause is within us. They’re just the target.",
    date: "March 18th",
    docId: "9.13",
    quote:
      " “Today I escaped from the crush of circumstances, or better put, I threw them out, for the crush wasn’t from outside me but in my own assumptions.”",
    title: "IMPOSSIBLE WITHOUT YOUR CONSENT",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "You don’t have to do the right thing. You always have the option to be selfish, rude, awful,\nshortsighted, pedantic, evil, or stupid. In fact, sometimes there are incentives to break bad.\nCertainly, not every criminal gets caught.\nBut how does this line of thinking usually work out for people? What’s that life like?\nYou don’t have to do the right thing, just as you don’t have to do your duty. You get to. You want to.",
    date: "July 22nd",
    docId: "66.16b",
    quote:
      " “Nothing is noble if it’s done unwillingly or under compulsion. Every noble deed is voluntary.”",
    title: "NO ONE HAS A GUN TO YOUR HEAD",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The conservationist Daniel O’Brien has said that he doesn’t “own” his several-thousand-acre buffalo\nranch in South Dakota, he just lives there while the bank lets him make mortgage payments on it. It’s\na joke about the economic realities of ranching, but it also hints at the idea that land doesn’t belong to one\nindividual, that it will far outlast us and our descendants. Marcus Aurelius used to say that we don’t own\nanything and that even our lives are held in trust.\nWe may claw and fight and work to own things, but those things can be taken away in a second. The\nsame goes for other things we like to think are “ours” but are equally precarious: our status, our physical\nhealth or strength, our relationships. How can these really be ours if something other than us—fate, bad\nluck, death, and so on—can dispossess us of them without notice?\nSo what do we own? Just our lives—and not for long.",
    date: "December 4th",
    docId: "3.24.3",
    quote:
      " “Anything that can be prevented, taken away, or coerced is not a person’s own—but those things that can’t be blocked are their own.”",
    title: "YOU DON’T OWN THAT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Today, as things happen and you find yourself wondering what they all mean—as you find yourself\ncontemplating various decisions, remember: the right thing to do always comes from our reasoned\nchoice. Not whether something is rewarded. Not whether something will succeed, but whether it is the\nright choice.\nEpictetus’s dictum helps us cut through all this with clarity and confidence. Is something good or bad?\nIs this right or wrong?\nIgnore everything else. Focus only on your choices.",
    date: "May 8th",
    docId: "2.16.1",
    quote:
      " “Where is Good? In our reasoned choices. Where is Evil? In our reasoned choices. Where is that which is neither Good nor Evil? In the things outside of our own reasoned choice.”",
    title: "GOOD AND EVIL? LOOK AT YOUR CHOICES",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "What are the chances that the busiest person you know is actually the most productive? We tend to\nassociate busyness with goodness and believe that spending many hours at work should be\nrewarded.\nInstead, evaluate what you are doing, why you are doing it, and where accomplishing it will take you.\nIf you don’t have a good answer, then stop.",
    date: "May 30th",
    docId: "4.4.41; 43",
    quote:
      " “I can’t call a person a hard worker just because I hear they read and write, even if working at it all night. Until I know what a person is working for, I can’t deem them industrious. . . . I can if the end they work for is their own ruling principle, having it be and remain in constant harmony with Nature.”",
    title: "WORKING HARD OR HARDLY WORKING?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "How often do we begin some project certain we know exactly how it will go? How often do we meet\npeople and think we know exactly who and what they are? And how often are these assumptions\nproved to be completely and utterly wrong?\nThis is why we must fight our biases and preconceptions: because they are a liability. Ask yourself:\nWhat haven’t I considered? Why is this thing the way it is? Am I part of the problem here or the\nsolution? Could I be wrong here? Be doubly careful to honor what you do not know, and then set that\nagainst the knowledge you actually have.\nRemember, if there is one core teaching at the heart of this philosophy, it’s that we’re not as smart and\nas wise as we’d like to think we are. If we ever do want to become wise, it comes from the questioning\nand from humility—not, as many would like to think, from certainty, mistrust, and arrogance.",
    date: "April 7th",
    docId: "3.14.8",
    quote:
      " “There are two things that must be rooted out in human beings—arrogant opinion and mistrust. Arrogant opinion expects that there is nothing further needed, and mistrust assumes that under the torrent of circumstance there can be no happiness.”",
    title: "EXPECT TO CHANGE YOUR OPINIONS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There is a maxim that Navy SEALs pass from officer to officer, man to man. In the midst of chaos,\neven in the fog of war, their battle-tested advice is this: “Calm is contagious.”\nEspecially when that calm is coming from the man or woman in charge. If the men begin to lose their\nwits, if the group is unsure of what to do next, it’s the leader’s job to do one thing: instill calm—not by\nforce but by example.\nThat’s who you want to be, whatever your line of work: the casual, relaxed person in every situation\nwho tells everyone else to take a breath and not to worry. Because you’ve got this. Don’t be the agitator,\nthe paranoid, the worrier, or the irrational. Be the calm, not the liability.\nIt will catch on.",
    date: "June 20th",
    docId: "11.11",
    quote:
      " “If then it’s not that the things you pursue or avoid are coming at you, but rather that you in a sense are seeking them out, at least try to keep your judgment of them steady, and they too will remain calm and you won’t be seen chasing after or fleeing from them.”",
    title: "CALM IS CONTAGIOUS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There’s that feeling we get when something happens: It’s all over now. All is lost. What follows are\ncomplaints and pity and misery—the impotent struggle against something that’s already occurred.\nWhy bother? We have no idea what the future holds. We have no idea what’s coming up around the\nbend. It could be more problems, or this could be the darkness before the dawn.\nIf we’re Stoic, there is one thing we can be sure of: whatever happens, we’re going to be OK.",
    date: "November 29th",
    docId: "7.43",
    quote: " “Don’t lament this and don’t get agitated.”",
    title: "YOU’RE GOING TO BE OK",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Here we have the emperor, the most powerful man in the world, quoting in his diary the wisdom of a\nformer slave (and from what we know, Marcus might have had direct notes from Epictetus’s lectures\nvia one of his former students). That wisdom was ultimately about surrender and serving the common\ngood—about the limits of our power and the importance of checking our impulses—something every\nperson in authority needs to hear.\nPower and powerlessness seem so rarely to enter the same orbit—but when they do it can change the\nworld. Think about President Abraham Lincoln meeting with, corresponding with, and learning from\nFrederick Douglass, another former slave of considerable wisdom and insight.\nIn any case, all those men lived by the principles expressed here: that in our lives—whether we’re\nexperiencing great power or powerlessness—it’s critical to leave room for what may happen and keep\nthe common good and the actual worth of things front and center. And, above all, be willing to learn from\nanyone and everyone, regardless of their station in life.",
    date: "April 19th",
    docId: "11.37",
    quote:
      " “Epictetus says we must discover the missing art of assent and pay special attention to the sphere of our impulses—that they are subject to reservation, to the common good, and that they are in proportion to actual worth.”",
    title: "OUR SPHERE OF IMPULSES",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "No one knows how long they have to live, but sadly, we can be sure of one thing: we’ll waste far too\nmuch of life. Waste it sitting around, waste it chasing the wrong things, waste it by refusing to take\nthe time to ask ourselves what’s actually important to us. Far too often, we’re like the overconfident\nacademics that Petrarch criticized in his classic essay on ignorance—the types who “fritter away their\npowers incessantly in caring for things outside of them and seek themselves there.” Yet they have no idea\nthis is what they’re doing.\nSo today, if you find yourself rushed or uttering the words “I just don’t have enough time,” stop and\ntake a second. Is this actually true? Or have you just committed to a lot of unnecessary things? Are you\nactually being efficient, or have you assumed a great deal of waste into your life? The average American\nspends something like forty hours a year in traffic. That’s months over the course of a life. And for\n“traffic,” you can substitute so many activities—from fighting with others to watching television to\ndaydreaming.\nYour life is plenty long—just use it properly.",
    date: "December 26th",
    docId: "1.3–4a",
    quote:
      " “It’s not at all that we have too short a time to live, but that we squander a great deal of it. Life is long enough, and it’s given in sufficient measure to do many great things if we spend it well. But when it’s poured down the drain of luxury and neglect, when it’s employed to no good end, we’re finally driven to see that it has passed by before we even recognized it passing. And so it is—we don’t receive a short life, we make it so.”",
    title: "LIFE IS LONG—IF YOU KNOW HOW TO USE IT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Contemporary notions of beauty are ridiculous. Our standards for what’s attractive are incredibly unStoic in that we prize and extol things people have almost no control over—high cheekbones,\ncomplexion, height, piercing eyes.\nIs it really beautiful to win the genetic lottery? Or should beauty be contingent on the choices, actions,\nand attributes we develop? An even keel, a sense of justice, a commitment to duty. These are beautiful\ntraits—and they go much deeper than appearances.\nToday, you can choose to be without prejudice, to act with justice, to keep an even keel, to be in\ncontrol of yourself—even when that means dedication and sacrifice. If that’s not beautiful, what is?",
    date: "May 6th",
    docId: "3.1.6b–9",
    quote:
      " “Then what makes a beautiful human being? Isn’t it the presence of human excellence? Young friend, if you wish to be beautiful, then work diligently at human excellence. And what is that? Observe those whom you praise without prejudice. The just or the unjust? The just. The eventempered or the undisciplined? The even-tempered. The self-controlled or the uncontrolled? The self-controlled. In making yourself that kind of person, you will become beautiful—but to the extent you ignore these qualities, you’ll be ugly, even if you use every trick in the book to appear beautiful.”",
    title: "RIGHTEOUSNESS IS BEAUTIFUL",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Remember, the proper direction of philosophy—of all the things we’re doing here—is focused\ninward. To make ourselves better and to leave other people to that task for themselves and their own\njourney. Our faults are in our control, and so we turn to philosophy to help scrape them off like barnacles\nfrom the hull of a ship. Other people’s faults? Not so much. That’s for them to do.\nLeave other people to their faults. Nothing in Stoic philosophy empowers you to judge them—only to\naccept them. Especially when we have so many of our own.",
    date: "November 17th",
    docId: "103.4b–5a",
    quote:
      " “When philosophy is wielded with arrogance and stubbornly, it is the cause for the ruin of many. Let philosophy scrape off your own faults, rather than be a way to rail against the faults of others.”",
    title: "JUDGE NOT, LEST . . .",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "How much harder is it to do the right thing when you’re surrounded by people with low standards?\nHow much harder is it to be positive and empathetic inside the negativity bubble of television\nchatter? How much harder is it to focus on your own issues when you’re distracted with other people’s\ndrama and conflict?\nWe’ll inevitably be exposed to these influences at some point, no matter how much we try to avoid\nthem. But when we are, there is nothing that says we have to allow those influences to penetrate our\nminds. We have the ability to put our guard up and decide what we actually allow in. Uninvited guests\nmight arrive at your home, but you don’t have to ask them to stay for dinner. You don’t have to let them\ninto your mind.",
    date: "April 2nd",
    docId: "10.9",
    quote:
      " “Drama, combat, terror, numbness, and subservience—every day these things wipe out your sacred principles, whenever your mind entertains them uncritically or lets them slip in.”",
    title: "BE WARY OF WHAT YOU LET IN",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "Sometimes our professional commitments can become an end unto themselves. A politician might\njustify the neglect of his family for his office, or a writer might believe her “genius” excuses\nantisocial or selfish behavior. Anyone with some perspective can see that, in fact, the politician is really\njust in love with fame, and the writer enjoys being condescending and feeling superior. Workaholics\nalways make excuses for their selfishness.\nWhile these attitudes can lead to impressive accomplishments, their cost is rarely justified. The ability\nto work hard and long is admirable. But you are a human being, not a human doing. Seneca points out that\nwe’re not animals. “Is it really so pleasant to die in harness?” he asked. Aleksandr Solzhenitsyn put it\nbetter: “Work is what horses die of. Everybody should know that.”",
    date: "July 25th",
    docId: "20",
    quote:
      " “When you see someone often flashing their rank or position, or someone whose name is often bandied about in public, don’t be envious; such things are bought at the expense of life. . . . Some die on the first rungs of the ladder of success, others before they can reach the top, and the few that make it to the top of their ambition through a thousand indignities realize at the end it’s only for an inscription on their gravestone.”",
    title: "WHAT’S ON YOUR TOMBSTONE?",
  },
  {
    author: "—SENECA",
    book: "ON CONSOLATION TO HELVIA",
    commentary:
      "There is a story of a Zen master who had a beautiful prized cup. The master would repeat to himself,\n“The glass is already broken.” He enjoyed the cup. He used it. He showed it off to visitors. But in his\nmind, it was already broken. And so one day, when it actually did break, he simply said, “Of course.”\nThis is how the Stoics think too. There is supposedly a true story about Epictetus and a lamp. He\nnever locked his house, and so his expensive lamp was stolen. When Epictetus replaced it, he replaced it\nwith a cheaper one so he could be less attached to it if it were stolen again.\nDevastation—that feeling that we’re absolutely crushed and shocked by an event—is a factor of how\nunlikely we considered that event in the first place. No one is wrecked by the fact that it’s snowing in the\nwinter, because we’ve accepted (and even anticipated) this turn of events. What about the occurrences\nthat surprise us? We might not be so shocked if we took the time to consider their possibility.",
    date: "November 22nd",
    docId: "5.3",
    quote:
      " “Fortune falls heavily on those for whom she’s unexpected. The one always on the lookout easily endures.”",
    title: "THE GLASS IS ALREADY BROKEN",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Whatever happens today, let it find us prepared and active: ready for problems, ready for difficulties,\nready for people to behave in disappointing or confusing ways, ready to accept and make it work\nfor us. Let’s not wish we could turn back time or remake the universe according to our preference. Not\nwhen it would be far better and far easier to remake ourselves.",
    date: "June 18th",
    docId: "107.12",
    quote:
      " “Let Fate find us prepared and active. Here is the great soul—the one who surrenders to Fate. The opposite is the weak and degenerate one, who struggles with and has a poor regard for the order of the world, and seeks to correct the faults of the gods rather than their own.”",
    title: "PREPARED AND ACTIVE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It’s comforting to think that even two thousand years ago the emperor of Rome (who was reportedly a\nbit of an insomniac) was giving himself a pep talk in order to summon up the willpower to throw the\nblankets off each morning and get out of bed. From the time we’re first sent off to school until we retire,\nwe’re faced with that same struggle. It’d be nicer to shut our eyes and hit the snooze button a few more\ntimes. But we can’t.\nBecause we have a job to do. Not only do we have the calling we’ve dedicated ourselves to, but we\nhave the larger cause that the Stoics speak about: the greater good. We cannot be of service to ourselves,\nto other people, or to the world unless we get up and get working—the earlier the better. So c’mon. Get in\nthe shower, have your coffee, and get going.",
    date: "July 6th",
    docId: "5.1",
    quote:
      " “On those mornings you struggle with getting up, keep this thought in mind—I am awakening to the work of a human being. Why then am I annoyed that I am going to do what I’m made for, the very things for which I was put into this world? Or was I made for this, to snuggle under the covers and keep warm? It’s so pleasurable. Were you then made for pleasure? In short, to be coddled or to exert yourself?”",
    title: "RISE AND SHINE",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Instinctively, we protect our physical selves. We don’t let people touch us, push us around, control\nwhere we go. But when it comes to the mind, we’re less disciplined. We hand it over willingly to\nsocial media, to television, to what other people are doing, thinking, or saying. We sit down to work and\nthe next thing you know, we’re browsing the Internet. We sit down with our families, but within minutes\nwe have our phones out. We sit down peacefully in a park, but instead of looking inward, we’re judging\npeople as they pass by.\nWe don’t even know that we’re doing this. We don’t realize how much waste is in it, how inefficient\nand distracted it makes us. And what’s worse—no one is making this happen. It’s totally self-inflicted.\nTo the Stoics, this is an abomination. They know that the world can control our bodies—we can be\nthrown in jail or be tossed about by the weather. But the mind? That’s ours. We must protect it. Maintain\ncontrol over your mind and perceptions, they’d say. It’s your most prized possession.",
    date: "March 8th",
    docId: "28",
    quote:
      " “If a person gave away your body to some passerby, you’d be furious. Yet you hand over your mind to anyone who comes along, so they may abuse you, leaving it disturbed and troubled— have you no shame in that?”",
    title: "DON’T UNINTENTIONALLY HAND OVER YOUR FREEDOM",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Have you ever been to physical therapy or rehab? No matter what the name implies or how many\npeople you see lying about, getting massages, it’s not a fun place to be. It turns out that healing hurts.\nThe trained experts know exactly where to exert pressure and what to subject to stress so that they can\nstrengthen where the patient is weak and help stimulate the areas that have atrophied.\nStoic philosophy is a lot like that. Some observations or exercises will touch one of your pressure\npoints. It’s nothing personal. It’s supposed to hurt. That’s how you’ll develop the will to endure and\npersevere through life’s many difficulties.",
    date: "September 2nd",
    docId: "3.23.30",
    quote:
      " “Men, the philosopher’s lecture-hall is a hospital—you shouldn’t walk out of it feeling pleasure, but pain, for you aren’t well when you enter it.”",
    title: "THE PHILOSOPHER’S SCHOOL IS A HOSPITAL",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Very few people can simply watch an instructional video or hear something explained and then know,\nbackward and forward, how to do it. Most of us actually have to do something several times in\norder to truly learn. One of the hallmarks of the martial arts, military training, and athletic training of\nalmost any kind is the hours upon hours upon hours of monotonous practice. An athlete at the highest level\nwill train for years to perform movements that can last mere seconds—or less. The two-minute drill, how\nto escape from a chokehold, the perfect jumper. Simply knowing isn’t enough. It must be absorbed into the\nmuscles and the body. It must become part of us. Or we risk losing it the second that we experience stress\nor difficulty.\nIt is true with philosophical principles as well. You can’t just hear something once and expect to rely\non it when the world is crashing down around us. Remember, Marcus Aurelius wasn’t writing his\nmeditations for other people. He was actively meditating for himself. Even as a successful, wise, and\nexperienced man, he was until the last days of his life practicing and training himself to do the right thing.\nLike a black belt, he was still showing up to the dojo every day to roll; like a professional athlete, he still\nshowed up to practice each week—even though others probably thought it was unnecessary.",
    date: "May 19th",
    docId: "2.9.13–14",
    quote:
      " “That’s why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training. For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should.”",
    title: "LEARN, PRACTICE, TRAIN",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "Think of all you know about the lifestyles of the rich and the famous. That so-and-so bought a home for\nso many millions. That so-and-so travels with their own barber. That so-and-so owns a pet tiger or\nan elephant.\nThe exact same gossip and notoriety was popular in Roman times. Certain Romans were known for\nthe thousands of sesterces they spent on their koi ponds. Others were notorious for orgiastic parties and\nsumptuous feasts. The works of Roman poets such as Juvenal and Martial abound with tidbits about these\ntypes.\nThe conspicuously wealthy earn and ultimately get what they want out of spending: their reputation.\nBut what an empty one! Is it really that impressive to spend, spend, spend? Given the funds, who wouldn’t\nbe able to do that?\nMarcus Aurelius courageously sold off some of the imperial furnishings to pay down war debts. More\nrecently, José Mujica, the former president of Uruguay, stood out for giving 90 percent of his presidential\nsalary to charity and driving a twenty-five-year-old car. Who can do stuff like that? Not everyone. So\nwho’s the more impressive?",
    date: "May 4th",
    docId: "19.91.26–28",
    quote:
      " “How much better is it to be known for doing well by many than for living extravagantly? How much more worthy than spending on sticks and stones is it to spend on people?”",
    title: "WHAT’S TRULY IMPRESSIVE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The foundation of a free country is that your freedom to swing your fist ends where someone else’s\nnose begins. That is, someone else is free to do what they like until it interferes with your physical\nbody and space. This saying can work as a great personal philosophy as well.\nBut living that way will require two important assumptions. First, you ought to live your own life in\nsuch a way that it doesn’t negatively impose on others. Second, you have to be open-minded and\naccepting enough to let others do the same.\nCan you do that? Even when you really, really disagree with the choices they’re making? Can you\nunderstand that their life is their business and yours is your own? And that you’ve got plenty to wrestle\nwith yourself without bothering anyone else?",
    date: "July 18th",
    docId: "8.56",
    quote:
      " “My reasoned choice is as indifferent to the reasoned choice of my neighbor, as to his breath and body. However much we’ve been made for cooperation, the ruling reason in each of us is master of its own affairs. If this weren’t the case, the evil in someone else could become my harm, and God didn’t mean for someone else to control my misfortune.”",
    title: "EACH THE MASTER OF THEIR OWN DOMAIN",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Anyone who has taken a yoga class or been exposed to Hindu or Buddhist thought has probably heard\nof the concept of a mantra. In Sanskrit, it means “sacred utterance”—essentially a word, a phrase, a\nthought, even a sound—intended to provide clarity or spiritual guidance. A mantra can be especially\nhelpful in the meditative process because it allows us to block out everything else while we focus.\nIt’s fitting, then, that Marcus Aurelius would suggest this Stoic mantra—a reminder or watch phrase to\nuse when we feel false impressions, distractions, or the crush of everyday life upon us. It says,\nessentially, “I have the power within me to keep that out. I can see the truth.”\nChange the wording as you like. That part is up to you. But have a mantra and use it to find the clarity\nyou crave.",
    date: "January 26th",
    docId: "8.29",
    quote:
      " “Erase the false impressions from your mind by constantly saying to yourself, I have it in my soul to keep out any evil, desire or any kind of disturbance—instead, seeing the true nature of things, I will give them only their due. Always remember this power that nature gave you.”",
    title: "THE POWER OF A MANTRA",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "What if the next time you were treated meanly, you didn’t just restrain yourself from fighting back—\nwhat if you responded with unmitigated kindness? What if you could “love your enemies, do good\nto those who hate you”? What kind of effect do you think that would have?\nThe Bible says that when you can do something nice and caring to a hateful enemy, it is like “heap[ing]\nburning coals on his head.” The expected reaction to hatred is more hatred. When someone says\nsomething pointed or mean today, they expect you to respond in kind—not with kindness. When that\ndoesn’t happen, they are embarrassed. It’s a shock to their system—it makes them and you better.\nMost rudeness, meanness, and cruelty are a mask for deep-seated weakness. Kindness in these\nsituations is only possible for people of great strength. You have that strength. Use it.",
    date: "May 12th",
    docId: "11.18.5.9a",
    quote:
      " “Kindness is invincible, but only when it’s sincere, with no hypocrisy or faking. For what can even the most malicious person do if you keep showing kindness and, if given the chance, you gently point out where they went wrong—right as they are trying to harm you?”",
    title: "KINDNESS IS ALWAYS THE RIGHT RESPONSE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "What’s the meaning of life? Why was I born? Most of us struggle with these questions—sometimes\nwhen we’re young, sometimes not until we’re older. Rarely do we find much in the way of\ndirection. But that’s simply because we miss the point. As Viktor Frankl points out in Man’s Search for\nMeaning, it is not our question to ask. Instead, it is we who are being asked the question. It’s our lives that\nare the answer.\nNo amount of travel or reading or clever sages can tell you what you want to know. Instead, it is you\nwho must find the answer in your actions, in living the good life—by embodying the self-evident\nprinciples of justice, self-control, courage, freedom, and abstaining from evil.",
    date: "October 20th",
    docId: "8.1.(5)",
    quote:
      " “You have proof in the extent of your wanderings that you never found the art of living anywhere —not in logic, nor in wealth, fame, or in any indulgence. Nowhere. Where is it then? In doing what human nature demands. How is a person to do this? By having principles be the source of desire and action. What principles? Those to do with good and evil, indeed in the belief that there is no good for a human being except what creates justice, self-control, courage and freedom, and nothing evil except what destroys these things.”",
    title: "MARKS OF THE GOOD LIFE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "If our lives are not ruled by reason, what are they ruled by? Impulse? Whim? Mimicry? Unthinking\nhabit? As we examine our past behavior, it’s sad how often we find this to be the case—that we were\nnot acting consciously or deliberately but instead by forces we did not bother to evaluate. It also happens\nthat these are the instances that we’re mostly likely to regret.",
    date: "March 30th",
    docId: "9.22",
    quote:
      " “Hurry to your own ruling reason, to the reason of the Whole, and to your neighbor’s. To your own mind to make it just; to the mind of the Whole to remember your place in it; and to your neighbor’s mind to learn whether it’s ignorant or of sound knowledge—while recognizing it’s like yours.”",
    title: "REASON IN ALL THINGS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The goodness inside you is like a small flame, and you are its keeper. It’s your job, today and every\nday, to make sure that it has enough fuel, that it doesn’t get obstructed or snuffed out.\nEvery person has their own version of the flame and is responsible for it, just as you are. If they all\nfail, the world will be much darker—that is something you don’t control. But so long as your flame\nflickers, there will be some light in the world.",
    date: "July 4th",
    docId: "4.3.11",
    quote:
      " “Protect your own good in all that you do, and as concerns everything else take what is given as far as you can make reasoned use of it. If you don’t, you’ll be unlucky, prone to failure, hindered and stymied.”",
    title: "PROTECT THE FLAME",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There is an ancient story of a courtier who had made light of the responsibilities of his king. To prove\nhe was mistaken, the king arranged to switch places with the courtier so he could experience what it\nwas like to be a king. The king made one other adjustment: he hung a sword by a hair over the throne to\nillustrate the peril and burden of kingship as well as the constant fear of assassination. We call that\ndangling reminder of death and difficulty the Sword of Damocles.\nThe reality is that a similar sword hangs over all of us—life can be taken from us at any moment. And\nthat threat can send us in one of two directions: we can fear and dread it, or we can use it to motivate us.\nTo do good, to be good. Because the sword is dangling, and there’s nothing else to be concerned with.\nWould you rather it catch you in the middle of some shameful, selfish act? Would you rather it catch you\nwaiting to be good in the future?",
    date: "December 6th",
    docId: "4.17",
    quote:
      " “Don’t behave as if you are destined to live forever. What’s fated hangs over you. As long as you live and while you can, become good now.”",
    title: "THE SWORD DANGLES OVER YOU",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In 1931, on a trip to New York City, Winston Churchill was struck crossing the street by a car going\nmore than thirty miles an hour. A witness at the scene was sure that he had been killed. He would spend\nsome eight days in the hospital, with cracked ribs and a severe head wound.\nChurchill somehow retained consciousness. When he spoke to the police, he went to great lengths to\ninsist that he was completely to blame and wanted no harm to come to the driver. Later, the driver came to\nvisit Churchill at the hospital. When Churchill heard that the driver was out of work, he tried to offer him\n—the man who had nearly killed him—some money. More than his own pain, he was worried that the\npublicity from the accident would hurt the man’s job prospects and sought to help how he could.\n“Nature is merciful,” he later wrote in a newspaper article about the experience, “and does not try her\nchildren, man or beast, beyond their compass. It is only where the cruelty of man intervenes that hellish\ntorments appear. For the rest—live dangerously; take things as they come; dread naught, all will be well.”\nIn the years to come, Churchill and the world would witness some of the most hellish torments that\nman could invent. Yet he—along with many of our ancestors—endured that pain as well. As horrible as it\nwas, eventually all would be well again. Because like Epicurus says, nothing is unending. You just need\nto be strong and gracious enough to get through it.",
    date: "September 18th",
    docId: "7.64",
    quote:
      " “Whenever you suffer pain, keep in mind that it’s nothing to be ashamed of and that it can’t degrade your guiding intelligence, nor keep it from acting rationally and for the common good. And in most cases you should be helped by the saying of Epicurus, that pain is never unbearable or unending, so you can remember these limits and not add to them in your imagination. Remember too that many common annoyances are pain in disguise, such as sleepiness, fever and loss of appetite. When they start to get you down, tell yourself you are giving in to pain.”",
    title: "DEALING WITH PAIN",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "If you bend your body into a sitting position every day for a long enough period of time, the curvature of\nyour spine changes. A doctor can tell from a radiograph (or an autopsy) whether someone sat at a desk\nfor a living. If you shove your feet into tiny, narrow dress shoes each day, your feet begin to take on that\nform as well.\nThe same is true for our mind. If you hold a perpetually negative outlook, soon enough everything you\nencounter will seem negative. Close it off and you’ll become closed-minded. Color it with the wrong\nthoughts and your life will be dyed the same.",
    date: "April 1st",
    docId: "5.16",
    quote:
      " “Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions.”",
    title: "THE COLOR OF YOUR THOUGHTS",
  },
  {
    author: "—SENECA",
    book: "ON THE FIRMNESS OF THE WISE",
    commentary:
      "Some people put their money in assets—stocks, bonds, property. Others invest in relationships or\naccomplishments, knowing that they can draw on these things just as easily as others can draw funds\nfrom a bank account. But a third type, Seneca says, invests in themselves—in being a good and wise\nperson.\nWhich of these assets is most immune to market fluctuations and disasters? Which is most resilient in\nthe face of trials and tribulations? Which will never abandon you? Seneca’s own life is an interesting\nexample. He became quite wealthy as a friend of the emperor, but as Nero became more and more\nderanged, Seneca realized he needed to get out. He offered Nero a deal: he would give Nero all his\nmoney and return all of Nero’s gifts in exchange for complete and total freedom.\nUltimately, Nero rejected this offer, but Seneca left anyway, retiring in relative peace. But one day, the\nexecutioners came with their mortal decree. In that moment, what did Seneca rely on? It wasn’t his money.\nIt wasn’t his friends, who, although they meant well, were a considerable source of grief and mourning. It\nwas his virtue and inner strength.\nIt was Seneca’s most trying moment—his last and his finest.",
    date: "October 2nd",
    docId: "5.4",
    quote:
      " “But the wise person can lose nothing. Such a person has everything stored up for themselves, leaving nothing to Fortune, their own goods are held firm, bound in virtue, which requires nothing from chance, and therefore can’t be either increased or diminished.”",
    title: "THE MOST VALUABLE ASSET",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "When dog trainers are brought in to work with a dysfunctional or unhappy dog, they usually start with\none question: “Do you take it for walks?” They ask because dogs were bred to do certain tasks—\nto do work—and when deprived of this essential part of their nature, they suffer and act out. This is true\nno matter how spoiled and nice their life might be.\nThe same is true for humans. When you hear the Stoics brush aside certain emotions or material\nluxuries, it’s not because they don’t enjoy them. It’s not because the Stoic life is one bereft of happiness or\nfun. The Stoics simply mean to help us find our essence—to experience the joy of our proper human work.",
    date: "May 25th",
    docId: "8.26",
    quote:
      " “Joy for human beings lies in proper human work. And proper human work consists in: acts of kindness to other human beings, disdain for the stirrings of the senses, identifying trustworthy impressions, and contemplating the natural order and all that happens in keeping with it.”",
    title: "WHERE TO FIND JOY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "In Marcus Aurelius’s writings, he constantly points out how the emperors who came before him were\nbarely remembered just a few years later. To him, this was a reminder that no matter how much he\nconquered, no matter how much he inflicted his will on the world, it would be like building a castle in the\nsand—soon to be erased by the winds of time.\nThe same goes for those driven to the heights of hate or anger or obsession or perfectionism. Marcus\nliked to point out that Alexander the Great—one of the most passionate and ambitious men who ever lived\n—was buried in the same ground as his mule driver. Eventually, all of us will pass away and slowly be\nforgotten. We should enjoy this brief time we have on earth—not be enslaved to emotions that make us\nmiserable and dissatisfied.",
    date: "February 25th",
    docId: "12.27",
    quote:
      " “Keep a list before your mind of those who burned with anger and resentment about something, of even the most renowned for success, misfortune, evil deeds, or any special distinction. Then ask yourself, how did that work out? Smoke and dust, the stuff of simple myth trying to be legend . . .”",
    title: "THE SMOKE AND DUST OF MYTH",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "No one ever said you were born with all the tools you’d need to solve every problem you’d face in\nlife. In fact, as a newborn you were practically helpless. Someone helped you then, and you came to\nunderstand that you could ask for that help. It was how you knew you were loved.\nWell, you are still loved. You can ask anyone for help. You don’t have to face everything on your own.\nIf you need help, comrade, just ask.",
    date: "June 16th",
    docId: "7.7",
    quote:
      " “Don’t be ashamed of needing help. You have a duty to fulfill just like a soldier on the wall of battle. So what if you are injured and can’t climb up without another soldier’s help?”",
    title: "NO SHAME IN NEEDING HELP",
  },
  {
    author: "—ZENO, QUOTED IN DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "The famous biographer Diogenes Laertius attributes this quote to Zeno but admits that it might have\nalso been said by Socrates, meaning that it may be a quote of a quote of a quote. But does it really\nmatter? Truth is truth.\nIn this case, the truth is one we know well: the little things add up. Someone is a good person not\nbecause they say they are, but because they take good actions. One does not magically get one’s act\ntogether—it is a matter of many individual choices. It’s a matter of getting up at the right time, making\nyour bed, resisting shortcuts, investing in yourself, doing your work. And make no mistake: while the\nindividual action is small, its cumulative impact is not.\nThink about all the small choices that will roll themselves out in front of you today. Do you know\nwhich are the right way and which are the easy way? Choose the right way, and watch as all these little\nthings add up toward transformation.",
    date: "May 27th",
    docId: "7.1.26",
    quote:
      " “Well-being is realized by small steps, but is truly no small thing.”",
    title: "SWEAT THE SMALL STUFF",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The body can be ravaged by disease or injured or disabled in a sudden accident. It can be imprisoned\nor subjected to torture. The breath can suddenly cease because our time has come, or because\nsomeone has taken it from us. Breathing can grow labored because of exertion or illness as well. But up\nuntil the very end, our mind is ours.\nIt’s not that the other two parts of life that Marcus mentions—our body and our breath—don’t matter.\nThey’re just less “ours” than our mind. You wouldn’t spend much time fixing up a house that you rent,\nwould you? Our mind is ours—free and clear. Let’s make sure we treat it right.",
    date: "April 23rd",
    docId: "12.3",
    quote:
      " “You have been formed of three parts—body, breath, and mind. Of these, the first two are yours insofar as they are only in your care. The third alone is truly yours.”",
    title: "THE MIND IS ALL YOURS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Elite athletes in collegiate and professional sports increasingly follow a philosophy known as “The\nProcess.” It’s a philosophy created by University of Alabama coach Nick Saban, who taught his\nplayers to ignore the big picture—important games, winning championships, the opponent’s enormous\nlead—and focus instead on doing the absolutely smallest things well—practicing with full effort, finishing\na specific play, converting on a single possession. A season lasts months, a game lasts hours, catching up\nmight be four touchdowns away, but a single play is only a few seconds. And games and seasons are\nconstituted by seconds.\nIf teams follow The Process, they tend to win. They overcome obstacles and eventually make their\nway to the top without ever having focused on the obstacles directly. If you follow The Process in your\nlife—assembling the right actions in the right order, one right after another—you too will do well. Not\nonly that, you will be better equipped to make quick work of the obstacles along that path. You’ll be too\nbusy putting one foot in front of the next to even notice the obstacles were there.",
    date: "June 8th",
    docId: "8.32",
    quote:
      " “You must build up your life action by action, and be content if each one achieves its goal as far as possible—and no one can keep you from this. But there will be some external obstacle! Perhaps, but no obstacle to acting with justice, self-control, and wisdom. But what if some other area of my action is thwarted? Well, gladly accept the obstacle for what it is and shift your attention to what is given, and another action will immediately take its place, one that better fits the life you are building.”",
    title: "BRICK BY BORING BRICK",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "One of the most fundamental principles of martial arts is that strength should not go against strength.\nThat is: don’t try to beat your opponent where they are strongest. But that’s exactly what we do when\nwe try to undertake some impossible task we haven’t bothered to think through. Or we let someone put us\non the spot. Or we say yes to everything that comes our way.\nSome people think that “choosing your battles” is weak or calculating. How could reducing the amount\nof times we fail or minimizing the number of needless injuries inflicted upon us be weak? How is that a\nbad thing? As the saying goes, discretion is the better part of valor. The Stoics call it reasoned choice.\nThat means be reasonable! Think hard before choosing, and make yourself unbeatable.",
    date: "August 18th",
    docId: "3.6.5–7",
    quote:
      " “A good person is invincible, for they don’t rush into contests in which they aren’t the strongest. If you want their property, take it—take also their staff, profession, and body. But you will never compel what they set out for, nor trap them in what they would avoid. For the only contest the good person enters is that of their own reasoned choice. How can such a person not be invincible?”",
    title: "ONLY FOOLS RUSH IN",
  },
  {
    author: "—SENECA",
    book: "THYESTES",
    commentary:
      "It’s ironic that Seneca would have one of his characters utter this line. As we know, for many years\nSeneca served as the tutor and mentor to the emperor Nero. There is a lot of evidence that Seneca was,\nin fact, a positive moral influence on the deranged young man, but even at the time, Seneca’s\ncontemporaries found it strange that a philosopher would serve as the right hand to such an evil person.\nThey even used the Greek word tyrannodidaskalos—tyrant teacher—to describe him. And just as\nShakespeare observed in Macbeth, “Bloody instructions, which, being taught, return / To plague\nth’inventor,” Seneca’s collaboration with Nero ultimately ended with the student murdering the teacher.\nIt’s something to think about when you consider whom to work with and whom to do business with in\nlife. If you show a client how to do something unethical or illegal, might they return the favor to an\nunsuspecting you later on? If you provide a bad example to your employees, to your associates, to your\nchildren, might they betray you or hurt you down the road? What goes around comes around, is the saying.\nKarma is a notion we have imported from the East, along similar lines.\nSeneca paid a price for his instructions to Nero. As has been true throughout the ages, his hypocrisy—\navoidable or not—was costly. So too will be yours.",
    date: "October 27th",
    docId: "311",
    quote: " “Crimes often return to their teacher.”",
    title: "WE REAP WHAT WE SOW",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "We are fortunate enough that some of the greatest men and women in history have recorded their\nwisdom (and folly) in books and journals. Many others have had their lives chronicled by a careful\nbiographer—from Plutarch to Boswell to Robert Caro. The literature available at your average library\namounts to millions of pages and thousands of years of knowledge, insight, and experience.\nMaybe your parents were poor role models, or you lacked a great mentor. Yet if we choose to, we can\neasily access the wisdom of those who came before us—those whom we aspire to be like.\nWe not only owe it to ourselves to seek out this hard-won knowledge, we owe it to the people who\ntook the time to record their experiences to try to carry on the traditions and follow their examples—to be\nthe promising children of these noble parents.",
    date: "June 7th",
    docId: "15.3a",
    quote:
      " “We like to say that we don’t get to choose our parents, that they were given by chance—yet we can truly choose whose children we’d like to be.”",
    title: "FINDING THE RIGHT MENTORS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "sign on President Harry Truman’s desk read, \n. As president, with more power\nA\nand control than pretty much anyone else, he knew that, good or bad, there wasn’t anyone he could blame\nTHE BUCK STOPS HEREfor stuff other than himself. There was no one to pass the buck to. The chain ended there, in the Oval\nOffice.\nAs the president of our own lives—and knowing that our powers begin and end with our reasoned\nchoice—we would do well to internalize this same attitude. We don’t control things outside that sphere,\nbut we do control our attitudes and our responses to those events—and that’s plenty. It’s enough that we\ngo into each and every day knowing that there is no one to pass the buck to. It ends with us.",
    date: "November 12th",
    docId: "6.41",
    quote:
      " “If we judge as good and evil only the things in the power of our own choice, then there is no room left for blaming gods or being hostile to others.”",
    title: "THE STRONG ACCEPT RESPONSIBILITY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "We’re all complicated people. We have multiple sides to ourselves—conflicting wants, desires, and\nfears. The outside world is no less confusing and contradictory. If we’re not careful, all these\nforces—pushing and pulling—will eventually tear us apart. We can’t live as both Jekyll and Hyde. Not\nfor long, anyway.\nWe have a choice: to stand with the philosopher and focus strenuously on the inside, or to behave like\na leader of a mob, becoming whatever the crowd needs at a given moment.\nIf we do not focus on our internal integration—on self-awareness—we risk external disintegration.",
    date: "March 3rd",
    docId: "3.15.13",
    quote:
      " “These things don’t go together. You must be a unified human being, either good or bad. You must diligently work either on your own reasoning or on things out of your control—take great care with the inside and not what’s outside, which is to say, stand with the philosopher, or else with the mob!”",
    title: "(DIS)INTEGRATION",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "Stories about lottery winners tend to share one lesson: suddenly coming into a great deal of money is a\ncurse, not a blessing. Just a few years after they get their big check, many lottery winners are actually\nin worse financial shape. They’ve lost friends, they’ve gotten divorced. Their whole lives have been\nturned into a nightmare as a result of their obscenely good fortune.\nIt’s like that Metallica lyric (fittingly from a song called “No Leaf Clover”): “Then it comes to be that\nthe soothing light at the end of your tunnel / Is just a freight train coming your way.”\nAnd yet the most common response from a cancer survivor, the person who went through the thing we\nall dread and fear? “It was the best thing that ever happened to me.”\nFunny how that works out, isn’t it?",
    date: "November 25th",
    docId: "20.95.14–17",
    quote:
      " “As for me, I would choose being sick over living in luxury, for being sick only harms the body, whereas luxury destroys both the body and the soul, causing weakness and incapacity in the body, and lack of control and cowardice in the soul. What’s more, luxury breeds injustice because it also breeds greediness.”",
    title: "FUNNY HOW THAT WORKS OUT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Despite his privileges, Marcus Aurelius had a difficult life. The Roman historian Cassius Dio mused\nthat Marcus “did not meet with the good fortune that he deserved, for he was not strong in body and\nwas involved in a multitude of troubles throughout practically his entire reign.” At one point, he was so\nsick that a rumor spread that he had died—and matters were made worse when his most trusted general\nused it as an opportunity to declare himself the new emperor.\nBut throughout these struggles—the years at war, the crippling illnesses, his troubled son—he never\ngave up. It’s an inspiring example for us to think about today if we get tired, frustrated, or have to deal\nwith some crisis. Here was a guy who had every reason to be angry and bitter, who could have abandoned\nhis principles and lived in luxury or ease, who could have put his responsibilities aside and focused on\nhis own health.\nBut he never did. His soul stayed strong even after his body became weak. He didn’t give up, right up\nto the second until his body finally did—when he died near Vienna in 180 AD.",
    date: "December 27th",
    docId: "6.29",
    quote:
      " “It’s a disgrace in this life when the soul surrenders first while the body refuses to.”",
    title: "DON’T LET YOUR SOUL GO FIRST",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Naturally, Marcus Aurelius and the rest of the Stoics were not familiar with Newtonian physics. But\nthey knew that what went up must come down. That’s the analogy he’s using here: our mutual\ninterdependence with our fellow human beings is stronger than the law of gravity.\nPhilosophy attracts introverts. The study of human nature can make you aware of other people’s faults\nand can breed contempt for others. So do struggle and difficulty—they isolate us from the world.\nBut none of that changes that we are, as Aristotle put it, social animals. We need each other. We must\nbe there for each other. We must take care of each other (and to allow others to care for us in return). To\npretend otherwise is to violate our nature, to be more or less than what it means to be a human being.",
    date: "October 28th",
    docId: "9.9.3",
    quote:
      " “You’ll more quickly find an earthly thing kept from the earth than you will a person cut off from other human beings.”",
    title: "WE WERE MADE FOR EACH OTHER",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "As he wound his way up Via Dolorosa to the top of Calvary Hill, Jesus (or Christus as he would have\nbeen known to Seneca and other Roman contemporaries) had suffered immensely. He’d been beaten,\nflogged, stabbed, forced to bear his own cross, and was set to be crucified on it next to two common\ncriminals. There he watched the soldiers roll dice to see who would get to keep his clothes, listened as\nthe people sneered and taunted him.\nWhatever your religious inclinations, the words that Jesus spoke next—considering they came as he\nwas subjected to unimaginable human suffering—send chills down your spine. Jesus looked upward and\nsaid simply, “Father, forgive them, for they know not what they do.”\nThat is the same truth that Plato spoke centuries earlier and that Marcus spoke almost two centuries\nafter Jesus; other Christians must have spoken this truth as they were cruelly executed by the Romans\nunder Marcus’s reign: Forgive them; they are deprived of truth. They wouldn’t do this if they weren’t.\nUse this knowledge to be gentle and gracious.",
    date: "July 19th",
    docId: "7.63",
    quote:
      " “As Plato said, every soul is deprived of truth against its will. The same holds true for justice, self-control, goodwill to others, and every similar virtue. It’s essential to constantly keep this in your mind, for it will make you more gentle to all.”",
    title: "FORGIVE THEM BECAUSE THEY DON’T KNOW",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Self-control is a difficult thing, no question. Which is why a popular trick from dieting might be\nhelpful. Some diets allow a “cheat day”—one day per week in which dieters can eat anything and\neverything they want. Indeed, they’re encouraged to write a list during the week of all the foods they\ncraved so they can enjoy them all at once as a treat (the thinking being that if you’re eating healthy six out\nof seven days, you’re still ahead).\nAt first, this sounds like a dream, but anyone who has actually done this knows the truth: each cheat\nday you eat yourself sick and hate yourself afterward. Soon enough, you’re willingly abstaining from\ncheating at all. Because you don’t need it, and you definitely don’t want it. It’s not unlike a parent catching\nher child with cigarettes and forcing him to smoke the whole pack.\nIt’s important to connect the so-called temptation with its actual effects. Once you understand that\nindulging might actually be worse than resisting, the urge begins to lose its appeal. In this way, selfcontrol becomes the real pleasure, and the temptation becomes the regret.",
    date: "February 13th",
    docId: "34",
    quote:
      " “Whenever you get an impression of some pleasure, as with any impression, guard yourself from being carried away by it, let it await your action, give yourself a pause. After that, bring to mind both times, first when you have enjoyed the pleasure and later when you will regret it and hate yourself. Then compare to those the joy and satisfaction you’d feel for abstaining altogether. However, if a seemingly appropriate time arises to act on it, don’t be overcome by its comfort, pleasantness, and allure—but against all of this, how much better the consciousness of conquering it.”",
    title: "PLEASURE CAN BECOME PUNISHMENT",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In 1992, Barbara Jordan addressed the Democratic National Convention and railed against the greed\nand selfishness and divisiveness of the previous decade. People were ready for a change. “Change it to\nwhat?” she asked. “Change that environment of the 80s to an environment which is characterized by a\ndevotion to the public interest, public service, tolerance, and love. Love. Love. Love.”\nLove. Love. Love. Love. Why? Because, as the Beatles put it, “In the end, the love you take is equal to\nthe love you make.” Not just in politics, not just in tolerance, but in our personal lives. There is almost no\nsituation in which hatred helps. Yet almost every situation is made better by love—or empathy,\nunderstanding, appreciation—even situations in which you are in opposition to someone.\nAnd who knows, you might just get some of that love back.",
    date: "October 12th",
    docId: "9.6",
    quote:
      " “Hecato says, ‘I can teach you a love potion made without any drugs, herbs, or special spell—if you would be loved, love.’”",
    title: "ALWAYS LOVE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "As your income taxes come due, you might be like many people—complaining at what you have to\nfork over to the government. Forty percent of everything I make goes to these people? And for\nwhat?!\nFirst off, taxes go to a lot of programs and services you almost certainly take for granted. Second, you\nthink you’re so special? People have been complaining about their taxes for thousands of years, and now\nthey’re dead. Get over it. Third, this is a good problem to have. Far better than, say, making so little there\nis nothing left to pay the government or living in an anarchy and having to pay for every basic service in a\nstruggle against nature.\nBut more important, income taxes are not the only taxes you pay in life. They are just the financial\nform. Everything we do has a toll attached to it. Waiting around is a tax on traveling. Rumors and gossip\nare the taxes that come from acquiring a public persona. Disagreements and occasional frustration are\ntaxes placed on even the happiest of relationships. Theft is a tax on abundance and having things that other\npeople want. Stress and problems are tariffs that come attached to success. And on and on and on.\nThere are many forms of taxes in life. You can argue with them, you can go to great—but ultimately\nfutile—lengths to evade them, or you can simply pay them and enjoy the fruits of what you get to keep.",
    date: "April 15th",
    docId: "96.2",
    quote:
      " “Nothing will ever befall me that I will receive with gloom or a bad disposition. I will pay my taxes gladly. Now, all the things which cause complaint or dread are like the taxes of life— things from which, my dear Lucilius, you should never hope for exemption or seek escape.”",
    title: "PAY YOUR TAXES",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Today, see if you can go without blaming a single person or single thing. Someone messes up your\ninstructions—it’s on you for expecting anything different. Someone says something rude—it’s your\nsensitivity that interpreted their remark this way. Your stock portfolio takes a big loss—what did you\nexpect making such a big bet? Why are you checking the market day to day anyway?\nWhatever it is, however bad it may be, see whether you can make it a whole day laying it all on your\nreasoned choice. If you can’t make it for a day, see if you can make it for an hour. If not for an hour, then\nfor ten minutes.\nStart where you need to. Even one minute without playing the blame game is progress in the art of\nliving.",
    date: "August 17th",
    docId: "3.19.2–3",
    quote:
      " “For nothing outside my reasoned choice can hinder or harm it—my reasoned choice alone can do this to itself. If we would lean this way whenever we fail, and would blame only ourselves and remember that nothing but opinion is the cause of a troubled mind and uneasiness, then by God, I swear we would be making progress.”",
    title: "THE BUCK STOPS HERE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "This is important enough that it bears repeating: a wise person knows what’s inside their circle of\ncontrol and what is outside of it.\nThe good news is that it’s pretty easy to remember what is inside our control. According to the Stoics,\nthe circle of control contains just one thing: YOUR MIND. That’s right, even your physical body isn’t\ncompletely within the circle. After all, you could be struck with a physical illness or impairment at any\nmoment. You could be traveling in a foreign country and be thrown in jail.\nBut this is all good news because it drastically reduces the amount of things that you need to think\nabout. There is clarity in simplicity. While everyone else is running around with a list of responsibilities\na mile long—things they’re not actually responsible for—you’ve got just that one-item list. You’ve got\njust one thing to manage: your choices, your will, your mind.\nSo mind it.",
    date: "January 13th",
    docId: "1.22.10",
    quote:
      " “We control our reasoned choice and all acts that depend on that moral will. What’s not under our control are the body and any of its parts, our possessions, parents, siblings, children, or country —anything with which we might associate.”",
    title: "CIRCLE OF CONTROL",
  },
  {
    author: "—SENECA",
    book: "ON ANGER",
    commentary:
      "As the Stoics have said many times, getting angry almost never solves anything. Usually, it makes\nthings worse. We get upset, then the other person gets upset—now everyone is upset, and the\nproblem is no closer to getting solved.\nMany successful people will try to tell you that anger is a powerful fuel in their lives. The desire to\n“prove them all wrong” or “shove it in their faces” has made many a millionaire. The anger at being\ncalled fat or stupid has created fine physical specimens and brilliant minds. The anger at being rejected\nhas motivated many to carve their own path.\nBut that’s shortsighted. Such stories ignore the pollution produced as a side effect and the wear and\ntear it put on the engine. It ignores what happens when that initial anger runs out—and how now more and\nmore must be generated to keep the machine going (until, eventually, the only source left is anger at\noneself). “Hate is too great a burden to bear,” Martin Luther King Jr. warned his fellow civil rights\nleaders in 1967, even though they had every reason to respond to hate with hate.\nThe same is true for anger—in fact, it’s true for most extreme emotions. They are toxic fuel. There’s\nplenty of it out in the world, no question, but never worth the costs that come along with it.",
    date: "February 10th",
    docId: "3.1.5",
    quote:
      " “There is no more stupefying thing than anger, nothing more bent on its own strength. If successful, none more arrogant, if foiled, none more insane—since it’s not driven back by weariness even in defeat, when fortune removes its adversary it turns its teeth on itself.”",
    title: "ANGER IS BAD FUEL",
  },
  {
    author: "—CHRYSIPPUS, QUOTED IN DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "In undergoing a twelve-step program, many addicts struggle most with step 2: acknowledging a higher\npower. Addicts often fight this one. At first they claim it’s because they’re atheists or because they\ndon’t like religion or because they don’t understand why it matters.\nBut they later realize that this is just the addiction talking—it’s another form of selfishness and selfabsorption. The actual language of the step is pretty easy to swallow: “[We] came to believe that a Power\ngreater than ourselves could restore us to sanity.” Subsequent steps ask the addict to submit and let go.\nThe second step really has less to do with “god” than those other steps—the letting go. It’s about attuning\nto the universe and discarding the toxic idea that we’re at the center of it.\nIt’s no wonder that the Stoics are popular with those in twelve-step programs. It’s also clear that this\nwisdom is beneficial to us all. You don’t have to believe there is a god directing the universe, you just\nneed to stop believing that you’re that director. As soon as you can attune your spirit to that idea, the\neasier and happier your life will be, because you will have given up the most potent addiction of all:\ncontrol.",
    date: "November 5th",
    docId: "7.1.88",
    quote:
      " “This is the very thing which makes up the virtue of the happy person and a well-flowing life— when the affairs of life are in every way tuned to the harmony between the individual divine spirit and the will of the director of the universe.”",
    title: "A HIGHER POWER",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Philosophy is not some idle pursuit appropriate only for academics or the rich. Instead, it is one of the\nmost essential activities that a human being can engage in. Its purpose, as Henry David Thoreau said\na few thousand years after Epictetus, is to help us “solve the problems of life, not only theoretically but\npractically.” This aligns nicely with Cicero’s famous line: “To philosophize is to learn how to die.”\nYou’re not reading these quotes and doing these thought exercises for fun. Though they may be\nenjoyable and help you lighten up, their aim is to help you sculpt and improve your life. And because all\nof us have but one life and one death, we should treat each experience like a sculptor with his chisels,\ncarving until, to paraphrase Michelangelo, we set free the angel in the marble.\nWe are trying to do this difficult thing—living and dying—as well as we can. And to do that, we must\nremember what we’ve learned and the wise words we’ve been given.",
    date: "December 3rd",
    docId: "1.15.2",
    quote:
      " “Philosophy does not claim to get a person any external possession. To do so would be beyond its field. As wood is to the carpenter, bronze to the sculptor, so our own lives are the proper material in the art of living.”",
    title: "THE PHILOSOPHER AS AN ARTISAN OF LIFE AND DEATH",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "There are two kinds of people in this world. The first looks at others who have accomplished things\nand thinks: Why them? Why not me? The other looks at those same people and thinks: If they can do\nit, why can’t I?\nOne is zero-sum and jealous (if you win, I lose). The other is non-zero-sum (there’s plenty to go\naround) and sees the success of others as an inspiration. Which attitude will propel you onward and\nupward? Which will drive you to bitterness and despair?\nWho will you be?",
    date: "June 10th",
    docId: "6.19",
    quote:
      " “If you find something very difficult to achieve yourself, don’t imagine it impossible—for anything possible and proper for another person can be achieved as easily by you.”",
    title: "YOU CAN DO IT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Abraham Lincoln occasionally got fuming mad with a subordinate, one of his generals, even a friend.\nRather than taking it out on that person directly, he’d write a long letter, outlining his case why they\nwere wrong and what he wanted them to know. Then Lincoln would fold it up, put the letter in the desk\ndrawer, and never send it. Many of these letters survive only by chance.\nHe knew, as the former emperor of Rome knew, that it’s easy to fight back. It’s tempting to give them a\npiece of your mind. But you almost always end up with regret. You almost always wish you hadn’t sent\nthe letter. Think of the last time you flew off the handle. What was the outcome? Was there any benefit?",
    date: "February 26th",
    docId: "5.25",
    quote:
      " “Another has done me wrong? Let him see to it. He has his own tendencies, and his own affairs. What I have now is what the common nature has willed, and what I endeavor to accomplish now is what my nature wills.”",
    title: "TO EACH HIS OWN",
  },
  {
    author: "—DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "Self-deception, delusions of grandeur—these aren’t just annoying personality traits. Ego is more than\njust off-putting and obnoxious. Instead, it’s the sworn enemy of our ability to learn and grow.\nAs Epictetus put it, “It is impossible for a person to begin to learn what he thinks he already knows.”\nToday, we will be unable to improve, unable to learn, unable to earn the respect of others if we think\nwe’re already perfect, a genius admired far and wide. In this sense, ego and self-deception are the\nenemies of the things we wish to have because we delude ourselves into believing that we already\npossess them.\nSo we must meet ego with the hostility and contempt that it insidiously deploys against us—to keep it\naway, if only for twenty-four hours at a time.",
    date: "March 14th",
    docId: "7.23",
    quote:
      " “Zeno would also say that nothing is more hostile to a firm grasp on knowledge than selfdeception.”",
    title: "SELF-DECEPTION IS OUR ENEMY",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "One of the criticisms of Stoicism by modern translators and teachers is the amount of repetition.\nMarcus Aurelius, for example, has been dismissed by academics as not being original because his\nwriting resembles that of other, earlier Stoics. This criticism misses the point.\nEven before Marcus’s time, Seneca was well aware that there was a lot of borrowing and overlap\namong the philosophers. That’s because real philosophers weren’t concerned with authorship, only what\nworked. More important, they believed that what was said mattered less than what was done.\nAnd this is as true now as it was then. You’re welcome to take all of the words of the great\nphilosophers and use them to your own liking (they’re dead; they don’t mind). Feel free to tweak and edit\nand improve as you like. Adapt them to the real conditions of the real world. The way to prove that you\ntruly understand what you speak and write, that you truly are original, is to put them into practice. Speak\nthem with your actions more than anything else.",
    date: "August 12th",
    docId: "108.35; 38",
    quote:
      " “Many words have been spoken by Plato, Zeno, Chrysippus, Posidonius, and by a whole host of equally excellent Stoics. I’ll tell you how people can prove their words to be their own—by putting into practice what they’ve been preaching.”",
    title: "MAKE THE WORDS YOUR OWN",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Many schoolteachers teach The Odyssey all wrong. They teach the dates, they debate whether Homer\nwas really the author or not, whether he was blind, they explain the oral tradition, they tell students\nwhat a Cyclops is or how the Trojan Horse worked.\nSeneca’s advice to someone studying the classics is to forget all that. The dates, the names, the places\n—they hardly matter. What matters is the moral. If you got everything else wrong from The Odyssey, but\nyou left understanding the importance of perseverance, the dangers of hubris, the risks of temptation and\ndistraction? Then you really learned something.\nWe’re not trying to ace tests or impress teachers. We are reading and studying to live, to be good\nhuman beings—always and forever.",
    date: "July 7th",
    docId: "88.7b",
    quote:
      " “This is what you should teach me, how to be like Odysseus—how to love my country, wife and father, and how, even after suffering shipwreck, I might keep sailing on course to those honorable ends.”",
    title: "OUR DUTY TO LEARN",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "One of the hardest things to do in life is to say “No.” To invitations, to requests, to obligations, to the\nstuff that everyone else is doing. Even harder is saying no to certain time-consuming emotions:\nanger, excitement, distraction, obsession, lust. None of these impulses feels like a big deal by itself, but\nrun amok, they become a commitment like anything else.\nIf you’re not careful, these are precisely the impositions that will overwhelm and consume your life.\nDo you ever wonder how you can get some of your time back, how you can feel less busy? Start by\nlearning the power of “No!”—as in “No, thank you,” and “No, I’m not going to get caught up in that,” and\n“No, I just can’t right now.” It may hurt some feelings. It may turn people off. It may take some hard\nwork.But the more you say no to the things that don’t matter, the more you can say yes to the things that do.\nThis will let you live and enjoy your life—the life that you want.",
    date: "January 3rd",
    docId: "3.3b",
    quote:
      " “How many have laid waste to your life when you weren’t aware of what you were losing, how much was wasted in pointless grief, foolish joy, greedy desire, and social amusements—how little of your own was left to you. You will realize you are dying before your time!”",
    title: "BE RUTHLESS TO THE THINGS THAT DON’T MATTER",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "It’s that line in the movie Fight Club: “You are not your job, you’re not how much money you have in\nthe bank. You are not the car you drive. You’re not the contents of your wallet.” Obviously our friend\nEpictetus never saw that movie or read the book—but apparently the consumerism of the 1990s existed in\nancient Rome too.\nIt’s easy to confuse the image we present to the world for who we actually are, especially when media\nmessaging deliberately blurs that distinction.\nYou might look beautiful today, but if that was the result of vain obsession in the mirror this morning,\nthe Stoics would ask, are you actually beautiful? A body built from hard work is admirable. A body built\nto impress gym rats is not.\nThat’s what the Stoics urge us to consider. Not how things appear, but what effort, activity, and\nchoices they are a result of.",
    date: "March 17th",
    docId: "3.1.39b–40a",
    quote:
      " “You are not your body and hair-style, but your capacity for choosing well. If your choices are beautiful, so too will you be.”",
    title: "THE BEAUTY OF CHOICE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "woman says she wants to meet a nice guy and get married—yet she spends all her time around jerks. A\nA\nman says that he wishes he could find a great job, but he hasn’t actually bothered to do the looking.\nBusiness executives try to pursue two different strategies at the same time—straddling it’s called—and\nthey are shocked when they succeed at neither.\nAll of these people, just as is often true for us too, are deceived and divided. One hand is working\nagainst the other. As Martin Luther King Jr. once put it, “There is something of a civil war going on within\nall of our lives,” a war inside each individual between the good parts of their soul and the bad.\nThe Stoics say that that war is usually a result of our conflicting desires, our screwed-up judgments or\nbiased thoughts. We don’t stop and ask: OK, what do I really want? What am I actually after here? If we\ndid, we’d notice the contradictory and inconsistent wishes that we have. And then we’d stop working\nagainst ourselves.April 4th\nDON’T LET THIS GO TO YOUR HEAD",
    date: "April 3rd",
    docId: "45.6",
    quote:
      " “Circumstances are what deceive us—you must be discerning in them. We embrace evil before good. We desire the opposite of what we once desired. Our prayers are at war with our prayers, our plans with our plans.”",
    title: "DECEIVED AND DIVIDED",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Stoics were masters at analogies and used them as a tool to help strengthen their reasoning.\nHere, Marcus observes how willingly we will put up with unpleasantness if commanded to by the\nmagic words “doctor’s orders.” The doctor says you’ve got to take this nasty medicine, and you’ll do it.\nThe doctor tells you you have to start sleeping hanging upside down like a bat. You’ll feel silly, but soon\nenough you’ll get to dangling because you think it will make you better.\nOn the other hand, when it comes to external events, we fight like hell if anything happens contrary to\nour plans. But what if, Marcus asks, a doctor had prescribed this exact thing as a part of our treatment?\nWhat if this was as good for us as medicine?\nWell, what if?",
    date: "November 3rd",
    docId: "5.8.",
    quote:
      " “Just as we commonly hear people say the doctor prescribed someone particular riding exercises, or ice baths, or walking without shoes, we should in the same way say that nature prescribed someone to be diseased, or disabled, or to suffer any kind of impairment. In the case of the doctor, prescribed means something ordered to help aid someone’s healing. But in the case of nature, it means that what happens to each of us is ordered to help aid our destiny.”",
    title: "FOLLOWING THE DOCTOR’S ORDERS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "We’re all addicts in one way or another. We’re addicted to our routines, to our coffee, to our\ncomfort, to someone else’s approval. These dependencies mean we’re not in control of our own\nlives—the dependency is.\n“Anyone who truly wants to be free,” Epictetus said, “won’t desire something that is actually in\nsomeone else’s control, unless they want to be a slave.” The subjects of our affection can be removed\nfrom us at a moment’s notice. Our routines can be disrupted, the doctor can forbid us from drinking coffee,\nwe can be thrust into uncomfortable situations.\nThis is why we must strengthen ourselves by testing these dependencies before they become too great.\nCan you try going without this or that for a day? Can you put yourself on a diet for a month? Can you resist\nthe urge to pick up the phone to make that call? Have you ever taken a cold shower? It’s not so bad after\nthe first couple of times. Have you ever driven a friend’s car while the nicer one you own was in the\nshop? Was it really that bad? Make yourself invulnerable to your dependency on comfort and\nconvenience, or one day your vulnerability might bring you to your knees.",
    date: "September 25th",
    docId: "47.17",
    quote:
      " “Show me someone who isn’t a slave! One is a slave to lust, another to greed, another to power, and all are slaves to fear. I could name a former Consul who is a slave to a little old woman, a millionaire who is the slave of the cleaning woman. . . . No servitude is more abject than the self-imposed.”",
    title: "THE VULNERABILITY OF DEPENDENCE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Perception, Action, Will. Those are the three overlapping but critical disciplines of Stoicism (as well\nas the organization of this book and yearlong journey you’ve just begun). There’s more to the\nphilosophy certainly—and we could spend all day talking about the unique beliefs of the various Stoics:\n“This is what Heraclitus thought . . .” “Zeno is from Citium, a city in Cyprus, and he believed . . .” But\nwould such facts really help you day to day? What clarity does trivia provide?\nInstead, the following little reminder sums up the three most essential parts of Stoic philosophy worth\ncarrying with you every day, into every decision:\nControl your perceptions.\nDirect your actions properly.\nWillingly accept what’s outside your control.\nThat’s all we need to do.",
    date: "January 4th",
    docId: "9.6",
    quote:
      " “All you need are these: certainty of judgment in the present moment; action for the common good in the present moment; and an attitude of gratitude in the present moment for anything that comes your way.”",
    title: "THE BIG THREE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Stoics believed that every person, animal, and thing has a purpose or a place in nature. Even in\nancient Greek and Roman times, they vaguely understood that the world was composed of millions of\ntiny atoms. It was this idea—this sense of an interconnected cosmos—that underpinned their sense that\nevery person and every action was part of a larger system. Everyone had a job—a specific duty. Even\npeople who did bad things—they were doing their job of being evil because evil is a part of life.\nThe most critical part of this system was the belief that you, the student who has sought out Stoicism,\nhave the most important job: to be good! To be wise. “To remain the person that philosophy wished to\nmake us.”\nDo your job today. Whatever happens, whatever other people’s jobs happen to be, do yours. Be good.",
    date: "July 1st",
    docId: "7.15",
    quote:
      " “Whatever anyone does or says, for my part I’m bound to the good. In the same way an emerald or gold or purple might always proclaim: ‘whatever anyone does or says, I must be what I am and show my true colors.’”",
    title: "DO YOUR JOB",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "William Lee Miller, in his unique “ethical biography” of Abraham Lincoln, makes an important point\nabout this famous president: our deification of the man makes a point to pretend he wasn’t a\npolitician. We focus on his humble beginnings, his self-education, his beautiful speeches. But we gloss\nover his job, which was politics. That misses what was so truly impressive about him: Lincoln was all\nthe things he was—compassionate, deliberate, fair, open-minded, and purposeful—while being a\npolitician. He was what we admire in a profession we believe to be filled exclusively with the opposite\nof that type of person.\nPrinciples and pragmatism are not at odds. Whether you live in the snake pit of Washington, D.C.,\nwork among the materialism of Wall Street, or grew up in a closed-minded small town, you can live well.\nPlenty of others have.",
    date: "August 7th",
    docId: "5.16",
    quote:
      " “Wherever a person can live, there one can also live well; life is also in the demands of court, there too one can live well.”",
    title: "PRAGMATIC AND PRINCIPLED",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Warren Buffett, whose net worth is approximately $65 billion, lives in the same house he bought in\n1958 for $31,500. John Urschel, a lineman for the Baltimore Ravens, makes millions but manages\nto live on $25,000 a year. San Antonio Spurs star Kawhi Leonard gets around in the 1997 Chevy Tahoe\nhe’s had since he was a teenager, even with a contract worth some $94 million. Why? It’s not because\nthese men are cheap. It’s because the things that matter to them are cheap.\nNeither Buffett nor Urschel nor Leonard ended up this way by accident. Their lifestyle is the result of\nprioritizing. They cultivate interests that are decidedly below their financial means, and as a result, any\nincome would allow them freedom to pursue the things they most care about. It just happens that they\nbecame wealthy beyond any expectation. This kind of clarity—about what they love most in the world—\nmeans they can enjoy their lives. It means they’d still be happy even if the markets were to turn or their\ncareers were cut short by injury.\nThe more things we desire and the more we have to do to earn or attain those achievements, the less\nwe actually enjoy our lives—and the less free we are.",
    date: "January 25th",
    docId: "6.16.2b–4a",
    quote:
      " “What’s left to be prized? This, I think—to limit our action or inaction to only what’s in keeping with the needs of our own preparation . . . it’s what the exertions of education and teaching are all about—here is the thing to be prized! If you hold this firmly, you’ll stop trying to get yourself all the other things. . . . If you don’t, you won’t be free, self-sufficient, or liberated from passion, but necessarily full of envy, jealousy, and suspicion for any who have the power to take them, and you’ll plot against those who do have what you prize. . . . But by having some self-respect for your own mind and prizing it, you will please yourself and be in better harmony with your fellow human beings, and more in tune with the gods—praising everything they have set in order and allotted you.”",
    title: "THE ONLY PRIZE",
  },
  {
    author: "—SENECA",
    book: "HERCULES OETAEUS",
    commentary:
      "The people you admire, the ones who seem to be able to successfully handle and deal with adversity\nand difficulty, what do they have in common? Their sense of equilibrium, their orderly discipline. On\nthe one-yard line, in the midst of criticism, after a heartbreaking tragedy, during a stressful period, they\nkeep going.\nNot because they’re better than you. Not because they’re smarter. But because they have learned a\nlittle secret. You can take the bite out of any tough situation by bringing a calm mind to it. By considering\nit and meditating on it in advance.\nAnd this is true not just for our day-to-day adversities but for the greatest and most unavoidable trial\nof all: our own eventual death. It could come tomorrow, it could come in forty years. It could be quick and\npainless, or it could be excruciating. Our greatest asset in that ordeal will not be religion, it will not even\nbe the wise words of the philosophers. It will be, simply, our calm and reasoned mind.",
    date: "December 30th",
    docId: "231–232",
    quote:
      " “To bear trials with a calm mind robs misfortune of its strength and burden.”",
    title: "TAKING THE BITE OUT OF IT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The Stoics all held vastly different stations in life. Some were rich, some were born at the bottom of\nRome’s rigid hierarchy. Some had it easy, and others had it unimaginably hard. This is true for us as\nwell—we all come to philosophy from different backgrounds, and even within our own lives we\nexperience bouts of good fortune and bad fortune.\nBut in all circumstances—adversity or advantage—we really have just one thing we need to do: focus\non what is in our control as opposed to what is not. Right now we might be laid low with struggles,\nwhereas just a few years ago we might have lived high on the hog, and in just a few days we might be\ndoing so well that success is actually a burden. One thing will stay constant: our freedom of choice—both\nin the big picture and small picture.\nUltimately, this is clarity. Whoever we are, wherever we are—what matters is our choices. What are\nthey? How will we evaluate them? How will we make the most of them? Those are the questions life asks\nus, regardless of our station. How will you answer?",
    date: "January 19th",
    docId: "2.6.25",
    quote:
      " “A podium and a prison is each a place, one high and the other low, but in either place your freedom of choice can be maintained if you so wish.”",
    title: "WHEREVER YOU GO, THERE YOUR CHOICE IS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "What if you spent one day a month experiencing the effects of poverty, hunger, complete isolation, or\nany other thing you might fear? After the initial culture shock, it would start to feel normal and no\nlonger quite so scary.\nThere are plenty of misfortunes one can practice, plenty of problems one can solve in advance.\nPretend your hot water has been turned off. Pretend your wallet has been stolen. Pretend your cushy\nmattress was far away and that you have to sleep on the floor, or that your car was repossessed and you\nhave to walk everywhere. Pretend you lost your job and need to find a new one. Again, don’t just think\nabout these things, but live them. And do it now, while things are good. As Seneca reminds us: “It is\nprecisely in times of immunity from care that the soul should toughen itself beforehand for occasions of\ngreater stress. . . . If you would not have a man flinch when the crisis comes, train him before it comes.”",
    date: "September 10th",
    docId: "18.5–6",
    quote:
      " “Here’s a lesson to test your mind’s mettle: take part of a week in which you have only the most meager and cheap food, dress scantly in shabby clothes, and ask yourself if this is really the worst that you feared. It is when times are good that you should gird yourself for tougher times ahead, for when Fortune is kind the soul can build defenses against her ravages. So it is that soldiers practice maneuvers in peacetime, erecting bunkers with no enemies in sight and exhausting themselves under no attack so that when it comes they won’t grow tired.”",
    title: "PREPARING ON THE SUNNY DAY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Let’s break down each one of those tasks:\nChoice—to do and think right\nRefusal—of temptation\nYearning—to be better\nRepulsion—of negativity, of bad influences, of what isn’t true\nPreparation—for what lies ahead or whatever may happen\nPurpose—our guiding principle and highest priority\nAssent—to be free of deception about what’s inside and outside our control (and be ready to accept\nthe latter)\nThis is what the mind is here to do. We must make sure that it does—and see everything else as\npollution or a corruption.January 8th\nSEEING OUR ADDICTIONS",
    date: "January 7th",
    docId: "4.11.6–7",
    quote:
      " “The proper work of the mind is the exercise of choice, refusal, yearning, repulsion, preparation, purpose, and assent. What then can pollute and clog the mind’s proper functioning? Nothing but its own corrupt decisions.”",
    title: "SEVEN CLEAR FUNCTIONS OF THE MIND",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Law 29 of The 48 Laws of Power is: Plan All The Way To The End. Robert Greene writes, “By\nplanning to the end you will not be overwhelmed by circumstances and you will know when to stop.\nGently guide fortune and help determine the future by thinking far ahead.” The second habit in The 7\nHabits of Highly Effective People is: begin with an end in mind.\nHaving an end in mind is no guarantee that you’ll reach it—no Stoic would tolerate that assumption—\nbut not having an end in mind is a guarantee you won’t. To the Stoics, oiêsis (false conceptions) are\nresponsible not just for disturbances in the soul but for chaotic and dysfunctional lives and operations.\nWhen your efforts are not directed at a cause or a purpose, how will you know what to do day in and day\nout? How will you know what to say no to and what to say yes to? How will you know when you’ve had\nenough, when you’ve reached your goal, when you’ve gotten off track, if you’ve never defined what those\nthings are?\nThe answer is that you cannot. And so you are driven into failure—or worse, into madness by the\noblivion of directionlessness.",
    date: "January 5th",
    docId: "12.5",
    quote:
      " “Let all your efforts be directed to something, let it keep that end in view. It’s not activity that disturbs people, but false conceptions of things that drive them mad.”",
    title: "CLARIFY YOUR INTENTIONS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "A significant chunk of Marcus Aurelius’s Meditations is made up of short quotes and passages from\nother writers. This is because Marcus wasn’t necessarily trying to produce an original work—instead he\nwas practicing, reminding himself here and there of important lessons, and sometimes these lessons were\nthings he had read.\nThis particular quote is special because it comes from a play by Euripides, which, except for a\nhandful of quoted fragments like this, is lost to us. From what we can gather about the play, Bellerophon,\nthe hero, comes to doubt the existence of the gods. But in this line, he is saying: Why bother getting mad at\ncauses and forces far bigger than us? Why do we take these things personally? After all, external events\nare not sentient beings—they cannot respond to our shouts and cries—and neither can the mostly\nindifferent gods.\nThat’s what Marcus was reminding himself of here: circumstances are incapable of considering or\ncaring for your feelings, your anxiety, or your excitement. They don’t care about your reaction. They are\nnot people. So stop acting like getting worked up is having an impact on a given situation. Situations don’t\ncare at all.February 24th\nTHE REAL SOURCE OF HARM",
    date: "February 23rd",
    docId: "7.38",
    quote:
      " “You shouldn’t give circumstances the power to rouse anger, for they don’t care at all.”",
    title: "CIRCUMSTANCES HAVE NO CARE FOR OUR FEELINGS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In the financial disaster of the late 2000s, hundreds of smart, rational people lost trillions of dollars’\nworth of wealth. How could such smart people have been so foolish? These people knew the system,\nknew how the markets were supposed to work, and had managed billions, if not trillions, of dollars. And\nyet, almost to a person, they were wrong—and wrong to the tune of global market havoc.\nIt’s not hard to look at that situation and understand that greed was some part of the problem. Greed\nwas what led people to create complex markets that no one understood in the hope of making a quick\nbuck. Greed caused other people to make trades on strange pools of debt. Greed prevented anyone from\ncalling out this situation for what it was—a house of cards just waiting for the slightest breeze to knock it\nall down.\nIt doesn’t do you much good to criticize those folks after the fact. It’s better to look at how greed and\nvices might be having a similar effect in your own life. What lapses in judgment might your vices be\ncausing you? What “sicknesses” might you have?\nAnd how can your rational mind step in and regulate them?",
    date: "March 23rd",
    docId: "75.11",
    quote:
      " “The diseases of the rational soul are long-standing and hardened vices, such as greed and ambition—they have put the soul in a straitjacket and have begun to be permanent evils inside it. To put it briefly, this sickness is an unrelenting distortion of judgment, so things that are only mildly desirable are vigorously sought after.”",
    title: "THE STRAITJACKETED SOUL",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Stoics didn’t think that anyone could be perfect. The idea of becoming a sage—the highest\naspiration of a philosopher—wasn’t realistic. This was just their Platonic ideal.\nStill, they started every day hoping to get a little closer to that mark. There was much to gain in the\ntrying. Can you actually live today like it is your last day? Is it even possible to embody completeness or\nperfection in our ethos (character), effortlessly doing the right thing for a full twenty-four hours? Is it\npossible for more than a minute?\nMaybe not. But if trying was enough for the Stoics, it should be enough for us too.",
    date: "December 15th",
    docId: "7.69",
    quote:
      " “This is the mark of perfection of character—to spend each day as if it were your last, without frenzy, laziness, or any pretending.”",
    title: "A SIMPLE WAY TO MEASURE OUR DAYS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Bruce Lee once made an interesting claim: “I fear not the man who has practiced ten thousand kicks\nonce,” he said, “but I fear the man who has practiced one kick ten thousand times.” When we repeat\nan action so often it becomes unconscious behavior, we can default to it without thinking.\nTraining in the martial arts or combat is a deeply thoughtful study of movement. We sometimes think of\nsoldiers as automatons, but what they’ve actually built is a steady pattern of unconscious behaviors. Any\nof us can build these.\nWhen Marcus says that a mind can get to a place where “it won’t do anything contrary to its own will,\neven if its position is irrational,” what he means is that proper training can change your default habits.\nTrain yourself to give up anger, and you won’t be angry at every fresh slight. Train yourself to avoid\ngossip, and you won’t get pulled into it. Train yourself on any habit, and you’ll be able to unconsciously\ngo to that habit in trying times.\nThink about which behaviors you’d like to be able to default to if you could. How many of them have\nyou practiced only once? Let today be twice.",
    date: "September 23rd",
    docId: "8.48",
    quote:
      " “Remember that your ruling reason becomes unconquerable when it rallies and relies on itself, so that it won’t do anything contrary to its own will, even if its position is irrational. How much more unconquerable if its judgments are careful and made rationally? Therefore, the mind freed from passions is an impenetrable fortress—a person has no more secure place of refuge for all time.",
    title: "THE MOST SECURE FORTRESS",
  },
  {
    author: "—MUSONIUS RUFUS",
    book: "LECTURES",
    commentary:
      "The notion of original sin has weighed down humankind for centuries. In reality, we’re made to help\neach other and be good to each other. We wouldn’t have survived as a species otherwise.\nThere is hardly an idea in Stoic philosophy that wouldn’t be immediately agreeable to a child or that\ndoesn’t jibe with common sense. The ideas within it go to the core of who we are and what we know to\nbe true. The only things they conflict with are the various inventions of society—which usually serve\nsome selfish interest more than they benefit the common good.\nYou were born good. “All of us have been made by nature,” Rufus said, “so that we can live free from\nerror and nobly—not that one can and another can’t, but all.” You were born with an attraction to virtue\nand self-mastery. If you’ve gotten far from that, it’s not out of some inborn corruption but from a nurturing\nof the wrong things and the wrong ideas. As Seneca has pointed out, philosophy is a tool to strip it all\naway—to get back to our true nature.",
    date: "October 31st",
    docId: "2.7.1–2",
    quote: " “The human being is born with an inclination toward virtue.”",
    title: "YOU WERE BORN GOOD",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Marcus Aurelius didn’t want to be emperor. He wasn’t a politician who sought office, and he wasn’t\na true heir to the throne. As far as we can tell from his letters and from history, what he really\nwanted was to be a philosopher. But the powerful elite in Rome, including the emperor Hadrian, saw\nsomething in him. Groomed for power, Marcus was adopted and put in line for the throne because they\nknew he could handle it. Meanwhile, Epictetus lived much of his life as a slave and was persecuted for\nhis philosophical teachings. Both did quite a lot with the roles they were assigned.\nOur station in life can be as random as a roll of the dice. Some of us are born into privilege, others\ninto adversity. Sometimes we’re given exactly the opportunities we want. At other times we’re given a\nlucky break, but to us it feels like a burden.\nThe Stoics remind us that whatever happens to us today or over the course of our lives, wherever we\nfall on the intellectual, social, or physical spectra, our job is not to complain or bemoan our plight but to\ndo the best we can to accept it and fulfill it. Is there still room for flexibility or ambition? Of course! The\nhistory of the stage is littered with stories of bit parts that turned into starring roles and indelible\ncharacters that were expanded in future adaptations. But even this begins with acceptance and\nunderstanding—and a desire to excel at what we have been assigned.",
    date: "November 8th",
    docId: "17",
    quote:
      " “Remember that you are an actor in a play, playing a character according to the will of the playwright—if a short play, then it’s short; if long, long. If he wishes you to play the beggar, play even that role well, just as you would if it were a cripple, a honcho, or an everyday person. For this is your duty, to perform well the character assigned you. That selection belongs to another.”",
    title: "ACTORS IN A PLAY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Think of the manic people in your life. Not the ones suffering from an unfortunate disorder, but the ones\nwhose lives and choices are in disorder. Everything is soaring highs or crushing lows; the day is\neither amazing or awful. Aren’t those people exhausting? Don’t you wish they just had a filter through\nwhich they could test the good impulses versus the bad ones?\nThere is such a filter. Justice. Reason. Philosophy. If there’s a central message of Stoic thought, it’s\nthis: impulses of all kinds are going to come, and your work is to control them, like bringing a dog to heel.\nPut more simply: think before you act. Ask: Who is in control here? What principles are guiding me?",
    date: "February 5th",
    docId: "4.22",
    quote:
      " “Don’t be bounced around, but submit every impulse to the claims of justice, and protect your clear conviction in every appearance.”",
    title: "STEADY YOUR IMPULSES",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "“I don’t complain about the lack of time . . . what little I have will go far enough. Today—this\nday—will achieve what no tomorrow will fail to speak about. I will lay siege to the gods and\nshake up the world.”\n—SENECA, M EDEA, 423–425W",
    date: "May 22nd",
    docId: "8.22",
    quote:
      " “You get what you deserve. Instead of being a good person today, you choose instead to become one tomorrow.”",
    title: "TODAY IS THE DAY",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "In The Dip, Seth Godin draws an interesting analogy from the three types of people you see in line at the\nsupermarket. One gets in a short line and sticks to it no matter how slow it is or how much faster the\nothers seem to be going. Another changes lines repeatedly based on whatever he thinks might save a few\nseconds. And a third switches only once—when it’s clear her line is delayed and there is a clear\nalternative—and then continues with her day. He’s urging you to ask: Which type are you?\nSeneca is also advising us to be this third type. Just because you’ve begun down one path doesn’t\nmean you’re committed to it forever, especially if that path turns out to be flawed or impeded. At that\nsame time, this is not an excuse to be flighty or incessantly noncommittal. It takes courage to decide to do\nthings differently and to make a change, as well as discipline and awareness to know that the notion of\n“Oh, but this looks even better” is a temptation that cannot be endlessly indulged either.",
    date: "June 6th",
    docId: "2.6b",
    quote:
      " “Think of those who, not by fault of inconsistency but by lack of effort, are too unstable to live as they wish, but only live as they have begun.”",
    title: "WHEN TO STICK AND WHEN TO QUIT",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "“It is easy to praise providence for anything that may happen if you have two qualities: a\ncomplete view of what has actually happened in each instance and a sense of gratitude.\nWithout gratitude what is the point of seeing, and without seeing what is the object of\ngratitude?”\n—EPICTETUS, DISCOURSES, 1.6.1–2S",
    date: "November 1st",
    docId: "8",
    quote:
      " “Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.”",
    title: "ACCEPTING WHAT IS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We say of the most heinous acts that they are crimes against nature. We consider certain things to be\nan affront against humanity, saying, “This violates everything we hold dear.” However much we\ndiffer in religion, upbringing, politics, class, or gender, we can come together in agreement there.\nWhy? Because our sense of justice goes marrow deep. We don’t like it when people cut in line; we\ndon’t like freeloaders; we pass laws that protect the defenseless; and we pay our taxes, agreeing, in part,\nto redistribute our wealth to those in need. At the same time, if we think we can get away with it, we\nmight try to cheat or bend the rules. To paraphrase Bill Walsh, when left to our own devices, many of us\nindividuals seek lower ground like water.\nThe key, then, is to support our natural inclination to justice with strong boundaries and strong\ncommitments—to embrace, as Lincoln urged a divided, angry nation to do, “the better angels of our\nnature.”",
    date: "July 20th",
    docId: "9.1.1",
    quote:
      " “The unjust person acts against the gods. For insofar as the nature of the universe made rational creatures for the sake of each other, with an eye toward mutual benefit based on true value and never for harm, anyone breaking nature’s will obviously acts against the oldest of gods.”",
    title: "MADE FOR JUSTICE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Today, let’s focus on the three areas of training that Epictetus laid out for us.\nFirst, we must consider what we should desire and what we should be averse to. Why? So that\nwe want what is good and avoid what is bad. It’s not enough to just listen to your body—because our\nattractions often lead us astray.\nNext, we must examine our impulses to act—that is, our motivations. Are we doing things for the right\nreasons? Or do we act because we haven’t stopped to think? Or do we believe that we have to do\nsomething?\nFinally, there is our judgment. Our ability to see things clearly and properly comes when we use our\ngreat gift from nature: reason.\nThese are three distinct areas of training, but in practice they are inextricably intertwined. Our\njudgment affects what we desire, our desires affect how we act, just as our judgment determines how we\nact. But we can’t just expect this to happen. We must put real thought and energy into each area of our\nlives. If we do, we’ll find real clarity and success.",
    date: "January 27th",
    docId: "3.2.1–3a",
    quote:
      " “There are three areas in which the person who would be wise and good must be trained. The first has to do with desires and aversions—that a person may never miss the mark in desires nor fall into what repels them. The second has to do with impulses to act and not to act—and more broadly, with duty—that a person may act deliberately for good reasons and not carelessly. The third has to do with freedom from deception and composure and the whole area of judgment, the assent our mind gives to its perceptions. Of these areas, the chief and most urgent is the first which has to do with the passions, for strong emotions arise only when we fail in our desires and aversions.”",
    title: "THE THREE AREAS OF TRAINING",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Someone once attempted to argue with the philosopher Cicero by quoting something he had said or\nwritten. This person claimed Cicero was saying one thing now but had believed something different\nin the past. His response: “I live from one day to the next! If something strikes me as probable, I say it;\nand that is how, unlike everyone else, I remain a free agent.”\nNo one should be ashamed at changing his mind—that’s what the mind is for. “A foolish consistency is\nthe hobgoblin of little minds,” Emerson said, “adored by little statesmen and philosophers and divines.”\nThat’s why we go to such lengths to learn and expose ourselves to wisdom. It would be embarrassing if\nwe didn’t end up finding out if we were wrong in the past.\nRemember: you’re a free agent. When someone points out a legitimate flaw in your belief or in your\nactions, they’re not criticizing you. They’re presenting a better alternative. Accept it!",
    date: "April 25th",
    docId: "6.21",
    quote:
      " “If anyone can prove and show to me that I think and act in error, I will gladly change it—for I seek the truth, by which no one has ever been harmed. The one who is harmed is the one who abides in deceit and ignorance.”",
    title: "THERE’S NOTHING WRONG WITH BEING WRONG",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "When someone has a strong opinion about something, it usually says more about them than whatever\nor whomever the opinion happens to be about. This is especially true when it comes to resentment\nand hatred of other people. (It is a sad irony that the prejudiced often harbor secret attractions to those\nthey so publicly hate.)\nFor this reason, the Stoic does two things when encountering hatred or ill opinion in others. They ask:\nIs this opinion inside my control? If there is a chance for influence or change, they take it. But if there\nisn’t, they accept this person as they are (and never hate a hater). Our job is tough enough already. We\ndon’t have time to think about what other people are thinking, even if it’s about us.",
    date: "September 17th",
    docId: "11.13",
    quote:
      " “What if someone despises me? Let them see to it. But I will see to it that I won’t be found doing or saying anything contemptible. What if someone hates me? Let them see to that. But I will see to it that I’m kind and good-natured to all, and prepared to show even the hater where they went wrong. Not in a critical way, or to show off my patience, but genuinely and usefully.”",
    title: "DEALING WITH HATERS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Is there a person so rich that there is literally nothing they can’t afford? Surely there isn’t. Even the\nrichest people regularly fail in their attempts to buy elections, to purchase respect, class, love, and any\nnumber of other things that are not for sale.\nIf obscene wealth will never get you everything you want, is that the end of it? Or is there another way\nto solve for that equation? To the Stoics, there is: by changing what it is that you want. By changing how\nyou think, you’ll manage to get it. John D. Rockefeller, who was as rich as they come, believed that “a\nman’s wealth must be determined by the relation of his desires and expenditures to his income. If he feels\nrich on $10 and has everything he desires, he really is rich.”\nToday, you could try to increase your wealth, or you could take a shortcut and just want less.",
    date: "August 29th",
    docId: "123.3",
    quote:
      " “No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.”",
    title: "WANT NOTHING = HAVE EVERYTHING",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "People spend a lot more money when they use credit cards than when they have to pull out actual cash.\nIf you ever wondered why credit card companies and banks push cards so aggressively, this is why.\nThe more credit cards you have, the more you’ll spend.\nDo we treat the days of our lives like we treat our money? Because we don’t exactly know how many\ndays we’ll be alive, and because we try our hardest not to think about the fact that someday we’ll die,\nwe’re pretty liberal with how freely we spend our time. We let people and obligations impose on that\ntime, only rarely asking: What am I getting in return here?\nSeneca’s maxim is the equivalent of cutting up your credit cards and switching to cash. He says to put\nreal thought into every transaction: Am I getting my money’s worth here? Is this a fair trade?",
    date: "December 10th",
    docId: "1.11b",
    quote:
      " “I say, let no one rob me of a single day who isn’t going to make a full return on the loss.”",
    title: "DON’T SELL YOURSELF TOO CHEAPLY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Inherent in the Stoic concept of sympatheia is the notion of an interconnected cosmos in which\neverything in the universe is part of a larger whole. Marcus Aurelius was one of the first writers to\narticulate the notion of cosmopolitanism—saying that he was a citizen of the world, not just of Rome.\nThe idea that you’re a bee in the hive is a reminder of this perspective. Marcus even states the reverse\nof that idea later in his Meditations, just so he doesn’t forget: “That which doesn’t harm the community\ncan’t harm the individual.”\nJust because something is bad for you doesn’t mean it’s bad for everyone. Just because something is\ngood for you definitely doesn’t mean it’s good for everyone. Think of the hedge fund managers who bet\nmassively against the economy—they profited by rooting for essentially everyone and everything else to\nfail. Is that who you want to be? A good Stoic understands that proper impulses, and the right actions that\narise from them, naturally carry the good of the whole, which is the wise person’s only good. Conversely,\ngood and wise actions by the whole are what’s good for the individual.",
    date: "October 4th",
    docId: "6.54",
    quote: " “That which isn’t good for the hive, isn’t good for the bee.”",
    title: "ALL FOR ONE, ONE FOR ALL",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Stoics were mercifully spared the information overload endemic to today’s society. They had no\nsocial media, no newspapers, no television chatter to rile them up. But even back then, an\nundisciplined person would have found plenty to be distracted and upset by.\nPart of the Stoic mindset then was a sort of a cultivated ignorance. Publilius Syrus’s epigram\nexpresses it well: “Always shun that which makes you angry.” Meaning: turn your mind away from the\nthings that provoke it. If you find that discussing politics at the dinner table leads to fighting, why do you\nkeep bringing it up? If your sibling’s life choices bother you, why don’t you stop picking at them and\nmaking them your concern? The same goes for so many other sources of aggravation.\nIt’s not a sign of weakness to shut them out. Instead, it’s a sign of strong will. Try saying: “I know the\nreaction I typically take in these situations, and I’m not going to do it this time.” And then follow it with:\n“I’m also going to remove this stimulus from my life in the future as well.”\nBecause what follows is peace and serenity.",
    date: "November 27th",
    docId: "5.2",
    quote:
      " “How satisfying it is to dismiss and block out any upsetting or foreign impression, and immediately to have peace in all things.”",
    title: "THE PLEASURE OF TUNING OUT THE NEGATIVE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Zeno, widely considered to be the founder of the school of Stoicism, was a merchant before he was a\nphilosopher. On a voyage between Phoenicia and Peiraeus, his ship sank along with its cargo. Zeno\nended up in Athens, and while visiting a bookstore he was introduced to the philosophy of Socrates and,\nlater, an Athenian philosopher named Crates. These influences drastically changed the course of his life,\nleading him to develop the thinking and principles that we now know as Stoicism. According to the\nancient biographer Diogenes Laertius, Zeno joked, “Now that I’ve suffered shipwreck, I’m on a good\njourney,” or according to another account, “You’ve done well, Fortune, driving me thus to philosophy,” he\nreportedly said.\nThe Stoics weren’t being hypothetical when they said we ought to act with a reverse clause and that\neven the most unfortunate events can turn out to be for the best. The entire philosophy is founded on that\nidea!",
    date: "August 26th",
    docId: "87.1",
    quote:
      " “I was shipwrecked before I even boarded . . . the journey showed me this—how much of what we have is unnecessary, and how easily we can decide to rid ourselves of these things whenever it’s necessary, never suffering the loss.”",
    title: "SEEKING OUT SHIPWRECKS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "These three parts—the moral, the natural, and the rational—have one aim. As different as they are,\nthey have the same purpose: to help you live a good life ruled by reason.\nNot in the future, but right now.",
    date: "October 26th",
    docId: "89.9",
    quote:
      " “The best and the greatest number of authors have asserted that philosophy consists of three parts: the moral, the natural, and the rational. The first puts the soul in order. The second thoroughly examines the natural order of things. The third inquires into the proper meaning of words, and their arrangements and proofs which keep falsehoods from creeping in to displace truth.”",
    title: "THREE PARTS, ONE AIM",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "All things die. Not just people but companies, kingdoms, religions, and ideas—eventually. The Roman\nRepublic lasted 450 years. The Roman Empire, of which Marcus Aurelius was considered to be one\nof the “five good emperors,” lasted 500 years. The longest recorded life of a human being is 122 years.\nThe average life expectancy in the United States is a little over seventy-eight years. In other countries, in\nother eras, it has been more and it has been less. But in the end, we all succumb, as Marcus said, to the\nrhythm of events—of which there is always a final, determined beat. There is no need to dwell on this\nfact, but there is no point in ignoring it either.",
    date: "December 12th",
    docId: "7.49",
    quote:
      " “Walk the long gallery of the past, of empires and kingdoms succeeding each other without number. And you can also see the future, for surely it will be exactly the same, unable to deviate from the present rhythm. It’s all one whether we’ve experienced forty years or an aeon. What more is there to see?”",
    title: "THE BEAT GOES ON",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The answer to the question “Why did you do the right thing?” should always be “Because it was the\nright thing to do.” After all, when you hear or see another person do that—especially when they\nmight have endured some hardship or difficulty as a consequence for doing that right thing—do you not\nthink, There, that is a human being at their finest?\nSo why on earth do you need thanks or recognition for having done the right thing? It’s your job.",
    date: "July 15th",
    docId: "7.73",
    quote:
      " “When you’ve done well and another has benefited by it, why like a fool do you look for a third thing on top—credit for the good deed or a favor in return?”",
    title: "DOING THE RIGHT THING IS ENOUGH",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We want things to go perfectly, so we tell ourselves that we’ll get started once the conditions are\nright, or once we have our bearings. When, really, it’d be better to focus on making do with how\nthings actually are.\nMarcus reminded himself: “Don’t await the perfection of Plato’s Republic.” He wasn’t expecting the\nworld to be exactly the way he wanted it to be, but Marcus knew instinctively, as the Catholic philosopher\nJosef Pieper would later write, that “he alone can do good who knows what things are like and what their\nsituation is.”\nToday, we won’t let our honest understanding of the world stop us from trying to make the best of it.\nNor will we let petty annoyances and minor obstacles get in the way of the important job we have to do.",
    date: "August 1st",
    docId: "8.50",
    quote:
      " “That cucumber is bitter, so toss it out! There are thorns on the path, then keep away! Enough said. Why ponder the existence of nuisance? Such thinking would make you a laughing-stock to the true student of Nature, just as a carpenter or cobbler would laugh if you pointed out the sawdust and chips on the floors of their shops. Yet while those shopkeepers have dustbins for disposal, Nature has no need of them.”",
    title: "DON’T GO EXPECTING PERFECTION",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "What we consider to be harmless indulgences can easily become full-blown addictions. We start\nwith coffee in the morning, and soon enough we can’t start the day without it. We check our email\nbecause it’s part of our job, and soon enough we feel the phantom buzz of the phone in our pocket every\nfew seconds. Soon enough, these harmless habits are running our lives.\nThe little compulsions and drives we have not only chip away at our freedom and sovereignty, they\ncloud our clarity. We think we’re in control—but are we really? As one addict put it, addiction is when\nwe’ve “lost the freedom to abstain.” Let us reclaim that freedom.\nWhat that addiction is for you can vary: Soda? Drugs? Complaining? Gossip? The Internet? Biting\nyour nails? But you must reclaim the ability to abstain because within it is your clarity and self-control.",
    date: "January 8th",
    docId: "74.12b–13",
    quote:
      " “We must give up many things to which we are addicted, considering them to be good. Otherwise, courage will vanish, which should continually test itself. Greatness of soul will be lost, which can’t stand out unless it disdains as petty what the mob regards as most desirable.",
    title: "SEEING OUR ADDICTIONS",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "The samurai swordsman Musashi made a distinction between our “perceiving eye” and our “observing\neye.” The observing eye sees what is. The perceiving eye sees what things supposedly mean. Which\none do you think causes us the most anguish?\nAn event is inanimate. It’s objective. It simply is what it is. That’s what our observing eye sees.\nThis will ruin me. How could this have happened? Ugh! It’s so-and-so’s fault. That’s our perceiving\neye at work. Bringing disturbance with it and then blaming it on the event.",
    date: "April 10th",
    docId: "5",
    quote:
      " “It isn’t events themselves that disturb people, but only their judgments about them.”",
    title: "JUDGMENTS CAUSE DISTURBANCE",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Most people resist the idea of a true self-estimate, probably because they fear it might mean\ndowngrading some of their beliefs about who they are and what they’re capable of. As Goethe’s\nmaxim goes, it is a great failing “to see yourself as more than you are.” How could you really be\nconsidered self-aware if you refuse to consider your weaknesses?\nDon’t fear self-assessment because you’re worried you might have to admit some things about\nyourself. The second half of Goethe’s maxim is important too. He states that it is equally damaging to\n“value yourself at less than your true worth.” Is it not equally common to be surprised at how well we’re\nable to handle a previously feared scenario? The way that we’re able to put aside the grief for a loved\none and care for others—though we always thought we’d be wrecked if something were to happen to our\nparents or a sibling. The way we’re able to rise to the occasion in a stressful situation or a life-changing\nopportunity.\nWe underestimate our capabilities just as much and just as dangerously as we overestimate other\nabilities. Cultivate the ability to judge yourself accurately and honestly. Look inward to discern what\nyou’re capable of and what it will take to unlock that potential.",
    date: "March 2nd",
    docId: "5.2",
    quote:
      " “Above all, it is necessary for a person to have a true self-estimate, for we commonly think we can do more than we really can.”",
    title: "ACCURATE SELF-ASSESSMENT",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Philosophy is intimidating. Where does one start? With books? With lectures? With the sale of your\nworldly possessions?\nNone of these things. Epictetus is saying that one becomes a philosopher when they begin to exercise\ntheir guiding reason and start to question the emotions and beliefs and even language that others take for\ngranted. It is thought that an animal has self-awareness when it is able to fully recognize itself in a mirror.\nPerhaps we could say that we begin our journey into philosophy when we become aware of the ability to\nanalyze our own minds.\nCan you start with that step today? When you do, you’ll find that from it we really come alive, that we\nlive lives—to paraphrase Socrates—that are actually worth living.",
    date: "March 1st",
    docId: "1.26.15",
    quote:
      " “An important place to begin in philosophy is this: a clear perception of one’s own ruling principle.”",
    title: "WHERE PHILOSOPHY BEGINS",
  },
  {
    author: "—PLUTARCH",
    book: "CATO THE YOUNGER",
    commentary:
      "It’s easy to act—to just dive in. It’s harder to stop, to pause, to think: No, I’m not sure I need to do that\nyet. I’m not sure I am ready. As Cato entered politics, many expected swift and great things from him\n—stirring speeches, roaring condemnations, wise analyses. He was aware of this pressure—a pressure\nthat exists on all of us at all times—and resisted. It’s easy to pander to the mob (and to our ego).\nInstead, he waited and prepared. He parsed his own thoughts, made sure he was not reacting\nemotionally, selfishly, ignorantly, or prematurely. Only then would he speak—when he was confident that\nhis words were worthy of being heard.\nTo do this requires awareness. It requires us to stop and evaluate ourselves honestly. Can you do that?",
    date: "February 22nd",
    docId: "4",
    quote:
      " “Cato practiced the kind of public speech capable of moving the masses, believing proper political philosophy takes care like any great city to maintain the warlike element. But he was never seen practicing in front of others, and no one ever heard him rehearse a speech. When he was told that people blamed him for his silence, he replied, ‘Better they not blame my life. I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.’”",
    title: "WHAT’S BETTER LEFT UNSAID",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Instead of seeing philosophy as an end to which one aspires, see it as something one applies. Not\noccasionally, but over the course of a life—making incremental progress along the way. Sustained\nexecution, not shapeless epiphanies.\nEpictetus loved to shake his students out of their smug satisfaction with their own progress. He wanted\nto remind them—and now you—of the constant work and serious training needed every day if we are ever\nto approach that perfect form.\nIt’s important for us to remember in our own journey to self-improvement: one never arrives. The sage\n—the perfect Stoic who behaves perfectly in every situation—is an ideal, not an end.",
    date: "May 17th",
    docId: "2.19.24–25a",
    quote:
      " “Show me someone sick and happy, in danger and happy, dying and happy, exiled and happy, disgraced and happy. Show me! By God, how much I’d like to see a Stoic. But since you can’t show me someone that perfectly formed, at least show me someone actively forming themselves so, inclined in this way. . . . Show me!”",
    title: "THE STOIC IS A WORK IN PROGRESS",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Political winds could change in an instant, depriving you of the most basic freedoms you take for\ngranted. Or, no matter who you are or how safely you’ve lived your life, there’s someone out there\nwho would rob and kill you for a couple dollars.\nAs it’s written in the timeless Epic of Gilgamesh:\n“Man is snapped off like a reed in the canebrake!\nThe comely young man, the pretty young woman—\nAll too soon in their prime Death abducts them!”\nDeath is not the only unexpected interruption we might face—our plans can be dashed to pieces by a\nmillion things. Today might be a bit more pleasant if you ignore those possibilities, but at what cost?",
    date: "December 5th",
    docId: "21",
    quote:
      " “Keep death and exile before your eyes each day, along with everything that seems terrible—by doing so, you’ll never have a base thought nor will you have excessive desire.”",
    title: "THE BENEFITS OF SOBERING THOUGHTS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The guiding reason of the world—the Stoics called this the logos—works in mysterious ways.\nSometimes, the logos gives us what we want, other times it gives us precisely what we do not want.\nIn either case, they believed that the logos was an all-powerful force that governed the universe.\nThere is a helpful analogy to explain the logos: We are like a dog leashed to a moving cart. The\ndirection of the cart will determine where we go. Depending on the length of the leash, we also have a\nfair amount of room to explore and determine the pace, but ultimately what each of us must choose is\nwhether we will go willingly or be painfully dragged. Which will it be?\nCheerful acceptance? Or ignorant refusal? In the end, they amount to the same.",
    date: "November 30th",
    docId: "10.12b",
    quote:
      " “The person who follows reason in all things will have both leisure and a readiness to act—they are at once both cheerful and self-composed.”",
    title: "FOLLOW THE LOGOS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Have you ever heard the expression “Don’t let perfect be the enemy of good enough”? The idea is not\nto settle or compromise your standards, but rather not to become trapped by idealism.\nThe community organizer Saul Alinsky opens his book Rules for Radicals with a pragmatic but\ninspiring articulation of that idea:\n“As an organizer I start from where the world is, as it is, not as I would like it to be. That we\naccept the world as it is does not in any sense weaken our desire to change it into what we\nbelieve it should be—it is necessary to begin where the world is if we are going to change it to\nwhat we think it should be.”\nThere is plenty that you could do right now, today, that would make the world a better place. There are\nplenty of small steps that, were you to take them, would help move things forward. Don’t excuse yourself\nfrom doing them because the conditions aren’t right or because a better opportunity might come along\nsoon. Do what you can, now. And when you’ve done it, keep it in perspective, don’t overblow the results.\nShun both ego and excuse, before and after.",
    date: "August 8th",
    docId: "9.29.(4)",
    quote:
      " “Do now what nature demands of you. Get right to it if that’s in your power. Don’t look around to see if people will know about it. Don’t await the perfection of Plato’s Republic, but be satisfied with even the smallest step forward and regard the outcome as a small thing.”",
    title: "START WITH WHERE THE WORLD IS",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "The Stoics remind us that there really is no such thing as an objectively good or bad occurrence. When\na billionaire loses $1 million in market fluctuation, it’s not the same as when you or I lose a million\ndollars. Criticism from your worst enemy is received differently than negative words from a spouse. If\nsomeone sends you an angry email but you never see it, did it actually happen? In other words, these\nsituations require our participation, context, and categorization in order to be “bad.”\nOur reaction is what actually decides whether harm has occurred. If we feel that we’ve been wronged\nand get angry, of course that’s how it will seem. If we raise our voice because we feel we’re being\nconfronted, naturally a confrontation will ensue.\nBut if we retain control of ourselves, we decide whether to label something good or bad. In fact, if\nthat same event happened to us at different points in our lifetime, we might have very different reactions.\nSo why not choose now to not apply these labels? Why not choose not to react?",
    date: "February 24th",
    docId: "20",
    quote:
      " “Keep in mind that it isn’t the one who has it in for you and takes a swipe that harms you, but rather the harm comes from your own belief about the abuse. So when someone arouses your anger, know that it’s really your own opinion fueling it. Instead, make it your first response not to be carried away by such impressions, for with time and distance self-mastery is more easily achieved.”",
    title: "THE REAL SOURCE OF HARM",
  },
  {
    author: "—ZENO, QUOTED IN DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "You can always get up after you fall, but remember, what has been said can never be unsaid.\nEspecially cruel and hurtful things.",
    date: "October 5th",
    docId: "7.1.26",
    quote: " “Better to trip with the feet than with the tongue.”",
    title: "WORDS CAN’T BE UNSAID",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "When you look back at some of the most impressive, even scary, things that you’ve done or endured,\nhow were they possible? How were you able to see past the danger or the poor odds? As Marcus\ndescribed, you were too busy with the details to let the whole sweep of the situation crush you. In fact,\nyou probably didn’t even think about it at the time.\nA character in Chuck Palahniuk’s novel Lullaby says, “The trick to forgetting the big picture is to look\nat everything close up.” Sometimes grasping the big picture is important, and the Stoics have helped us\nwith that before. A lot of times, though, it’s counterproductive and overwhelming to be thinking of\neverything that lies ahead. So by focusing exclusively on the present, we’re able to avoid or remove those\nintimidating or negative thoughts from our frame of view.\nA man walking a tightrope tries not to think about how high up he is. An undefeated team tries not to\nthink about their perfect winning streak. Like us, they’re better off putting one foot in front of the other and\nconsidering everything else to be extraneous.",
    date: "June 19th",
    docId: "8.36",
    quote:
      " “Don’t let your reflection on the whole sweep of life crush you. Don’t fill your mind with all the bad things that might still happen. Stay focused on the present situation and ask yourself why it’s so unbearable and can’t be survived.”",
    title: "STAY FOCUSED ON THE PRESENT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Ernest Hemingway opens his book The Sun Also Rises with a Bible verse: “One generation passeth,\nand another generation cometh; but the earth abideth forever. The sun also riseth, and the sun goeth\ndown, and resteth to the place where he arose.” It was this passage, his editor would say, that “contained\nall the wisdom of the ancient world.”\nAnd what wisdom is that? One of the most striking things about history is just how long human beings\nhave been doing what they do. Though certain attitudes and practices have come and gone, what’s left are\npeople—living, dying, loving, fighting, crying, laughing.\nBreathless media reports or popular books often perpetuate the belief that we’ve reached the apex of\nhumanity, or that this time, things really are different. The irony is that people have believed that for\ncenturies.\nStrong people resist this notion. They know that with a few exceptions, things are the same as they’ve\nalways been and always will be. You’re just like the people who came before you, and you’re but a brief\nstopover until the people just like you who will come after. The earth abides forever, but we will come\nand go.",
    date: "November 10th",
    docId: "4.32",
    quote:
      " “Think by way of example on the times of Vespasian, and you’ll see all these things: marrying, raising children, falling ill, dying, wars, holiday feasts, commerce, farming, flattering, pretending, suspecting, scheming, praying that others die, grumbling over one’s lot, falling in love, amassing fortunes, lusting after office and power. Now that life of theirs is dead and gone . . . the times of Trajan, again the same . . .”",
    title: "ALWAYS THE SAME",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "After all you’ve read, it might be tempting to think: This stuff is great. I get it. I’m a Stoic. But it’s not\nthat easy. Just because you agree with the philosophy doesn’t mean the roots have fully taken hold in\nyour mind.\nFooling with books so you can sound smart or have an intimidating library is like tending a garden to\nimpress your neighbors. Growing one to feed a family? That’s a pure and profitable use of your time. The\nseeds of Stoicism are long underground. Do the work required to nurture and tend to them. So that they—\nand you—are prepared and sturdy for the hard winters of life.",
    date: "September 15th",
    docId: "4.8.35b–37",
    quote:
      " “First practice not letting people know who you are—keep your philosophy to yourself for a bit. In just the manner that fruit is produced—the seed buried for a season, hidden, growing gradually so it may come to full maturity. But if the grain sprouts before the stalk is fully developed, it will never ripen. . . . That is the kind of plant you are, displaying fruit too soon, and the winter will kill you.”",
    title: "A GARDEN IS NOT FOR SHOW",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We’ve all chased things we thought would matter. At some point, we all thought that money would be\nthe answer, that success was the highest prize, that the undying love of a beautiful person would\nfinally make us feel warm inside. What do we find when we actually attain these sacred objects? Not that\nthey are empty or meaningless—only those who have never had them think that—but what we find is that\nthey are not enough.\nMoney creates problems. Climbing one mountain exposes another, higher peak. There is never enough\nlove.\nThere is something better out there: real virtue. It is its own reward. Virtue is the one good that reveals\nitself to be more than we expect and something that one cannot have in degrees. We simply have it or we\ndon’t. And that is why virtue—made up as it is of justice, honesty, discipline, and courage—is the only\nthing worth striving for.",
    date: "July 27th",
    docId: "3.6.1",
    quote:
      " “Indeed, if you find anything in human life better than justice, truth, self-control, courage—in short, anything better than the sufficiency of your own mind, which keeps you acting according to the demands of true reason and accepting what fate gives you outside of your own power of choice—I tell you, if you can see anything better than this, turn to it heart and soul and take full advantage of this greater good you’ve found.”",
    title: "WHERE IS ANYTHING BETTER?",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Modern philosopher Nassim Taleb has warned of the “narrative fallacy”—the tendency to assemble\nunrelated events of the past into stories. These stories, however gratifying to create, are inherently\nmisleading. They lead to a sense of cohesion and certainty that isn’t real.\nIf that’s too heady, remember that as Epictetus points out, there is another reason not to tell stories\nabout your past. It’s boring, annoying, and self-absorbed. It might make you feel good to dominate the\nconversation and make it all about you, but how do you think it is for everyone else? Do you think people\nare really enjoying the highlights of your high school football days? Is this really the time for another\nexaggerated tale of your sexual prowess?\nTry your best not to create this fantasy bubble—live in what’s real. Listen and connect with people,\ndon’t perform for them.",
    date: "March 6th",
    docId: "33.14",
    quote:
      " “In public avoid talking often and excessively about your accomplishments and dangers, for however much you enjoy recounting your dangers, it’s not so pleasant for others to hear about your affairs.”",
    title: "DON’T TELL YOURSELF STORIES",
  },
  {
    author: "—SENECA",
    book: "OEDIPUS",
    commentary:
      "As the CEO of Charles Schwab, Walt Bettinger hires hundreds of people each year and interviews\nhundreds more. Over his lifetime, we can safely assume he’s had his share of hits, misses, and\nsurprises when it comes to bringing people on board. But consider one technique he’s used as he’s gotten\nolder: he takes a candidate to breakfast and asks the restaurant’s manager to purposely mess up the\ncandidate’s breakfast order.\nHe’s testing to see how they react. Do they get upset? Do they act rudely? Do they let this little event\nspoil the meeting? Do they handle the inconvenience with grace and kindness?\nHow you handle even minor adversity might seem like nothing, but, in fact, it reveals everything.",
    date: "June 27th",
    docId: "80",
    quote:
      " “How does it help, my husband, to make misfortune heavier by complaining about it? This is more fit for a king—to seize your adversities head on. The more precarious his situation, the more imminent his fall from power, the more firmly he should be resolved to stand and fight. It isn’t manly to retreat from fortune.”",
    title: "ADVERSITY REVEALS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Stop by a comedy club any weekend night in New York or Los Angeles and you’re likely to find some\nof the world’s biggest and most commercially successful comedians in there, workshopping their\ncraft for just a handful of people. Though they make a fortune in movies or on the road, there they are,\npracticing the most basic form of their art.\nIf you ask any of them: “Why are you doing this? Why do you still perform?” The answer is usually:\n“Because I’m good at it. Because I love it. Because I want to get better. Because I thrive on connecting\nwith an audience. Because I just can’t not do it.”\nIt’s not work for them to get up on stage at Carolines or the Comedy Cellar at 1 a.m. It’s invigorating.\nThey don’t have to do it. They’re free, and they choose this.\nWhatever humble art you practice: Are you sure you’re making time for it? Are you loving what you\ndo enough to make the time? Can you trust that if you put in the effort, the rest will take care of itself?\nBecause it will. Love the craft, be a craftsman.",
    date: "July 10th",
    docId: "4.31",
    quote:
      " “Love the humble art you have learned, and take rest in it. Pass through the remainder of your days as one who whole-heartedly entrusts all possessions to the gods, making yourself neither a tyrant nor a slave to any person.”",
    title: "LOVE THE HUMBLE ART",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Stoics believed, above all else, that our job on this earth is to be a good human being. It is a basic\nduty, yet we are experts at coming up with excuses for avoiding it.\nTo quote Belichick again: “Do your job.”",
    date: "May 31st",
    docId: "11.5",
    quote: " “What is your vocation? To be a good person.”",
    title: "WE HAVE BUT ONE OBLIGATION",
  },
  {
    author: "—SENECA",
    book: "OEDIPUS",
    commentary:
      "“Only the paranoid survive,” Andy Grove, a former CEO of Intel, famously said. It might be true.\nBut we also know that the paranoid often destroy themselves quicker and more spectacularly than\nany enemy. Seneca, with his access and insight into the most powerful elite in Rome, would have seen this\ndynamic play out quite vividly. Nero, the student whose excesses Seneca tried to curb, killed not only his\nown mother and wife but eventually turned on Seneca, his mentor, too.\nThe combination of power, fear, and mania can be deadly. The leader, convinced that he might be\nbetrayed, acts first and betrays others first. Afraid that he’s not well liked, he works so hard to get others\nto like him that it has the opposite effect. Convinced of mismanagement, he micromanages and becomes\nthe source of the mismanagement. And on and on—the things we fear or dread, we blindly inflict on\nourselves.\nThe next time you are afraid of some supposedly disastrous outcome, remember that if you don’t\ncontrol your impulses, if you lose your self-control, you may be the very source of the disaster you so\nfear. It has happened to smarter and more powerful and more successful people. It can happen to us too.",
    date: "February 7th",
    docId: "992",
    quote:
      " “Many are harmed by fear itself, and many may have come to their fate while dreading fate.”",
    title: "FEAR IS A SELF-FULFILLING PROPHECY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The author Raymond Chandler was describing most of us when he wrote in a letter to his publisher, “I\nnever looked back, although I had many uneasy periods looking forward.” Thomas Jefferson once\njoked in a letter to John Adams, “How much pain have cost us the evils which have never happened!”\nAnd Seneca would put it best: “There is nothing so certain in our fears that’s not yet more certain in the\nfact that most of what we dread comes to nothing.”\nMany of the things that upset us, the Stoics believed, are a product of the imagination, not reality. Like\ndreams, they are vivid and realistic at the time but preposterous once we come out of it. In a dream, we\nnever stop to think and say: “Does this make any sense?” No, we go along with it. The same goes with our\nflights of anger or fear or other extreme emotions.\nGetting upset is like continuing the dream while you’re awake. The thing that provoked you wasn’t\nreal—but your reaction was. And so from the fake comes real consequences. Which is why you need to\nwake up right now instead of creating a nightmare.",
    date: "February 15th",
    docId: "6.31",
    quote:
      " “Clear your mind and get a hold on yourself and, as when awakened from sleep and realizing it was only a bad dream upsetting you, wake up and see that what’s there is just like those dreams.”",
    title: "ONLY BAD DREAMS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The anxious father, worried about his children. What does he want? A world that is always safe. A\nfrenzied traveler—what does she want? For the weather to hold and for traffic to part so she can\nmake her flight. A nervous investor? That the market will turn around and an investment will pay off.\nAll of these scenarios hold the same thing in common. As Epictetus says, it’s wanting something\noutside our control. Getting worked up, getting excited, nervously pacing—these intense, pained, and\nanxious moments show us at our most futile and servile. Staring at the clock, at the ticker, at the next\ncheckout lane over, at the sky—it’s as if we all belong to a religious cult that believes the gods of fate\nwill only give us what we want if we sacrifice our peace of mind.\nToday, when you find yourself getting anxious, ask yourself: Why are my insides twisted into knots?\nAm I in control here or is my anxiety? And most important: Is my anxiety doing me any good?",
    date: "February 3rd",
    docId: "2.13.1",
    quote:
      " “When I see an anxious person, I ask myself, what do they want? For if a person wasn’t wanting something outside of their own control, why would they be stricken by anxiety?”",
    title: "THE SOURCE OF YOUR ANXIETY",
  },
  {
    author: "—SENECA",
    book: "ON CONSOLATION TO HELVIA",
    commentary:
      "The author F. Scott Fitzgerald, who often glamorized the lifestyles of the rich and famous in books like\nThe Great Gatsby, opens one of his short stories with the now classic lines: “Let me tell you about\nthe very rich. They are different from you and me.” A few years after this story was published, his friend\nErnest Hemingway teased Fitzgerald by writing, “Yes, they have more money.”\nThat’s what Seneca is reminding us. As someone who was one of the richest men in Rome, he knew\nfirsthand that money only marginally changes life. It doesn’t solve the problems that people without it\nseem to think it will. In fact, no material possession will. External things can’t fix internal issues.\nWe constantly forget this—and it causes us so much confusion and pain. As Hemingway would later\nwrite of Fitzgerald, “He thought [the rich] were a special glamorous race and when he found they weren’t\nit wrecked him as much as any other thing that wrecked him.” Without a change the same will be true for\nus.",
    date: "January 23rd",
    docId: "12. 1.b–2",
    quote:
      " “Let’s pass over to the really rich—how often the occasions they look just like the poor! When they travel abroad they must restrict their baggage, and when haste is necessary, they dismiss their entourage. And those who are in the army, how few of their possessions they get to keep . . .”",
    title: "THE TRUTH ABOUT MONEY",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Is this observation the origin of that famous expression about frustrating news: “I don’t know whether to\nlaugh or cry?” The Stoics saw little purpose in getting angry or sad about things that are indifferent to\nour feelings. Especially when those feelings end up making us feel worse.\nIt’s also another bit of evidence that the Stoics were hardly some depressing, bitter group of old men.\nEven when things were really bad, when the world made them want to weep in despair or rage, they\nchose to laugh about it.\nLike Democritus, we can make that same choice. There is more humor than hate to be found in just\nabout every situation. And at least humor is productive—making things less heavy, not more so.",
    date: "August 27th",
    docId: "15.2",
    quote:
      " “Heraclitus would shed tears whenever he went out in public—Democritus laughed. One saw the whole as a parade of miseries, the other of follies. And so, we should take a lighter view of things and bear them with an easy spirit, for it is more human to laugh at life than to lament it.”",
    title: "LAUGH, OR CRY?",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "The next time someone gets upset near you—crying, yelling, breaking something, being pointed or\ncruel—watch how quickly this statement will stop them cold: “I hope this is making you feel better.”\nBecause, of course, it isn’t. Only in the bubble of extreme emotion can we justify any of that kind of\nbehavior—and when called to account for it, we usually feel sheepish or embarrassed.\nIt’s worth applying that standard to yourself. The next time you find yourself in the middle of a\nfreakout, or moaning and groaning with flulike symptoms, or crying tears of regret, just ask: Is this\nactually making me feel better? Is this actually relieving any of the symptoms I wish were gone?",
    date: "February 8th",
    docId: "78.17",
    quote:
      " “You cry, I’m suffering severe pain! Are you then relieved from feeling it, if you bear it in an unmanly way?”",
    title: "DID THAT MAKE YOU FEEL BETTER?",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Even in his own time, Seneca was criticized for preaching Stoic virtues while accumulating one of the\nlargest fortunes in Rome. Seneca was so rich that some historians speculate that major loans he made\nto the inhabitants of what is now Britain caused what became a horrifically brutal uprising there. His\ncritics’ derisive nickname for him was “The Opulent Stoic.”\nSeneca’s response to this criticism is pretty simple: he might have wealth, but he didn’t need it. He\nwasn’t dependent on it or addicted to it. Nor, despite his large bank account, was he considered to be\nanything close to Rome’s most lavish spenders and pleasure hunters. Whether his rationalization was true\nor not (or whether he was a tad hypocritical), his is a decent prescription for navigating today’s\nmaterialistic and wealth-driven society.\nThis is the pragmatic instead of the moralistic approach to wealth.\nWe can still live well without becoming slaves to luxury. And we don’t need to make decisions that\nforce us to continue to work and work and work and drift further from study and contemplation in order to\nget more money to pay for the things we don’t need. There is no rule that says financial success must mean\nthat you live beyond your means. Remember: humans can be happy with very little.",
    date: "August 28th",
    docId: "119.15b",
    quote:
      " “The founder of the universe, who assigned to us the laws of life, provided that we should live well, but not in luxury. Everything needed for our well-being is right before us, whereas what luxury requires is gathered by many miseries and anxieties. Let us use this gift of nature and count it among the greatest things.”",
    title: "THE OPULENT STOIC",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "You messed up a little. Or maybe you messed up a lot.\nSo? That doesn’t change the philosophy that you know. It’s not as if your reasoned choice has\npermanently abandoned you. Rather, it was you who temporarily abandoned it.\nRemember that the tools and aims of our training are unaffected by the turbulence of the moment. Stop.\nRegain your composure. It’s waiting for you.",
    date: "February 28th",
    docId: "3.3.20–22",
    quote:
      " “The soul is like a bowl of water, and our impressions are like the ray of light falling upon the water. When the water is troubled, it appears that the light itself is moved too, but it isn’t. So, when a person loses their composure it isn’t their skills and virtues that are troubled, but the spirit in which they exist, and when that spirit calms down so do those things.”",
    title: "WHEN YOU LOSE CONTROL",
  },
  {
    author: "—SENECA",
    book: "THYESTES",
    commentary:
      "The novelist Cormac McCarthy was living in a motel room when he heard a knock at the door. It was a\nmessenger—he’d been awarded the MacArthur “genius” grant and $250,000. Unexpected events can\nbe good as well as bad.\nWho could dream of such an unexpected twist? Who but Clotho, one of the three Greek goddesses of\nfate, who “spins” the thread of human life? To the ancients, she was the one who decided the course of the\nevents of our lives—some good, some bad. As the playwright Aeschylus wrote, “When the gods send\nevil, one cannot escape it.” The same was true for great destiny and good fortune.\nTheir resigned attitude might seem strange to us today, but they understood who was really in control\n(not them, not us!). No amount of prosperity, no amount of difficulty, is certain or forever. A triumph\nbecomes a trial, a trial becomes a triumph. Life can change in an instant. Remember, today, how often it\ndoes.",
    date: "November 6th",
    docId: "613",
    quote:
      " “If the breaking day sees someone proud, The ending day sees them brought low. No one should put too much trust in triumph, No one should give up hope of trials improving. Clotho mixes one with the other and stops Fortune from resting, spinning every fate around. No one has had so much divine favor That they could guarantee themselves tomorrow. God keeps our lives hurtling on, Spinning in a whirlwind.”",
    title: "SOMEONE ELSE IS SPINNING THE THREAD",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The person sitting next to you on the plane, the one who is loudly chattering and knocking around in\nyour space? The one you’re grinding your teeth about, hating from the depth of your soul because\nthey’re rude, ignorant, obnoxious? In these situations, you might feel it takes everything you have to\nrestrain yourself from murdering them.\nIt’s funny how that thought comes into our heads before, you know, politely asking them to stop, or\nmaking the minor scene of asking for a different seat. We’d rather be pissed off, bitter, raging inside than\nrisk an awkward conversation that might actually help this person and make the world a better place. We\ndon’t just want people to be better, we expect it to magically happen—that we can simply will other\npeople to change, burning holes into their skull with our angry stare.\nAlthough when you think about it that way, it makes you wonder who the rude one actually is.",
    date: "October 14th",
    docId: "5.28",
    quote:
      " “Are you angry when someone’s armpits stink or when their breath is bad? What would be the point? Having such a mouth and such armpits, there’s going to be a smell emanating. You say, they must have sense, can’t they tell how they are offending others? Well, you have sense too, congratulations! So, use your natural reason to awaken theirs, show them, call it out. If the person will listen, you will have cured them without useless anger. No drama nor unseemly show required.”",
    title: "DON’T GET MAD. HELP",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "It is easy to get wrapped up in our own opinions of things. It’s as if we’re adhering to invisible scripts\n—following instructions or patterns we don’t even understand. The more you question these scripts and\nthe more you subject them to the rigorous test of your education, the more you’ll be your own compass.\nYou’ll have convictions and thoughts that are your own and belong to no one else.\nCharacter is a powerful defense in a world that would love to be able to seduce you, buy you, tempt\nyou, and change you. If you know what you believe and why you believe it, you’ll avoid poisonous\nrelationships, toxic jobs, fair-weather friends, and any number of ills that afflict people who haven’t\nthought through their deepest concerns. That’s your education. That’s why you do this work.",
    date: "April 30th",
    docId: "1.2.5–7",
    quote:
      " “Just as what is considered rational or irrational differs for each person, in the same way what is good or evil and useful or useless differs for each person. This is why we need education, so that we might learn how to adjust our preconceived notions of the rational and irrational in harmony with nature. In sorting this out, we don’t simply rely on our estimate of the value of external things, but also apply the rule of what is in keeping with one’s character.”",
    title: "WHAT IS IN KEEPING WITH YOUR CHARACTER?",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Seneca tells an amazing story about an obscenely wealthy Roman who was carried around by slaves\non a litter. On one occasion, after being lifted out of a bath, the Roman asked, “Am I sitting down\nyet?” Seneca’s point was essentially: What kind of sad pathetic life is it if you’re so disconnected from\nthe world that you don’t even know whether you’re on the ground? How did the man know whether he\nwas even alive at all?\nMost of us are afraid of dying. But sometimes this fear begs the question: To protect what exactly? For\na lot of people the answer is: hours of television, gossiping, gorging, wasting potential, reporting to a\nboring job, and on and on and on. Except, in the strictest sense, is this actually a life? Is this worth\ngripping so tightly and being afraid of losing?\nIt doesn’t sound like it.",
    date: "December 23rd",
    docId: "77.18",
    quote:
      " “You are afraid of dying. But, come now, how is this life of yours anything but death?”",
    title: "WHAT ARE YOU SO AFRAID OF LOSING?",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "This morning, remind yourself of what is in your control and what’s not in your control. Remind\nyourself to focus on the former and not the latter.\nBefore lunch, remind yourself that the only thing you truly possess is your ability to make choices (and\nto use reason and judgment when doing so). This is the only thing that can never be taken from you\ncompletely.\nIn the afternoon, remind yourself that aside from the choices you make, your fate is not entirely up to\nyou. The world is spinning and we spin along with it—whichever direction, good or bad.\nIn the evening, remind yourself again how much is outside of your control and where your choices\nbegin and end.\nAs you lie in bed, remember that sleep is a form of surrender and trust and how easily it comes. And\nprepare to start the whole cycle over again tomorrow.",
    date: "January 12th",
    docId: "4.4.39",
    quote:
      " “Keep this thought at the ready at daybreak, and through the day and night—there is only one path to happiness, and that is in giving up all outside of your sphere of choice, regarding nothing else as your possession, surrendering all else to God and Fortune.”",
    title: "THE ONE PATH TO SERENITY",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Simple is rarely easy. But now that you have these rules, make it your duty to put them into practice—\nwith the first item on your to-do list, with the first conversation you have, with your soul, and, of\ncourse, with the life you make for yourself. Not just today, but every day.\nWrite that on the blackboard and don’t forget it.",
    date: "July 12th",
    docId: "8.51",
    quote:
      " “In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.”",
    title: "SOME SIMPLE RULES",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "What’s the difference between you and the richest person in the world? One has a little more money\nthan the other. What’s the difference between you and the oldest person in the world? One has been\naround a little longer than the other. Same goes for the tallest, smartest, fastest, and on down the line.\nMeasuring ourselves against other people makes acceptance difficult, because we want what they\nhave, or we want how things could have gone, not what we happen to have. But that makes no difference.\nSome might see this line from Marcus as pessimistic, whereas others see it as optimistic. It’s really\njust truth. We’re all here and we’re all going to leave this earth eventually, so let’s not concern ourselves\nwith petty differences in the meantime. We have too much to do.",
    date: "November 26th",
    docId: "4.15",
    quote:
      " “We are like many pellets of incense falling on the same altar. Some collapse sooner, others later, but it makes no difference.”",
    title: "THE ALTAR OF NO DIFFERENCE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The purpose of all our reading and studying is to aid us in the pursuit of the good life (and death). At\nsome point, we must put our books aside and take action. So that, as Seneca put it, the “words\nbecome works.” There is an old saying that a “scholar made is a soldier spoiled.” We want to be both\nscholars and soldiers—soldiers in the good fight.\nThat’s what’s next for you. Move forward, move onward. Another book isn’t the answer. The right\nchoices and decisions are. Who knows how much time you have left, or what awaits us tomorrow?",
    date: "December 31st",
    docId: "3.14",
    quote:
      " “Stop wandering about! You aren’t likely to read your own notebooks, or ancient histories, or the anthologies you’ve collected to enjoy in your old age. Get busy with life’s purpose, toss aside empty hopes, get active in your own rescue—if you care for yourself at all—and do it while you can.”",
    title: "GET ACTIVE IN YOUR OWN RESCUE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It’s never great to judge other people, but it’s worth taking a second to investigate how a life dedicated\nto indulging every whim actually works out. The writer Anne Lamott jokes in Bird by Bird, “Ever\nwonder what God thinks of money? Just look at the people he gives it to.” The same goes for pleasure.\nLook at the dictator and his harem filled with plotting, manipulative mistresses. Look how quickly the\npartying of a young starlet turns to drug addiction and a stalled career.\nAsk yourself: Is that really worth it? Is it really that pleasurable?\nConsider that when you crave something or contemplate indulging in a “harmless” vice.",
    date: "February 20th",
    docId: "6.34",
    quote:
      " “Robbers, perverts, killers, and tyrants—gather for your inspection their so-called pleasures!”",
    title: "THE GRAND PARADE OF DESIRE",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Have you ever been hopelessly losing a game that suddenly broke wide open and you won?\nRemember that time when you thought you were certain to fail the test, but with an all-nighter and\nsome luck you managed to eke out a decent score? That hunch you pursued that others would have given\nup on—that turned out brilliantly?\nIt’s that kind of energy and creativity and above all faith in yourself that you need right now.\nDefeatism won’t get you anywhere (except defeat). But focusing your entire effort on the little bit of room,\nthe tiny scrap of an opportunity, is your best shot. An aide to Lyndon Johnson once remarked that around\nthe man “there was a feeling—if you did everything, you would win.” Everything. Or as Marcus Aurelius\nput it, if it’s humanly possible, you can do it.",
    date: "August 6th",
    docId: "10.4b",
    quote:
      " “Apply yourself to thinking through difficulties—hard times can be softened, tight squeezes widened, and heavy loads made lighter for those who can apply the right pressure.”",
    title: "THERE IS ALWAYS MORE ROOM TO MANEUVER THAN YOU THINK",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The rage these days is to start your own company—to be an entrepreneur. There is no question,\nbuilding a business from scratch can be an immensely rewarding pursuit. It’s why people put their\nwhole lives into doing it, working countless hours and taking countless risks.\nBut shouldn’t we be just as invested in building ourselves as we would be to any company?\nLike a start-up, we begin as just an idea: we’re incubated, put out into the world where we develop\nslowly, and then, over time, we accumulate partners, employees, customers, investors, and wealth. Is it\nreally so strange to treat your own life as seriously as you might treat an idea for a business? Which one\nreally is the matter of life and death?",
    date: "July 11th",
    docId: "3.5.14",
    quote:
      " “But what does Socrates say? ‘Just as one person delights in improving his farm, and another his horse, so I delight in attending to my own improvement day by day.’”",
    title: "THE START-UP OF YOU",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The comedian Jerry Seinfeld once gave a young comic named Brad Isaac some advice about how to\nwrite and create material. Keep a calendar, he told him, and each day that you write jokes, put an X.\nSoon enough, you get a chain going—and then your job is to simply not break the chain. Success becomes\na matter of momentum. Once you get a little, it’s easier to keep it going.\nWhereas Seinfeld used the chain method to build a positive habit, Epictetus was saying that it can also\nbe used to eliminate a negative one. It’s not all that different than taking sobriety “one day at a time.” Start\nwith one day doing whatever it is, be it managing your temper or wandering eyes or procrastination. Then\ndo the same the following day and the day after that. Build a chain and then work not to break it. Don’t\nruin your streak.",
    date: "May 16th",
    docId: "2.18.11b–14",
    quote:
      " “If you don’t wish to be a hot-head, don’t feed your habit. Try as a first step to remain calm and count the days you haven’t been angry. I used to be angry every day, now every other day, then every third or fourth . . . if you make it as far as 30 days, thank God! For habit is first weakened and then obliterated. When you can say ‘I didn’t lose my temper today, or the next day, or for three or four months, but kept my cool under provocation,’ you will know you are in better health.”",
    title: "THE CHAIN METHOD",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "All of us have used phrases like that before. “I’m going to be straightforward with you here . . .” “I’ll\nbe honest . . .” “No disrespect but . . .” Empty expressions or not, they prompt the question: If you\nhave to preface your remarks with indicators of honesty or directness, what does that say about everything\nelse you say? If you say you’re being honest now, does that mean you usually aren’t?\nWhat if, instead, you cultivated a life and a reputation in which honesty was as bankable as a note\nfrom the U.S. Treasury, as emphatic and explicit as a contract, as permanent as a tattoo? Not only would it\nsave you from needing to use the reassurances that other, less scrupulous people must engage in, it will\nmake you a better person.",
    date: "October 11th",
    docId: "11.15",
    quote:
      " “How rotten and fraudulent when people say they intend to ‘give it to you straight.’ What are you up to, dear friend? It shouldn’t need your announcement, but be readily seen, as if written on your forehead, heard in the ring of your voice, a flash in your eyes—just as the beloved sees it all in the lover’s glance. In short, the straightforward and good person should be like a smelly goat—you know when they are in the room with you.”",
    title: "HONESTY AS OUR DEFAULT",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "In Seneca’s essay on tranquility, he uses the Greek word euthymia, which he defines as “believing in\nyourself and trusting that you are on the right path, and not being in doubt by following the myriad\nfootpaths of those wandering in every direction.” It is this state of mind, he says, that produces tranquility.\nClarity of vision allows us to have this belief. That’s not to say we’re always going to be 100 percent\ncertain of everything, or that we even should be. Rather, it’s that we can rest assured we’re heading\ngenerally in the right direction—that we don’t need to constantly compare ourselves with other people or\nchange our mind every three seconds based on new information.\nInstead, tranquility and peace are found in identifying our path and in sticking to it: staying the course\n—making adjustments here and there, naturally—but ignoring the distracting sirens who beckon us to turn\ntoward the rocks.",
    date: "January 15th",
    docId: "95.57b–58a",
    quote:
      " “Tranquility can’t be grasped except by those who have reached an unwavering and firm power of judgment—the rest constantly fall and rise in their decisions, wavering in a state of alternately rejecting and accepting things. What is the cause of this back and forth? It’s because nothing is clear and they rely on the most uncertain guide—common opinion.”",
    title: "PEACE IS IN STAYING THE COURSE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "According to Anthony de Mello, “there is one thing and only one thing that causes unhappiness. The\nname of that thing is Attachment.” Attachments to an image you have of a person, attachments to\nwealth and status, attachments to a certain place or time, attachments to a job or to a lifestyle. All of those\nthings are dangerous for one reason: they are outside of our reasoned choice. How long we keep them is\nnot in our control.\nAs Epictetus realized some two thousand years before de Mello, our attachments are what make it so\nhard to accept change. Once we have them, we don’t want to let go. We become slaves to maintaining the\nstatus quo. We are like the Red Queen in Alice in Wonderland—running faster and faster to stay in the\nsame place.\nBut everything is in a constant state of change. We have certain things for a while and then lose them.\nThe only permanent thing is prohairesis, our capacity for reasoned choice. The things we are attached to\ncan come and go, our choice is resilient and adaptable. The sooner we become aware of this the better.\nThe easier it will be to accept and adapt to what does happen.",
    date: "November 23rd",
    docId: "4.4.23",
    quote:
      " “In short, you must remember this—that if you hold anything dear outside of your own reasoned choice, you will have destroyed your capacity for choice.”",
    title: "ATTACHMENTS ARE THE ENEMY",
  },
  {
    author: "—EPICTETUS",
    book: "ENCHIRIDION",
    commentary:
      "Today, you won’t control the external events that happen. Is that scary? A little, but it’s balanced when\nwe see that we can control our opinion about those events. You decide whether they’re good or bad,\nwhether they’re fair or unfair. You don’t control the situation, but you control what you think about it.\nSee how that works? Every single thing that is outside your control—the outside world, other people,\nluck, karma, whatever—still presents a corresponding area that is in your control. This alone gives us\nplenty to manage, plenty of power.\nBest of all, an honest understanding of what is within our control provides real clarity about the\nworld: all we have is our own mind. Remember that today when you try to extend your reach outward—\nthat it’s much better and more appropriately directed inward.",
    date: "January 9th",
    docId: "1.1–2",
    quote:
      " “Some things are in our control, while others are not. We control our opinion, choice, desire, aversion, and, in a word, everything of our own doing. We don’t control our body, property, reputation, position, and, in a word, everything not of our own doing. Even more, the things in our control are by nature free, unhindered, and unobstructed, while those not in our control are weak, slavish, can be hindered, and are not our own.”",
    title: "WHAT WE CONTROL AND WHAT WE DON’T",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "long To-Do list seems intimidating and burdensome—all these things we have to do in the course of a\nA\nday or a week. But a Get To Do list sounds like a privilege—all the things we’re excited about the\nopportunity to experience. This isn’t just semantic playing. It is a central facet of the philosopher’s\nworldview.\nToday, don’t try to impose your will on the world. Instead see yourself as fortunate to receive and\nrespond to the will in the world.\nStuck in traffic? A few wonderful minutes to relax and sit. Your car broke down after idling for so\nlong? Ah, what a nice nudge to take a long walk the rest of the way. A swerving car driven by a\ndistracted, cell-phone-wielding idiot nearly hit you as you were walking and soaked you head to toe with\nmuddy water? What a reminder about how precarious our existence is and how silly it is to get upset\nabout something as trivial as being late or having trouble with your commute!\nKidding aside, it might not seem like it makes a big difference to see life as something you have to do\nversus get to do, but there is. A huge, magnificent difference.July 4th\nPROTECT THE FLAME",
    date: "July 3rd",
    docId: "2.14.7",
    quote:
      " “The task of a philosopher: we should bring our will into harmony with whatever happens, so that nothing happens against our will and nothing that we wish for fails to happen.”",
    title: "TURN HAVE TO INTO GET TO",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "One of the wonders of your mind is the quickness with which it can comprehend and categorize things.\nAs Malcolm Gladwell wrote in Blink, we are constantly making split-second decisions based on\nyears of experience and knowledge as well as using the same skill to confirm prejudices, stereotypes, and\nassumptions. Clearly, the former thinking is a source of strength, whereas the latter is a great weakness.\nWe lose very little by taking a beat to consider our own thoughts. Is this really so bad? What do I\nreally know about this person? Why do I have such strong feelings here? Is anxiety really adding much\nto the situation? What’s so special about __________?\nBy asking these questions—by putting our impressions to the test as Epictetus recommends—we’re\nless likely to be carried away by them or make a move on a mistaken or biased one. We’re still free to use\nour instincts, but we should always, as the Russian proverb says, “trust, but verify.”",
    date: "April 5th",
    docId: "2.18.24",
    quote:
      " “First off, don’t let the force of the impression carry you away. Say to it, ‘hold up a bit and let me see who you are and where you are from—let me put you to the test’ . . .”",
    title: "TRUST, BUT VERIFY",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Many of the Stoic aphorisms are simple to remember and even sound smart when quoted. But that’s\nnot what philosophy is really about. The goal is to turn these words into works. As Musonius Rufus\nput it, the justification for philosophy is when “one brings together sound teaching with sound conduct.”\nToday, or anytime, when you catch yourself wanting to condescendingly drop some knowledge that\nyou have, grab it and ask: Would I be better saying words or letting my actions and choices illustrate\nthat knowledge for me?",
    date: "May 3rd",
    docId: "3.21.1–3",
    quote:
      " “Those who receive the bare theories immediately want to spew them, as an upset stomach does its food. First digest your theories and you won’t throw them up. Otherwise they will be raw, spoiled, and not nourishing. After you’ve digested them, show us the changes in your reasoned choices, just like the shoulders of gymnasts display their diet and training, and as the craft of artisans show in what they’ve learned.”",
    title: "SHOW, NOT TELL, WHAT YOU KNOW",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Viktor Frankl, the brilliant psychologist and Holocaust survivor, cured patients suffering from phobias\nor neurotic habits using a method he called “paradoxical intention.” Let’s say a patient couldn’t\nsleep. The standard therapy would have been something obvious, like relaxation techniques. Frankl\ninstead encouraged the patient to try not to fall asleep. He found that shifting focus off the problem\ndeflected the patient’s obsessive attention away from it and allowed them to eventually sleep normally.\nFans of the TV show Seinfeld might remember an episode called “The Opposite” where George\nCostanza magically improves his life by doing the opposite of whatever he’d normally do. “If every\ninstinct you have is wrong,” Jerry says to him, “then the opposite would have to be right.” The larger\npoint is that sometimes our instincts or habits get stuck in a bad pattern that pushes us further from our\nnatural, healthy selves.\nNow you shouldn’t immediately toss out everything in your life—some stuff is working (you’re\nreading this book!). But what if you explored opposites today? What if you broke the pattern?",
    date: "June 26th",
    docId: "1.27.4",
    quote:
      " “What assistance can we find in the fight against habit? Try the opposite!”",
    title: "TRY THE OPPOSITE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Epictetus also used the metaphor of a storm, saying that our impressions are not unlike extreme\nweather that can catch us and whirl us about. When we get worked up or passionate about an issue,\nwe can relate.\nBut let’s think about the role of the weather in modern times. Today, we have forecasters and experts\nwho can fairly accurately predict storm patterns. Today, we’re defenseless against a hurricane only if we\nrefuse to prepare or heed the warnings.\nIf we don’t have a plan, if we never learned how to put up the storm windows, we will be at the\nmercy of these external—and internal—elements. We’re still puny human beings compared with onehundred-mile-per-hour winds, but we have the advantage of being able to prepare—being able to struggle\nagainst them in a new way.",
    date: "February 18th",
    docId: "2.18.27–28",
    quote:
      " “This is the true athlete—the person in rigorous training against false impressions. Remain firm, you who suffer, don’t be kidnapped by your impressions! The struggle is great, the task divine— to gain mastery, freedom, happiness, and tranquility.”",
    title: "PREPARE FOR THE STORM",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Is there a less effective technique to persuading people to do something than haranguing them? Is there\nanything that turns people off more than abstract notions? That’s why the Stoics don’t say, “Stop doing\nthis, it’s a sin.” Instead they say, “Don’t do this because it will make you miserable.” They don’t say,\n“Pleasure isn’t pleasurable.” They say, “Endless pleasure becomes its own form of punishment.” Their\nmethods of persuasion hew the line in The 48 Laws of Power: “Appeal to People’s Self-Interest Never to\nTheir Mercy or Gratitude.”\nIf you find yourself trying to persuade someone to change or do something differently, remember what\nan effective lever self-interest is. It’s not that this or that is bad, it’s that it is in their best interest to do it a\ndifferent way. And show them—don’t moralize.\nAnd what happens when you apply this way of thinking to your own behavior?",
    date: "August 23rd",
    docId: "83.27",
    quote:
      " “Therefore, explain why a wise person shouldn’t get drunk—not with words, but by the facts of its ugliness and offensiveness. It’s most easy to prove that so-called pleasures, when they go beyond proper measure, are but punishments.”",
    title: "IT’S IN YOUR SELF-INTEREST",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Earlier we were reminded of Socrates’s tolerant belief that “no one does wrong on purpose.” The\nclearest proof of that hypothesis? All the times we did wrong without malice or intention. Remember\nthem? The time you were rude because you hadn’t slept in two days. The time you acted on bad\ninformation. The time you got carried away, forgot, didn’t understand. The list goes on and on.\nThis is why it is so important not to write people off or brand them as enemies. Be as forgiving of\nthem as you are of yourself. Cut them the same slack you would for yourself so that you can continue to\nwork with them and make use of their talents.",
    date: "August 31st",
    docId: "10.30",
    quote:
      " “Whenever you take offense at someone’s wrongdoing, immediately turn to your own similar failings, such as seeing money as good, or pleasure, or a little fame—whatever form it takes. By thinking on this, you’ll quickly forget your anger, considering also what compels them—for what else could they do? Or, if you are able, remove their compulsion.”",
    title: "CONSIDER YOUR FAILINGS TOO",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Have you ever heard someone else repeat one of your ideas as though it were their own? Did you ever\nnotice a younger sibling or relative mimic your behavior, perhaps the way you dress or the music\nyou listen to? Maybe you moved to a new neighborhood and a bunch of hipsters followed. When we are\nyoung and inexperienced, we can react negatively to these situations. Stop copying me! I was here first!\nAs we mature, we start to see them in a different light. We understand that stepping up and helping is a\nservice that leaders provide to the world. It’s our duty to do this—in big situations and small ones. If we\nexpect to be leaders, we must see that thankless service comes with the job. We must do what leaders do,\nbecause it’s what leaders do—not for the credit, not for the thanks, not for the recognition. It’s our duty.",
    date: "July 13th",
    docId: "5.6",
    quote:
      " “One person, on doing well by others, immediately accounts the expected favor in return. Another is not so quick, but still considers the person a debtor and knows the favor. A third kind of person acts as if not conscious of the deed, rather like a vine producing a cluster of grapes without making further demands, like a horse after its race, or a dog after its walk, or a bee after making its honey. Such a person, having done a good deed, won’t go shouting from rooftops but simply moves on to the next deed just like the vine produces another bunch of grapes in the right season.”",
    title: "A LEADER LEADS",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "Machiavelli, who supposedly admired Seneca, says in The Prince that “fortune is a woman, and it is\nnecessary, in order to keep her down, to beat her and struggle with her.” Even for the sixteenth\ncentury, it’s pretty horrifying imagery. But for a ruthless and endlessly ambitious ruler, it was par for the\ncourse. Is that the nasty lifestyle you’re after?\nNow compare that view with Seneca’s. Not only is he saying that the more you struggle with fortune,\nthe more vulnerable you are to it, but he’s also saying that the better path to security is in the “impregnable\nwall” of philosophy. “Philosophy,” he says, helps us tame the “mad frenzy of our greed and tamps down\nthe fury of our fears.”\nIn sports or war, the metaphor here would be the choice between a strategy of endless, exhausting\noffense and a strategy of resilient, flexible defense. Which will you play? What kind of person are you?\nOnly you can answer that question. But you would be remiss not to consider the ultimate end of most\nof the princes in Machiavelli’s book—and how few of them died happily in bed, surrounded by their\nloved ones.",
    date: "June 17th",
    docId: "82.5b–6",
    quote:
      " “Fortune doesn’t have the long reach we suppose, she can only lay siege to those who hold her tight. So, let’s step back from her as much as possible.”",
    title: "OFFENSE OR DEFENSE?",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Is it that controversial to say that there are the things that people value (and pressure you to value as\nwell)—and there are the things that are actually good? Or to question whether wealth and fame are all\nthey are cracked up to be? As Seneca observed in one of his plays:\n“If only the hearts of the wealthy were opened to all!\nHow great the fears high fortune stirs up within them.”\nFor centuries, people have assumed that wealth would be a wonderful cure-all for their unhappiness\nor problems. Why else would they have worked so hard for it? But when people actually acquired the\nmoney and status they craved, they discovered it wasn’t quite what they had hoped. The same is true of so\nmany things we covet without really thinking.\nOn the other hand, the “good” that the Stoics advocate is simpler and more straightforward: wisdom,\nself-control, justice, courage. No one who achieves these quiet virtues experiences buyer’s remorse.",
    date: "April 20th",
    docId: "5.12",
    quote:
      " “Here’s a way to think about what the masses regard as being ‘good’ things. If you would first start by setting your mind upon things that are unquestionably good—wisdom, self-control, justice, courage—with this preconception you’ll no longer be able to listen to the popular refrain that there are too many good things to experience in a lifetime.”",
    title: "REAL GOOD IS SIMPLE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "The Stoics loved to use metaphors from the Olympics, especially wrestling. Like us, they saw sports\nas both a fun pastime as well as a training ground to practice for the challenges one will inevitably\nface in the course of living. As General Douglas MacArthur once said, in words later engraved at the\ngymnasium at West Point:\nUPON THE FIELDS OF FRIENDLY STRIFE\nARE SOWN THE SEEDS\nTHAT, UPON OTHER FIELDS, ON OTHER DAYS\nWILL BEAR THE FRUITS OF VICTORY.",
    date: "September 22nd",
    docId: "1.24.1–2",
    quote:
      " “Difficulties show a person’s character. So when a challenge confronts you, remember that God is matching you with a younger sparring partner, as would a physical trainer. Why? Becoming an Olympian takes sweat! I think no one has a better challenge than yours, if only you would use it like an athlete would that younger sparring partner.”",
    title: "NO PAIN, NO GAIN",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "How many things you fear have actually come to pass? How many times has anxiety driven you to\nbehave in a way you later regret? How many times have you let jealousy or frustration or greed lead\nyou down a bad road?\nLetting our reason rule the day might seem like more work, but it saves us quite a bit of trouble. As\nBen Franklin’s proverb put it: “An ounce of prevention is worth a pound of cure.”\nYour brain was designed to do this work. It was meant to separate what is important from what is\nsenseless, to keep things in perspective, to only become troubled by that which is worth becoming\ntroubled about. You only need to put it to use.",
    date: "August 13th",
    docId: "9.26",
    quote:
      " “You’ve endured countless troubles—all from not letting your ruling reason do the work it was made for—enough already!”",
    title: "TAKE CHARGE AND END YOUR TROUBLES",
  },
  {
    author: "—SENECA",
    book: "THYESTES",
    commentary:
      "Thyestes is one of Seneca’s darkest and most disturbing plays. Even two thousand years later it\nremains a classic of the revenge genre. Without spoiling it, the quote above comes from the scene in\nwhich Atreus is attempting to lure his hated brother Thyestes into a cruel trap by offering him tempting\nand generous gifts. At first, Thyestes declines, to the complete bafflement of his enemy.\nWe are typically surprised when someone turns down an expensive gift or a position of honor or\nsuccess. General William T. Sherman emphatically rejected offers to run for president of the United\nStates, saying at one point: “I will not accept if nominated and will not serve if elected.” If his friend\nUlysses S. Grant had made such a “Shermanesque statement” (as such rejections are now known), Grant\ncertainly would have preserved his own legacy from the disastrous turn of events it suffered.\nDespite his initial misgivings, Thyestes is ultimately tempted and persuaded to accept “fortune’s\ngifts,” . . . which turned out to be a ruse hiding devastating tragedy. Not every opportunity is fraught with\ndanger, but the play was intended to remind us that our attraction toward what is new and shiny can lead\nus into serious trouble.",
    date: "April 12th",
    docId: "536",
    quote:
      " “Atreus: Who would reject the flood of fortune’s gifts? Thyestes: Anyone who has experienced how easily they flow back.”",
    title: "REJECT TANTALIZING GIFTS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Nobody can argue that pleasure doesn’t feel good. That’s pretty much what it does by definition.\nBut today Marcus Aurelius is reminding you—just as he reminded himself—that those pleasures\nhardly stand up to virtue. The dopamine rush that comes from sex is momentary. So is the pride of an\naccomplishment or the hearty applause of a crowd. These pleasures are powerful, but they wear off and\nleave us wanting more. What lasts longer (and remains more within our circle of control)? Wisdom, good\ncharacter, sobriety, and kindness.",
    date: "October 8th",
    docId: "5.9",
    quote:
      " “Yes, getting your wish would have been so nice. But isn’t that exactly why pleasure trips us up? Instead, see if these things might be even nicer—a great soul, freedom, honesty, kindness, saintliness. For there is nothing so pleasing as wisdom itself, when you consider how surefooted and effortless the works of understanding and knowledge are.”",
    title: "A HIGHER PLEASURE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We resent the person who comes in and tries to boss us around. Don’t tell me how to dress, how to\nthink, how to do my job, how to live. This is because we are independent, self-sufficient people.\nOr at least that’s what we tell ourselves.\nYet if someone says something we disagree with, something inside us tells us we have to argue with\nthem. If there’s a plate of cookies in front of us, we have to eat them. If someone does something we\ndislike, we have to get mad about it. When something bad happens, we have to be sad, depressed, or\nworried. But if something good happens a few minutes later, all of a sudden we’re happy, excited, and\nwant more.\nWe would never let another person jerk us around the way we let our impulses do. It’s time we start\nseeing it that way—that we’re not puppets that can be made to dance this way or that way just because we\nfeel like it. We should be the ones in control, not our emotions, because we are independent, selfsufficient people.",
    date: "February 2nd",
    docId: "2.2",
    quote:
      " “Frame your thoughts like this—you are an old person, you won’t let yourself be enslaved by this any longer, no longer pulled like a puppet by every impulse, and you’ll stop complaining about your present fortune or dreading the future.”",
    title: "A PROPER FRAME OF MIND",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "Each day presents the chance to overthink things. What should I wear? Do they like me? Am I eating\nwell enough? What’s next for me in life? Is my boss happy with my work?\nToday, let’s focus just on what’s in front of us. We’ll follow the dictum that New England Patriots\ncoach Bill Belichick gives his players: “Do your job.” Like a Roman, like a good soldier, like a master of\nour craft. We don’t need to get lost in a thousand other distractions or in other people’s business.\nMarcus says to approach each task as if it were your last, because it very well could be. And even if it\nisn’t, botching what’s right in front of you doesn’t help anything. Find clarity in the simplicity of doing\nyour job today.",
    date: "January 29th",
    docId: "2.5",
    quote:
      " “At every moment keep a sturdy mind on the task at hand, as a Roman and human being, doing it with strict and simple dignity, affection, freedom, and justice—giving yourself a break from all other considerations. You can do this if you approach each task as if it is your last, giving up every distraction, emotional subversion of reason, and all drama, vanity, and complaint over your fair share. You can see how mastery over a few things makes it possible to live an abundant and devout life—for, if you keep watch over these things, the gods won’t ask for more.”",
    title: "KEEP IT SIMPLE",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "There is that saying that absolute power corrupts absolutely. At first glance, that’s true. Seneca’s pupil\nNero and his litany of crimes and murders is a perfect example. Another emperor, Domitian,\narbitrarily banished all philosophers from Rome (Epictetus was forced to flee as a result). Many of\nRome’s emperors were tyrants. Yet, not many years later, Epictetus would become a close friend of\nanother emperor, Hadrian, who would help Marcus Aurelius to the throne, one of the truest examples of a\nwise philosopher king.\nSo it’s not so clear that power always corrupts. In fact, it looks like it comes down, in many ways, to\nthe inner strength and self-awareness of individuals—what they value, what desires they keep in check,\nwhether their understanding of fairness and justice can counteract the temptations of unlimited wealth and\ndeference.\nThe same is true for you. Both personally and professionally. Tyrant or king? Hero or Nero? Which\nwill you be?",
    date: "February 11th",
    docId: "114.24",
    quote:
      " “Our soul is sometimes a king, and sometimes a tyrant. A king, by attending to what is honorable, protects the good health of the body in its care, and gives it no base or sordid command. But an uncontrolled, desire-fueled, over-indulged soul is turned from a king into that most feared and detested thing—a tyrant.”",
    title: "HERO OR NERO?",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "When people say change is good, they’re usually trying to reassure someone (or themselves).\nBecause instinctively we view change as bad—or at least we’re suspicious of it.\nThe Stoics want you to do away with those labels altogether. Change isn’t good. The status quo isn’t\nbad. They just are.\nRemember, events are objective. It’s only our opinion that says something is good or bad (and thus\nworth fighting against or fighting for). A better attitude? To decide to make the most of everything. But to\ndo that you must first cease fighting.",
    date: "November 4th",
    docId: "4.42",
    quote:
      " “There is no evil in things changing, just as there is no good in persisting in a new state.”",
    title: "NOT GOOD, NOR BAD",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The fact that you can think, the fact that you can read this book, the fact that you are able to reason in\nand out of situations—all of this is what gives you the ability to improve your circumstances and\nbecome better. It’s important to appreciate this ability, because it’s a genuine ability. Not everyone is so\nlucky.\nSeriously—what you take for granted, others wouldn’t even think to dream of.\nTake a little time today to remember that you’re blessed with the capacity to use logic and reason to\nnavigate situations and circumstances. This gives you unthinkable power to alter your circumstances and\nthe circumstances of others. And remember that with power comes responsibility.",
    date: "March 16th",
    docId: "3.9",
    quote:
      " “Hold sacred your capacity for understanding. For in it is all, that our ruling principle won’t allow anything to enter that is either inconsistent with nature or with the constitution of a logical creature. It’s what demands due diligence, care for others, and obedience to God.”",
    title: "THAT SACRED PART OF YOU",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "We go through our days responding and reacting, but it’s rare to really pause and ask: Is this thing\nI’m about to do consistent with what I believe? Or, better: Is this the kind of thing the person I\nwould like to be should do?\nThe work of living is to set standards and then not compromise them. When you’re brushing your\nteeth, choosing your friends, losing your temper, falling in love, instructing your child, or walking your\ndog—all of these are opportunities.\nNot, I want to do good—that’s an excuse. But, I will do good in this particular instance, right now.\nSet a standard; hold fast to it. That’s all there is.",
    date: "October 9th",
    docId: "2.11.23–25",
    quote:
      " “When the standards have been set, things are tested and weighed. And the work of philosophy is just this, to examine and uphold the standards, but the work of a truly good person is in using those standards when they know them.”",
    title: "SET THE STANDARDS AND USE THEM",
  },
  {
    author: "—CHRYSIPPUS QUOTED BY PLUTARCH IN MORALIA",
    book: "AGAINST THE STOICS ON COMMON CONCEPTIONS",
    commentary:
      "Perhaps wisdom and happiness are like winning a medal in the Olympics. It doesn’t matter whether\nyou won a hundred years ago or ten minutes ago, or whether you won just once or in multiple events.\nIt doesn’t matter whether someone beats your time or score down the road, and it doesn’t matter whether\nyou never compete again. You’ll always be a medalist, and you’ll always know what it feels like. No one\ncan take that away—and it would be impossible to feel more of that feeling.\nThe Juilliard-trained actor Evan Handler, who not only survived acute myeloid leukemia but also\nsevere depression, has talked about his decision to take antidepressants, which he did for a deliberately\nbrief time. He took them because he wanted to know what true, normal happiness felt like. Once he did,\nhe knew he would stop. He could go back to the struggle like everyone else. He had the ideal for a\nmoment and that was enough.\nPerhaps today will be the day when we experience happiness or wisdom. Don’t try to grab that\nmoment and hold on to it with all your might. It’s not under your control how long it lasts. Enjoy it,\nrecognize it, remember it. Having it for a moment is the same as having it forever.",
    date: "November 21st",
    docId: "1062 (LOEB, P. 682)",
    quote:
      " “A good isn’t increased by the addition of time, but if one is wise for even a moment, they will be no less happy than the person who exercises virtue for all time and happily passes their life in it.”",
    title: "ONCE IS ENOUGH, ONCE IS FOREVER",
  },
  {
    author: "—SENECA",
    book: "THYESTES",
    commentary:
      "Some of the most powerful and important people in the world seem to have almost no self-awareness.\nAlthough total strangers know endless amounts of trivia about them, celebrities—because they are too\nbusy or because it hurts too much—appear to know very little about themselves.\nWe can be guilty of the same sin. We ignore Socrates’s dictum to “know thyself”—often realizing we\nhave done so at our peril, years later, when we wake up one day and realize how rarely we have asked\nourselves questions like: Who am I? What’s important to me? What do I like? What do I need?\nNow—right now—you have the time to explore yourself, to understand your own mind and body.\nDon’t wait. Know yourself. Before it’s impossibly late.",
    date: "December 17th",
    docId: "400",
    quote:
      " “Death lies heavy upon one who, known exceedingly well by all, dies unknown to himself.”",
    title: "KNOW THYSELF—BEFORE IT’S TOO LATE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "“Even a dog,” Supreme Court Justice Oliver Wendell Holmes once said, “distinguishes between\nbeing stumbled over and being kicked.” Yet if you’ve ever accidentally stepped on your dog, you\nknow that the first reaction is usually a bark or a yelp or a quick snap of the jaws. In the instant, there is\nno distinction—just pain. Then it sees who it was, hears your soothing voice, and goes right back to\nwagging its tail.\nA virtuous person does not jump to hasty judgments about other people. A virtuous person is generous\nwith assumptions: that something was an accident, that someone didn’t know, that it won’t happen again.\nThis makes life easier to bear and makes us more tolerant. Meanwhile, assuming malice—the most hasty\nof judgments—makes everything harder to bear.\nBe deliberate and accommodating with your assumptions about other people and you’ll find, as\nMarcus says, calmer seas and fairer weather.",
    date: "October 15th",
    docId: "12.22",
    quote:
      " “Everything turns on your assumptions about it, and that’s on you. You can pluck out the hasty judgment at will, and like steering a ship around the point, you will find calm seas, fair weather and a safe port.”",
    title: "GIVE PEOPLE THE BENEFIT OF THE DOUBT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "We’re going to get caught off guard from time to time. Not just by “black swan” type events—a\nterrorist attack or a financial panic—but also by minor, unexpected occurrences. Your car battery\ndies, your friend cancels at the last minute, you suddenly don’t feel well. These situations have a way of\nthrowing us into confusion and disarray. We’ve made an assumption about the world and built plans on\ntop of that assumption. Now that the assumption has collapsed, so too might our organization or\nunderstanding.\nThat’s perfectly OK! It happens. A line of infantrymen will face withering attacks—what’s key is that\nthey don’t allow chaos to reign. Musicians will experience technical difficulties and lose their place from\ntime to time. In both cases, it just matters that they get back into position as quickly as possible.\nThe same is true for you today. The order and the peace might be interrupted by a new circumstance.\nOK. Get a hold of yourself and find your way back.",
    date: "September 21st",
    docId: "6.11",
    quote:
      " “When forced, as it seems, by circumstances into utter confusion, get a hold of yourself quickly. Don’t be locked out of the rhythm any longer than necessary. You’ll be able to keep the beat if you are constantly returning to it.”",
    title: "MAINTAIN COMPOSURE, MAINTAIN CONTROL",
  },
  {
    author: "—SENECA",
    book: "ON PROVIDENCE",
    commentary:
      "Perhaps you know people who’ve been extraordinarily lucky in life. Maybe they hit the genetic lottery\nor have skated through classes and careers with ease. Despite never planning, making reckless\ndecisions, jumping from one thing to the next, they’ve somehow survived without a scratch. There’s a\nsaying: “God favors fools.”\nIt’s natural to be a bit envious of these folks. We want the easy life too—or so we think. But is the easy\nlife really that admirable?\nAnyone can get lucky. There’s no skill in being oblivious, and no one would consider that greatness.\nOn the other hand, the person who perseveres through difficulties, who keeps going when others quit,\nwho makes it to their destination through hard work and honesty? That’s admirable, because their survival\nwas the result of fortitude and resilience, not birthright or circumstance. A person who overcame not just\nthe external obstacles to success but mastered themselves and their emotions along the way? That’s much\nmore impressive. The person who has been dealt a harder hand, understood it, but still triumphed? That’s\ngreatness.",
    date: "September 16th",
    docId: "4.1",
    quote:
      " “Success comes to the lowly and to the poorly talented, but the special characteristic of a great person is to triumph over the disasters and panics of human life.”",
    title: "ANYONE CAN GET LUCKY, NOT EVERYONE CAN PERSEVERE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "If a dog spends all day in bed—your bed, most likely—that’s fine. It’s just being a dog. It doesn’t have\nanywhere to be, no other obligation other than being itself. According to the Stoics, we humans have a\nhigher obligation—not to the gods but to each other. What gets us out of bed each morning—even when\nwe fight it like Marcus did—is praxeis koinonikas apodidonai (to render works held in common).\nCivilization and country are great projects we build together and have been building together with our\nancestors for millennia. We are made for cooperation (synergia) with each other.\nSo if you need an extra boost to get out of bed this morning, if you need something more than caffeine\ncan offer, use this. People are depending on you. Your purpose is to help us render this great work\ntogether. And we’re waiting and excited for you to show up.",
    date: "July 21st",
    docId: "8.12",
    quote:
      " “Whenever you have trouble getting up in the morning, remind yourself that you’ve been made by nature for the purpose of working with others, whereas even unthinking animals share sleeping. And it’s our own natural purpose that is more fitting and more satisfying.”",
    title: "MADE FOR WORKING TOGETHER",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "At a Roman triumph, the majority of the public would have their eyes glued to the victorious general at\nthe front—one of the most coveted spots during Roman times. Only a few would notice the aide in\nthe back, right behind the commander, whispering into his ear, “Remember, thou art mortal.” What a\nreminder to hear at the peak of glory and victory!\nIn our own lives, we can train to be that whisper. When there is something we prize—or someone that\nwe love—we can whisper to ourselves that it is fragile, mortal, and not truly ours. No matter how strong\nor invincible something feels, it never is. We must remind ourselves that it can break, can die, can leave\nus.\nLoss is one of our deepest fears. Ignorance and pretending don’t make things any better. They just\nmean the loss will be all the more jarring when it occurs.",
    date: "November 24th",
    docId: "3.24.84–86a",
    quote:
      " “Whenever you experience the pangs of losing something, don’t treat it like a part of yourself but as a breakable glass, so when it falls you will remember that and won’t be troubled. So too, whenever you kiss your child, sibling, or friend, don’t layer on top of the experience all the things you might wish, but hold them back and stop them, just as those who ride behind triumphant generals remind them they are mortal. In the same way, remind yourself that your precious one isn’t one of your possessions, but something given for now, not forever . . .”",
    title: "TRAIN TO LET GO OF WHAT’S NOT YOURS",
  },
  {
    author: "—SENECA",
    book: "ON TRANQUILITY OF MIND",
    commentary:
      "Shortly before his death, as victory in the Civil War was finally within his grasp, Lincoln told a story\nto an audience of generals and admirals about a man who had approached him for a high-ranking\ngovernment appointment. First, the man asked if he might be made a foreign minister. Upon being turned\ndown, the man asked for a more modest position. Upon being turned down again, he asked for a job as a\nlow-level customs officer. Finding he could not get even that, he finally just asked Lincoln for an old pair\nof trousers. “Ah,” Lincoln laughed as he concluded the story, “it is well to be humble.”\nThis story embodies the flexibility and determination of Stoicism. If we can’t do this, then perhaps we\ncan try that. And if we can’t do that, then perhaps we can try some other thing. And if that thing is\nimpossible, there is always another. Even if that final thing is just being a good human being—we always\nhave some opportunity to practice our philosophy, to make some contribution.",
    date: "June 3rd",
    docId: "4.3",
    quote:
      " “He can’t serve in the military? Let him seek public office. Must he live in the private sector? Let him be a spokesperson. Is he condemned to silence? Let him aid his fellow citizens by silent public witness. Is it dangerous to enter the Forum? Let him display himself, in private homes, at public events and gatherings, as a good associate, faithful friend, and moderate tablemate. Has he lost the duties of a citizen? Let him exercise those of a human being.”",
    title: "IT IS WELL TO BE FLEXIBLE",
  },
  {
    author: "—SENECA",
    book: "ON CONSOLATION TO HELVIA",
    commentary:
      "In 41 AD, Seneca was exiled from Rome to Corsica—for what exactly, we are not sure, but the rumors\nwere that he had an affair with the sister of the emperor. Shortly afterward, he sent a letter to his\nmother seeking to reassure her and comfort her in her grief. But in many ways, he must have been speaking\nto himself as well—scolding himself a little for this unexpected twist he was taking pretty hard.\nHe’d managed to achieve some measure of political and social success. He might have chased some\npleasures of the flesh. Now he and his family were dealing with the consequences—as we all must bear\nfor our behavior and for the risks we take.\nHow would he respond? How would he deal with it? Well, at the very least, his instincts were to\ncomfort his mother instead of simply bemoaning his own suffering. Though some other letters show that\nSeneca begged and lobbied for his return to Rome and power (a request eventually granted), he seems to\nhave borne the pain and disgrace of exile fairly well. The philosophy that he’d long studied prepared him\nfor this kind of adversity and gave him the determination and patience he needed to wait it out. When he\nfound his fortune restored as he returned to power, philosophy prevented him from taking it for granted or\nbecoming dependent on it. This was good because fortune had another turn in store for him. When the new\nemperor turned his wrath on Seneca, philosophy found him ready and prepared once again.",
    date: "September 8th",
    docId: "5.4b",
    quote:
      " “No one is crushed by Fortune, unless they are first deceived by her . . . those who aren’t pompous in good times, don’t have their bubbles burst with change. Against either circumstance, the stable person keeps their rational soul invincible, for it’s precisely in the good times they prove their strength against adversity.”",
    title: "DO NOT BE DECEIVED BY FORTUNE",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The amount of matter in the universe is immense—on the order of trillions of atoms. What percentage\nof that matter does one human body constitute?\nThe earth, as far as science tells us, is some 4.5 billion years old and shows no sign of ending soon.\nOur time on the earth, on the other hand, will be what? Several decades, maybe?\nSometimes we need to have the facts and figures spelled out in front of us to fully realize the scale at\nwhich humans happen to exist in the big scheme of things.\nConsider this the next time you feel self-important, or like everything rises and falls on what you do\nnext. It doesn’t. You’re just one person among many, doing your best among many. That’s all you need to\ndo.",
    date: "December 19th",
    docId: "5.24",
    quote:
      " “Think of the whole universe of matter and how small your share. Think about the expanse of time and how brief—almost momentary—the part marked for you. Think of the workings of fate and how infinitesimal your role.”",
    title: "HUMAN SCALE",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "Great teachers are usually hardest on their most promising students. When teachers see potential, they\nwant it to be fully realized. But great teachers are also aware that natural ability and quick\ncomprehension can be quite dangerous to the student if left alone. Early promise can lead to\noverconfidence and create bad habits. Those who pick things up quickly are notorious for skipping the\nbasic lessons and ignoring the fundamentals.\nDon’t get carried away. Take it slow. Train with humility.",
    date: "July 14th",
    docId: "3.13.20",
    quote:
      " “Every great power is dangerous for the beginner. You must therefore wield them as you are able, but in harmony with nature.”",
    title: "A LITTLE KNOWLEDGE IS DANGEROUS",
  },
  {
    author: "—EPICTETUS",
    book: "DISCOURSES",
    commentary:
      "“We can have it all” is the mantra of our modern lives. Work, family, purpose, success, leisure\ntime—we want all of this, at the same time (right now, to boot).\nIn Greece, the lecture hall (scholeion) was a leisure center where students contemplated the higher\nthings (the good, true, and beautiful) for the purpose of living a better life. It was about prioritization,\nabout questioning the priorities of the outside world. Today, we’re too busy getting things, just like kids\njamming their hand down a jar of goodies, to do much of this questioning.\n“Don’t set your heart on so many things,” says Epictetus. Focus. Prioritize. Train your mind to ask: Do\nI need this thing? What will happen if I do not get it? Can I make do without it?\nThe answers to these questions will help you relax, help you cut out all the needless things that make\nyou busy—too busy to be balanced or happy.",
    date: "February 29th",
    docId: "3.9.22",
    quote:
      " “When children stick their hand down a narrow goody jar they can’t get their full fist out and start crying. Drop a few treats and you will get it out! Curb your desire—don’t set your heart on so many things and you will get what you need.”",
    title: "YOU CAN’T ALWAYS (BE) GET(TING) WHAT YOU WANT",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "The Roman satirist Juvenal is famous for this question: Quis custodiet ipsos custodes? (Who watches\nthe watchmen?) In a way, this is what Marcus is asking himself—and what you might ask yourself\nthroughout the day. What influences the ruling reason that guides your life?\nThis means an exploration of subjects like evolutionary biology, psychology, neurology, and even the\nsubconscious. Because these deeper forces shape even the most disciplined, rational minds. You can be\nthe most patient person in the world, but if science shows we make poor decisions on an empty stomach\n—what good is all that patience?\nSo don’t stop at Stoicism, but explore the forces that drive and make Stoicism possible. Learn what\nunderpins this philosophy you’re studying, how the body and mind tick. Understand not only your ruling\nreason—the watchmen—but whoever and whatever rules that too.",
    date: "March 26th",
    docId: "12.33",
    quote:
      " “How does your ruling reason manage itself? For in that is the key to everything. Whatever else remains, be it in the power of your choice or not, is but a corpse and smoke.”",
    title: "WHAT RULES YOUR RULING REASON?",
  },
  {
    author: "—SENECA",
    book: "ON THE BREVITY OF LIFE",
    commentary:
      "The things that some people manage to be experts in: fantasy sports, celebrity trivia, derivatives and\ncommodities markets, thirteenth-century hygiene habits of the clergy.\nWe can get very good at what we’re paid to do, or adept at a hobby we wish we could be paid to do.\nYet our own lives, habits, and tendencies might be a mystery to us.\nSeneca was writing this important reminder to his father-in-law, who, as it happened, was for a time\nin charge of Rome’s granary. But then his position was revoked for political purposes. Who really cares,\nSeneca was saying, now you can focus that energy on your inner life.\nAt the end of your time on this planet, what expertise is going to be more valuable—your\nunderstanding of matters of living and dying, or your knowledge of the ’87 Bears? Which will help your\nchildren more—your insight into happiness and meaning, or that you followed breaking political news\nevery day for thirty years?",
    date: "April 14th",
    docId: "18.3b",
    quote:
      " “Believe me, it’s better to produce the balance-sheet of your own life than that of the grain market.”",
    title: "BECOMING AN EXPERT IN WHAT MATTERS",
  },
  {
    author: "—MARCUS AURELIUS",
    book: "MEDITATIONS",
    commentary:
      "It’s fun to think about the future. It’s easy to ruminate on the past. It’s harder to put that energy into\nwhat’s in front of us right at this moment—especially if it’s something we don’t want to do. We think:\nThis is just a job; it isn’t who I am. It doesn’t matter. But it does matter. Who knows—it might be the last\nthing you ever do. Here lies Dave, buried alive under a mountain of unfinished business.\nThere is an old saying: “How you do anything is how you do everything.” It’s true. How you handle\ntoday is how you’ll handle every day. How you handle this minute is how you’ll handle every minute.",
    date: "May 18th",
    docId: "8.22",
    quote:
      " “Pay attention to what’s in front of you—the principle, the task, or what’s being portrayed.”",
    title: "HOW YOU DO ANYTHING IS HOW YOU DO EVERYTHING",
  },
  {
    author: "—DIOGENES LAERTIUS",
    book: "LIVES OF THE EMINENT PHILOSOPHERS",
    commentary:
      "Isocrates’s famous letter to Demonicus (which later became the inspiration for Polonius’s “To thine\nown self be true” speech) holds a similar warning to Zeno. Writing to the young man, Isocrates\nadvises: “Be affable in your relations with those who approach you, and never haughty; for the pride of\nthe arrogant even slaves can hardly endure.”\nOne of the most common tropes in art—from ancient literature to popular movies—is the brash and\noverconfident young man who has to be taken down a peg by an older, wiser man. It’s a cliché because\nit’s a fact of life: people tend to get ahead of themselves, thinking they’ve got it all figured out and are\nbetter than those that don’t. It becomes so unpleasant to put up with that someone has to drop some\nknowledge on them.\nBut this is an entirely avoidable confrontation. If the bubble is never inflated, it won’t need to be\npopped. Overconfidence is a great weakness and a liability. But if you are already humble, no one will\nneed to humble you—and the world is much less likely to have nasty surprises in store for you. If you stay\ndown to earth, no one will need to bring you—oftentimes crushingly so—back down.",
    date: "September 12th",
    docId: "7.1.22",
    quote:
      " “Zeno always said that nothing was more unbecoming than putting on airs, especially with the young.”",
    title: "BE DOWN TO EARTH, OR BE BROUGHT DOWN",
  },
  {
    author: "—SENECA",
    book: "MORAL LETTERS",
    commentary:
      "It was common in Greek and Roman times, just as it is now, for politicians to pander to their audience.\nThey would lavish effusive praise on the crowd, on their country, on inspiring military victories of the\npast. How many times have you heard a political candidate say, “This is the greatest country in the history\nof the world”? As orator Demosthenes pointed out, we’ll gladly sit for hours to hear a speaker who stands\nin front of some famous or sacred landmark, “praising [our] ancestors, describing their exploits and\nenumerating their trophies.”\nBut what does this flattery accomplish? Nothing. Worse, the admiration of shiny accolades distracts us\nfrom their true purpose. Also, as Demosthenes explains, it betrays the very ancestors who inspire us. He\nconcluded his speech to the Athenian people with words that Seneca would later echo and still resounds\ncenturies later. “Reflect, then,” he said, “that your ancestors set up those trophies, not that you may gaze at\nthem in wonder, but that you may also imitate the virtues of the men who set them up.”\nThe same goes for the quotes in this book and for other inspiring words you might hear. Don’t just\nadmire them. Use them. Follow their example.",
    date: "May 10th",
    docId: "98.13b",
    quote:
      " “Let us also produce some bold act of our own—and join the ranks of the most emulated.”",
    title: "DON’T BE INSPIRED, BE INSPIRATIONAL",
  },
];

export default stoics;
