# Project Interview Notes

## Project Title
Developing Games with AI as Player Two

## One-Sentence Project Summary
My project is a top-down roguelike dungeon crawler prototype that I built with AI as a technical assistant to investigate whether beginners can develop playable games while still preserving their creative voice.

## Starting Point
This project started when I was interacting with different AI models and seeing how AI was being used as a tool in different fields. That made me wonder if I could build a game by myself using AI only as an assistant.

I have always wanted to create my own games, but I had zero experience in coding or programming. Because of that, I never really knew where to begin. I decided to use myself as the test subject and see whether AI could help a beginner like me turn a game idea into something playable.

## Inquiry Question
How can AI help beginners develop playable games while still preserving their creative voice?

## Why This Question Mattered
This question mattered to me personally because I want to become a game developer in the future. Playing games has brought me some of the greatest joys I have ever had, and I have always had ideas that I wished I could build into my own game.

The biggest obstacle was that I did not know how to code. Learning enough coding and programming to feel confident could have taken me a year or longer, so I wanted to investigate whether AI could help me begin building while I was still learning.

This question also matters beyond me because I know I am not alone in wanting to develop my own games. Game development takes a lot of different skills, including coding, mechanics, storytelling, music, sound effects, art, design, and more. AI may not make game development easy, but it might make the first playable version more reachable for beginners who have creative ideas but not every technical skill yet.

## Research and Sources
The source that was extremely useful for the industry side of my project was **GDC — What Game Developers Want From: Generative AI / 2024**. This digital e-book gave me insight into how the game development industry views AI, including where AI can be useful and where it raises ethical or legal concerns.

The source that shaped my project the most was **“I’m a Solo Developer but AI is My New Ill-Informed Co-Worker”: Envisioning and Designing Generative AI to Support Indie Game Development** by Ruchi Panchanadikar and Guo Freeman. This article narrowed the focus toward indie developers, which connects more closely to my intended audience of beginner game developers.

I also used the **GDevelop official documentation** because GDevelop became the main tool for building the game. Since it is a beginner-friendly, no-code game engine with AI tools built in, it fit directly into my project question.

NotebookLM helped me process and study these sources by summarizing them, creating visual notes, and generating quizzes. I treated those summaries as starting points, not proof.

## What I Found
From the GDC digital e-book, I learned that game developers are already using generative AI in different ways, especially to streamline production, brainstorming, prototyping, coding, debugging, and other workflow tasks. I also learned that developers have serious concerns about AI, especially around IP theft, job automation, layoffs, loss of creative freedom, and legal risk.

From the indie developer research article, I learned that perspectives on AI are mixed. Some indie developers see AI as a way to lower the skill barrier, democratize game development, cut costs, streamline workflows, and act almost like a companion in a field that can feel lonely. At the same time, indie developers worry about AI replacing human roles such as concept artists and voice actors, failing to maintain consistency, requiring too much fine-tuning, and creating copyright or legal vulnerabilities.

These findings reinforced the main tension of my project: AI can support beginners, but it can also become risky if it replaces human creativity or hides the creator’s authorship.

## Source Verification
I used NotebookLM to help me understand the sources, but I did not rely on it blindly. I made sure every important link led to a legitimate source, and I compared important data or claims from NotebookLM with the actual source to make sure there were not hallucinated facts.

This became part of my research method: AI could help me process information faster, but I still had to verify the claims myself.

## How Research Shaped the Project
The research reinforced my idea of creative preservation. When I used AI to help build my game, I set clear rules for myself: AI could help with technical systems, streamlining workflow, debugging, and prototyping, but it could not take over the creative direction of the game.

For anything connected to creative identity, including character art, storytelling, mechanics, and game direction, I made those decisions myself. AI could suggest or build, but I had to test, judge, edit, or reject the result.

## Research Dashboard / Approach and Engagement
My research dashboard shows the project’s approach through source notes, verification, key findings, visual artifacts, and reflections. I used it to document not only what sources I found, but what I did with them.

The dashboard includes my early source list, developed research notes, NotebookLM artifacts, source verification screenshots, and project implications. It also shows how the research affected my actual building process. Instead of researching AI in games separately from the prototype, I used the research to set boundaries for how I would use AI while developing the game.

The most important materials to reference are in the **Final Deliverables / Website Materials** column, especially the board that collects significant process artifacts and explains why they matter. The sources should also be referenced because they are the foundation of the project.

## AI Tools and Prompt Experiments
I used three main AI tools during the project:

**ChatGPT** was my main LLM. It helped me plan the project, organize the game-building process into clear priorities, generate prompts for GDevelop, and organize artifacts for the project website.

**NotebookLM** helped me understand research sources. I used it to summarize sources, create visual notes, and generate quizzes so I could check my understanding.

**GDevelop AI Chat / Agent** acted as my game-building assistant. These tools helped me create complicated event sequences, build technical systems, and debug issues inside the game engine.

Two prompt moments mattered the most:

The first was the planning prompt with ChatGPT. I asked ChatGPT to interview me one question at a time about the creative direction of my game. After enough answers, I asked it to organize my ideas into a priority list for what I should build first. This gave me a path to follow while keeping the creative voice mine.

The second was a debugging moment in GDevelop. The AI Agent was working too broadly and missed a small detail that was breaking the game. After several back-and-forth attempts, I was able to point out what the AI was missing and ask whether that was the root cause. Once the AI confirmed it, it made the necessary changes and fixed the issue. This showed both the limits of the AI and how much I was learning from the process.

## Process Page / Workflow and Pivots
Before building the game, I had ChatGPT help me sort my ideas into priorities. The major build stages were:

1. Player Combat Prototype
2. Basic Enemy System
3. Room Clear Logic
4. Small Manual Floor
5. Floor Transition
6. Upgrade System

