# 7 Pasos para Cambiar tu Vida — Skill de Producto

## Trigger
Use this skill when working on ANY aspect of the 7 Pasos project: UI/UX decisions, copywriting, feature design, marketing, ads, onboarding flows, tracker logic, monetization, or cross-sell with GymCounter. This skill provides the philosophical and strategic foundation that every decision should align with.

## Context

### What is this?
"7 Pasos para Cambiar tu Vida" is a digital book + webapp companion for a 180-day personal transformation program. The author's philosophy: real change happens through micro-decisions, not grand gestures. The book gives you the framework, the app helps you execute it daily.

### The Core Thesis
Your life is the sum of your micro-decisions. 1,440 minutes per day, each one either moves you forward or holds you back. There are no neutral decisions. When you stack enough positive micro-decisions, your brain rewards you with oxytocin, creating a virtuous cycle that makes discipline easier over time.

### Target Audience
- Spanish-speaking (Argentine dialect), 25-45 years old
- People who feel stuck but have the desire to change
- Self-improvement seekers who've tried before but couldn't sustain it
- People who respond to practical, no-BS frameworks (not mystical/spiritual)
- The tone is direct, empathetic, and action-oriented — like a smart friend who cares

## The 7 Steps (Summary)

See `references/los-7-pasos.md` for full content of each step.

1. **Todo Cuenta** — Every micro-decision matters. 1,440 minutes/day. No neutral choices.
2. **Objetivos** — Write 10 concrete objectives in present tense for 180 days. 4 categories: Personal, Professional, Relationships, Financial. Read them aloud every morning.
3. **Tu Entorno** — You're the average of your 5 closest people. Audit who pushes you forward vs. who holds you back.
4. **Autopercepción** — How you talk to yourself programs your subconscious. "I can't" is a direct order to your brain not to try. Plan Fénix: take full responsibility.
5. **Disciplina** — Discipline is a muscle, not a talent. Train it with ONE micro-battle at a time. 21 days to form a habit. Each micro-victory releases oxytocin.
6. **Tu Cuerpo** — Your body is the vehicle for everything. Brain uses 20% of your energy. Sugar = cocaine for your brain. In 180 days every cell renews.
7. **Tu Relación con el Mundo** — Forgiveness is for you, not them. Be Switzerland (neutral). Family first, always. All 7 steps work as a system, not separately.

## Product Philosophy

See `references/filosofia-producto.md` for detailed product philosophy.

### Book-First
The reading IS the primary experience. The app exists to serve the book, not the other way around. Every feature should enhance or reinforce the reading, never replace it.

### Oxytocin-Driven Design
The entire UX is designed around the oxytocin loop: micro-victory → brain reward → want more → do more. The tracker, celebrations, progress visuals — all reinforce this cycle.

### Coach, Not Tool
The app speaks like a personal coach, not a cold productivity tool. Tone: encouraging, direct, celebratory. Uses "vos" (Argentine Spanish). Celebrates wins, gently pushes on inactive days.

### 180-Day Arc
Everything is framed within 180 days. Not a week, not a year. Six months is the sweet spot — long enough for real transformation, short enough to feel achievable. Every cell in your body renews in 180 days.

## Business Model

See `references/modelo-negocio.md` for pricing and implementation details.

**Current model (v1): Single product, single price.**
- **Libro completo**: $9 USD one-time, lifetime access
- Includes: full book + objectives + tracker with account + morning reading + streak visualization
- No subscriptions yet — bundle with GymCounter comes later
- **Cross-sell moment**: Step 6 ("Tu Cuerpo") naturally bridges to GymCounter (future)

## Key Principles for All Decisions

1. **Every feature must connect to a step** — If a feature doesn't reinforce at least one of the 7 steps, question whether it belongs.
2. **Simplicity over completeness** — The book preaches micro-decisions. The app should embody that: do one thing well, then add another.
3. **Present tense always** — Objectives, affirmations, UI copy — everything is in present tense ("Voy al gimnasio", not "Voy a ir").
4. **The 4 categories are sacred** — Personal, Profesional, Relaciones, Financiero. Every objective maps to one. The tracker uses the user's own objectives as categories.
5. **Progressive disclosure** — Users unlock features as they progress (reading → objectives → tracking). This IS the book's philosophy in UX form.
6. **Mobile-first** — This is a daily-use app. People check it morning and night from their phone.

## Connected App: GymCounter
- Gym tracking + military-style 180-day protocol
- Same philosophy: discipline, micro-victories, 180 days
- Natural cross-sell from Step 6 (Tu Cuerpo)
- URL: https://gym-counter-seven.vercel.app/
