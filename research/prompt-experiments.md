# Prompt Experiments and AI Outputs

Split from the command-center archive. These entries document prompts, tool/model use, accepted changes, rejected output, and creative-control notes.

## Prompt Experiment 1 â€” AI-Assisted Game Planning Without Taking Over

**Prompt used:**  

After using GDevelop for a little bit, I think it's time to use that experience and start developing my final deliverable; my first, fully fledged game. I'm working on the planning portion of my game. I need to organize what I'll be doing for my game. I will need you to give me questions, one at a time, asking me what my game is about. Basically this is the creative process and the questions could be the game loop, the mechanics, the story â€” anything that'll help me organize the parts of my game. After enough questions have been asked and answered, help me organize them into what you think I should prioritize making first. I want to keep this creatively mine, so if you have suggestions, make sure they mainly focus on the technical parts while avoiding any creative vision.

**Tool / model:**  

ChatGPT

**Output summary:**  

ChatGPT helped turn my game idea into a priority list that I was able to follow and build from: player combat, enemy system, temporary sprites, room clear logic, manual floor layout, floor transition, upgrades, and later randomization.

**What I accepted:**  

I accepted the technical build order because it helped me understand what systems needed to come first.

**What I changed or revised:**  

I kept control over the actual game concept, genre, mechanics, enemies, and creative direction.

**What I rejected:**  

I avoided letting AI invent the gameâ€™s identity or replace my design choices.

**What this shows about AI and creative voice:**  

This shows that AI can help organize a beginnerâ€™s production process without becoming the creator, as long as the human sets boundaries and makes the final design decisions.

## Prompt Experiment 2 â€” GDevelop AI Technical Debugging

**Prompt used:**  

There are two problems. The skeleton isn't moving away from the player because I can't add true to: Action: RangedEnemy.Add a force to move toward an object(Player, RangedEnemy.TopDownMovementBehavior::MaxSpeed(), "instant", true). The true at the end means "move away from".

and second, The skeleton isn't shooting because I can't add the "not exists" to the: Condition: RangedEnemy.Value of an object timer("AttackCooldown", ">=", 2) (or RangedEnemy.Value of an object timer("AttackCooldown", "not exists")). This checks if the timer is ready or hasn't started yet.

**Tool / model:**  

GDevelop AI Chat and Agent

**Output summary:**  

The AI Agent helped adjust the enemy logic so the Skeleton Archer could keep distance from the player and shoot properly. Eventually, the AI Agent produced a solution that was beyond what I could have built on my own. By allowing the GDevelop AI Agent adjust the event sequence, it was able to fix the issue I was having.

**What I accepted:**  

I accepted the technical fix because it solved a problem I could not easily figure out on my own.

**What I changed or revised:**  

I constantly tested the result myself and continued adjusting the prompt and testing the enemy behavior until it worked in my game.

**What I rejected:**  

Sometimes, GDevelop would suggest solutions that were renamed or didn't exist in the program, so I rejected or ignored instructions that did not match the actual options available in GDevelop.

**What this shows about AI and creative voice:**  

This shows that AI was useful as a technical assistant, but I still had to judge whether its instructions made sense, test the result, and decide whether the enemy behavior fit my intended combat design.

## Prompt Experiment 3 â€” AI Agent Failure and Entity Turning Fix

**Prompt used:**  

1. When one skeleton turns, all of them turn. Can you make each skeleton turn to face the player individually?

2. Take away the sprite rotation. I want them to flip vertically so that they face the player depending on what side they're on. I just wanted them to face the player individually, not in sync

3. They're still all facing the same direction regardless of what side they are on in relation to the player. Can you make it so that any skeleton that is on the left of the player is facing right and every skeleton that is on the right of the player facing left. And make it so that if one skeleton flips, they don't all turn the same direction

4. This isn't changing anything. Can you unlink each skeleton from each other or not?

**Tool / model:**  

GDevelop AI Agent

**Output summary:**  

I asked GDevelopâ€™s AI Agent to help fix a bug before starting Priority #4: Floor Logic. The issue involved getting each enemy/entity to turn individually instead of all enemies sharing or copying the same behavior. This became one of the bigger failures the AI Agent ran into. The first attempts did not solve the issue cleanly, and the fix became more complicated than expected. Eventually, I got it working again, but making each entity turn individually became one of the hardest technical tasks so far.

**What I accepted:**  

I accepted the parts of the AIâ€™s help that moved me closer to separating enemy/entity behavior correctly. This resulted in having the Skeleton Archer flipping logic placed within a "for each object" event which finally prevented them from syncing.

**What I changed or revised:**  

I had to keep testing the result, checking whether each entity behaved independently, and revising the prompt for the adjustments until the behavior worked properly in-game.

**What I rejected:**  

I rejected any solution that kept the enemies in sync instead of as individual entities, because that would make the visuals look inconsistent and broken.

**What this shows about AI and creative voice:**  

This shows that even though the AI was able to help with difficult technical problems, it can also fail or create confusing solutions. I still had to test, judge, and refine the mechanic so it fit my intended combat design.

