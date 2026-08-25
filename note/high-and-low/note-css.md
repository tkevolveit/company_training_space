
## font-family naing convention
Best Practice ArchitectureWhen building a custom utility class system or managing design tokens, categorize your typographic roles logically instead of tying them to temporary marketing font names:


The standard naming convention for font-family utility classes is to use a property prefix followed by an abstract role name or generic fallback identifier. Because utility classes aim to decouple styling from specific font files, names like .font-sans or .font-heading are preferred over specific font names like .font-helvetica


Generic Archetypes (Classification-based)Ideal for standard, global interface fallbacks.
- .font-sans
- .font-serif
- .font-mono

Tailwind CSS: Uses the font-{role} convention.
- .font-sans (Maps to standard sans-serif stack)
- .font-serif (Maps to standard serif stack)
- .font-mono (Maps to monospace stack)

Bootstrap 5: Follows the exact same font-{role} schema.
- .font-sans-serif
- .font-monospace



Type-based - I think this is easy
.font-family-mono
.font-family-sans
.font-family-serif