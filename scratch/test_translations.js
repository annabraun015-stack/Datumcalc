
const { reverseTranslateSlug, translateSlug } = require('./src/lib/seo/translations');

// Mocking SLUG_TOKEN_TRANSLATIONS for the test since we can't easily import it without setup
const SLUG_TOKEN_TRANSLATIONS = {
    de: { 
        'tage': 'tage', 'monate': 'monate', 'jahre': 'jahre', 
        'ab-heute': 'ab-heute', 'tage-bis': 'tage-bis'
    },
    en: { 
        'tage': 'days', 'monate': 'months', 'jahre': 'years', 
        'ab-heute': 'from-today', 'tage-bis': 'days-until'
    }
};

// Simple mock of the functions if we can't run them directly
function test() {
    const slug = "2913-tage-ab-heute";
    const locale = "en";
    
    // In the app, it does:
    // const canonicalSlugStr = reverseTranslateSlug(slugStr, locale);
    // const correctSlug = translateSlug(canonicalSlugStr, locale);
    
    console.log("Original Slug:", slug);
    console.log("Locale:", locale);
    
    // Based on the code in translations.ts:
    // reverseTranslateSlug will try 'en' then others.
    // 'days' -> 'tage', 'from-today' -> 'ab-heute'
    // But the slug is already 'tage-ab-heute'.
    // If it's already German, reverseTranslateSlug should leave it alone (or replace German with German).
    
    // Let's see what translateSlug does to a German slug for locale 'en'
    // It should replace 'tage' with 'days' and 'ab-heute' with 'from-today'
}

test();