Each priority acted like its own chapter. I would begin each priority with a prompt generated by ChatGPT, then paste that into GDevelop AI to get beginner-friendly steps. Once I had the list, I built alongside GDevelop one step at a time.

My workflow became:

**my idea → ChatGPT organizes the priority → GDevelop gives steps → I build and test → AI helps with event logic and debugging → I decide whether it works.**

The biggest pivot was that I got farther than I expected. Originally, I thought I would only be able to show a simple prototype that proved a gameplay loop was possible. I did not expect to reach a stage with unique character and enemy models, visual level designs, room logic, floor transitions, enemy scaling, and a playable loop.

## Final Product or Outcome
The current game is a top-down, dungeon-crawler roguelike prototype. The main goal is to explore a dungeon, clear rooms full of enemies, become stronger, and go as far down as possible.

At this stage, the game has a working Player Combat Prototype with WASD movement, mouse aiming, left-click shooting, and projectiles that deal damage. It has two enemy types: a chaser enemy that follows the player and deals contact damage, and a ranged enemy that shoots projectiles at the player. The game also has enemy health and player damage.

The strongest system is the dungeon loop. When the player enters a combat room, the room closes, enemies spawn, and the doors only reopen once every enemy is defeated. The current floor is manually built with a spawn room, combat room, upgrade room, and way-down room.

The game also has a floor transition system. When the player reaches the way-down room, they can interact with the stairs to increase the floor level, reset the stage, and increase difficulty by raising enemy health.

## Product Page / Authorship and Synthesis
The strongest part of the final outcome is that it has a playable loop with multiple mechanics working together. This prototype was developed by someone with no coding experience using AI as a guide and technical assistant.

My authorship shows through the decisions I made, the systems I tested, and the moments where I edited or redirected AI output. I did not just accept whatever AI created. I selected, tested, reshaped, rejected, and refined the work.

One important design decision was changing the upgrade room. Instead of simply giving the player a free upgrade, I wanted the room to create more tension. The player will eventually choose between the only heal available on that floor or an upgrade that makes the run easier. Choosing one deletes the other option for that floor.

Another decision was having entities turn by flipping vertically instead of rotating the whole sprite. This helped the game feel more like a 2D pixel game rather than a fully top-down gaming experience.

A more recent interaction decision was making the stairs require player input instead of triggering automatically through collision. This allows the player to choose when they want to progress or whether they want to explore the floor further.

## What I Learned
I learned that game development is both more accessible than I thought and more complex than I understood. Even a prototype has a staggering number of events, conditions, systems, and edge cases. Building this gave me even more respect for people who make games from the ground up.

I also learned that AI is most useful when it has a narrow job, clear context, and a user who tests the result. A detailed prompt makes a huge difference. The more specific I was, the more useful the AI became.

At the same time, AI is not perfect. It can hallucinate methods that do not exist, misunderstand the structure of the game, or miss bugs that require human observation. If I only relied on AI without intervening, it would have been harder to tell when something was wrong.

## Reflection Notes
Before this project, I mostly thought of AI as something people used for fun, like writing silly text or generating images. I also believed AI should have nothing to do with creativity because it could undermine the skills and ideas that artists and creators spend years building.

Now my thinking is more specific. I still believe AI can be harmful when it replaces people or takes over authorship, but I also see how powerful it can be when used properly. AI, like any other tool, is only as useful as the person guiding it.

My biggest click moment was being introduced to GDevelop. Before that, I was not sure how I was going to build a game with AI, let alone from scratch. GDevelop made the question feel possible instead of hypothetical.

I grew most as a beginner game developer and as someone learning how to get the most out of AI. I learned how to prompt better, how to test more carefully, and how to recognize when AI needed clearer direction.

## Private Evaluation Notes
These notes should stay separate from the public website:

- Grade-related reflections
- Anything overly personal
- Anything not directly connected to the game-building process
- Canvas/class reflection material that does not help explain the public case study

Messy notes, unfinished experiments, and debugging evidence can still belong on the public site if they help explain the process. They show the real work that went into the prototype.

## Evidence to Include
The public website should include selected screenshots, prompts, and videos from the **Process Evidence / Images** Milanote board. The strongest evidence categories are:

**Beginner Learning Evidence** — shows where I started and how I learned the basics of making a game for the first time.

**AI Planning Evidence** — shows the boundaries I set for AI and the roadmap I followed.

**Core Prototype Evidence** — shows the beginning stages of the game and how I applied what I learned from the beginner stage.

**AI Failure / Debugging Evidence** — shows that AI was not a perfect tool and that my own judgment was needed to fix problems.

**Dungeon Loop Evidence** — shows how much was accomplished with AI help and where the game is headed.

Two failure moments should be included because they strongly support the project argument:

**Room Clear Logic Failure:** The AI set the event logic too broadly, which caused enemies to spawn in every room instead of only the triggered room. I caught the issue and guided the AI toward a more specific solution.

**Linked Enemy Facing Failure:** Multiple enemies were accidentally synced when turning toward the player. The turning point came when I told the AI to “unlink the enemies from each other,” which helped make them act individually.

## Links and Workspace Materials
Important materials to reference:

- Final Deliverables / Website Materials column in Milanote
- Process Evidence / Images Milanote board
- Research sources and source notes
- GDC generative AI e-book
- Panchanadikar and Freeman indie game development research article
- GDevelop documentation and AI tool notes
- Milanote Research Map of all processed sources
- ChatGPT planning prompts and prompt logs
- GDevelop AI Chat / Agent prompts
- Gameplay screenshots and videos
- Debugging screenshots and before/after bug evidence
- Current playable prototype or GDevelop project/export
