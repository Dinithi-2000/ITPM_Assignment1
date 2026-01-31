// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Singlish to Sinhala Translation System Test Suite
 * Website: https://www.swifttranslator.com/
 * 
 * Test Coverage:
 * - 24+ Positive functional test cases
 * - 10+ Negative functional test cases
 */

// Base URL for the application
const BASE_URL = 'https://www.swifttranslator.com/';


async function enterSinglishAndGetSinhala(page, singlishText) {
 
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  
  // Clear and enter text
  await singlishInput.clear();
  await page.waitForTimeout(500);
  await singlishInput.fill(singlishText);
  
  // Wait for conversion with longer timeout
  await page.waitForTimeout(2500);
  

  let sinhalaOutput = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
  let outputText = await sinhalaOutput.textContent().catch(() => '');
  
  if (!outputText || outputText.trim() === '') {
    sinhalaOutput = page.locator('div.whitespace-pre-wrap').last();
    outputText = await sinhalaOutput.textContent().catch(() => '');
  }
  
  return outputText ? outputText.trim() : '';
}

test.describe('Positive Functional Test Cases', () => {
  
  test.beforeEach(async ({ page }) => {
    // Set longer timeout for navigation
    test.setTimeout(60000);
    
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000); // Wait for page to settle
  });

  // ========== SIMPLE SENTENCES ==========
  
  test('Pos_Fun_01: Convert simple sentence about studying', async ({ page }) => {
    const input = 'mama lecture ekata yanavaa';
    const expectedOutput = 'මම lecture එකට යනවා';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== COMPOUND SENTENCES ==========
  
  test('Pos_Fun_02: Convert compound sentence with invitation', async ({ page }) => {
    const input = 'mama gedhara yanavaa,oyath enna maath ekka yanna';
    const expectedOutput = 'මම ගෙදර යනවා,ඔයත් එන්න මාත් එක්ක යන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== COMPLEX SENTENCES ==========
  
  test('Pos_Fun_03: Convert complex sentence with condition', async ({ page }) => {
    const input = 'vahinavaa unath api ethanata yanna epaeyi';
    const expectedOutput = 'වහිනවා උනත් අපි එතනට යන්න එපැයි';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== INTERROGATIVE (QUESTIONS) ==========
  
  test('Pos_Fun_04: Convert polite question about well-being', async ({ page }) => {
    const input = 'oyaa hodhin innavadha?';
    const expectedOutput = 'ඔයා හොදින් ඉන්නවද?';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== IMPERATIVE (COMMANDS) ==========
  
  test('Pos_Fun_05: Convert simple imperative command', async ({ page }) => {
    const input = 'meheta enna';
    const expectedOutput = 'මෙහෙට එන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== PRESENT TENSE ==========
  
  test('Pos_Fun_06: Convert present tense work statement', async ({ page }) => {
    const input = 'mama gedhara vaeda karanavaa';
    const expectedOutput = 'මම ගෙදර වැඩ කරනවා';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== NEGATIVE STATEMENTS ==========
  
  test('Pos_Fun_07: Convert negative statement with negation', async ({ page }) => {
    const input = 'oyaa hariyata dhaenviim tika dhaala naehae';
    const expectedOutput = 'ඔයා හරියට දැන්වීම් ටික දාල නැහැ';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== GREETINGS ==========
  
  test('Pos_Fun_08: Convert greeting with exclamation', async ({ page }) => {
    const input = 'suBha raathriyak!';
    const expectedOutput = 'සුභ රාත්‍රියක්!';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== POLITE REQUESTS ==========
  
  test('Pos_Fun_09: Convert polite request question', async ({ page }) => {
    const input = 'mata mee paadama kiyalaa dhenna puLuvandha?';
    const expectedOutput = 'මට මේ පාඩම කියලා දෙන්න පුළුවන්ද?';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== AGREEMENT/RESPONSE ==========
  
  test('Pos_Fun_10: Convert agreement response', async ({ page }) => {
    const input = 'ov,mama eeka karannam';
    const expectedOutput = 'ඔව්,මම ඒක කරන්නම්';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== POLITE SUGGESTIONS WITH ENGLISH WORDS ==========
  
  test('Pos_Fun_11: Convert polite suggestion with English word', async ({ page }) => {
    const input = 'karuNaakaralaa api mea sambandhea navaththamudha?';
    const expectedOutput = 'කරුණාකරලා අපි මේ සම්බන්දේ නවත්තමුද?';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== INFORMAL COMMANDS WITH SLANG ==========
  
  test('Pos_Fun_12: Convert informal command with slang', async ({ page }) => {
    const input = 'eeyi, ooka mehema karapan';
    const expectedOutput = 'ඒයි, ඕක මෙහෙම කරපන්';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== FEELING STATEMENTS ==========
  
  test('Pos_Fun_13: Convert statement about feeling', async ({ page }) => {
    const input = 'mata dhaen badaginiyi';
    const expectedOutput = 'මට දැන් බඩගිනියි';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== REPEATED WORDS FOR EMPHASIS ==========
  
  test('Pos_Fun_14: Convert repeated word for emphasis', async ({ page }) => {
    const input = 'chuttak chuttak';
    const expectedOutput = 'චුට්ටක් චුට්ටක්';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== NEED STATEMENTS WITH ENGLISH WORDS ==========
  
  test('Pos_Fun_15: Convert need statement with English word', async ({ page }) => {
    const input = 'mata cake kaeellak oonea';
    const expectedOutput = 'මට cake කෑල්ලක් ඕනේ';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== REPEATED IMPERATIVES ==========
  
  test('Pos_Fun_16: Convert double repetition for emphasis', async ({ page }) => {
    const input = 'inna inna';
    const expectedOutput = 'ඉන්න ඉන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    console.log('Test 16 - Expected:', expectedOutput);
    console.log('Test 16 - Actual:', actualOutput);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== FUTURE TENSE ==========
  
  test('Pos_Fun_17: Convert future wish statement', async ({ page }) => {
    const input = 'mata oyath ekka jiivath venna amaaruyi';
    const expectedOutput = 'මට ඔයත් එක්ක ජීවත් වෙන්න අමාරුයි';
    
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    const divCount = await outputDiv.count();
    console.log('Test 17 - Output div count:', divCount);
    console.log('Test 17 - Expected:', expectedOutput);
    console.log('Test 17 - Actual:', actualOutput);
    
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== MIXED LANGUAGE - BUSINESS CONTENT ==========
  
  test('Pos_Fun_18: Convert mixed-language business content', async ({ page }) => {
    const input = 'anea boss, client presentation eka finish karalaa mata Google Drive link eka share karanna puLuvandha? Mama eeka print karanna oonee. Oyaa PDF version ekath thiyanavaa nam eekath evanna';
    const expectedOutput = 'අනේ boss, client presentation එක finish කරලා මට Google Drive link එක share කරන්න පුළුවන්ද? මම ඒක print කරන්න ඕනේ. ඔයා PDF version එකත් තියනවා නම් ඒකත් එවන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    console.log('Test 18 - Expected:', expectedOutput);
    console.log('Test 18 - Actual:', actualOutput);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== REQUEST WITH ABBREVIATION ==========
  
  test('Pos_Fun_19: Convert request for ID with abbreviation', async ({ page }) => {
    const input = 'mata oyaagee ID eka dhenna puLuvandha?';
    const expectedOutput = 'මට ඔයාගේ ID එක දෙන්න පුළුවන්ද?';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    console.log('Test 19 - Expected:', expectedOutput);
    console.log('Test 19 - Actual:', actualOutput);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== SOCIAL MEDIA TERMS ==========
  
  test('Pos_Fun_20: Convert request with social media terms', async ({ page }) => {
    const input = 'mata oyaagee LinkedIn username eka whatsapp karanna';
    const expectedOutput = 'මට ඔයාගේ LinkedIn username එක whatsapp කරන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== QUOTATION MARKS ==========
  
  test('Pos_Fun_21: Convert sentence with quotation marks', async ({ page }) => {
    const input = 'Ammaa kivvaa "mama heta enavaa" kiyalaa';
    const expectedOutput = 'අම්මා කිව්වා "මම හෙට එනවා" කියලා';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== TIME FORMAT IN COMPOUND SENTENCE ==========
  
  test('Pos_Fun_22: Convert time format with compound sentence', async ({ page }) => {
    const input = ' 7.30 AM vedhdhi laeesthi velaa inna,mama enavaa oyaava ganna';
    const expectedOutput = '7.30 AM වෙද්දි ලෑස්ති වෙලා ඉන්න,මම එනවා ඔයාව ගන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== DATE FORMAT IN SENTENCE ==========
  
  test('Pos_Fun_23: Convert date format in sentence', async ({ page }) => {
    const input = 'Project deadline eka 2026-02-01 nisaa mama adha eeka ivara karanavaa.';
    const expectedOutput = 'Project deadline එක 2026-02-01 නිසා මම අද ඒක ඉවර කරනවා.';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== DOCUMENT SHARING INSTRUCTION ==========
  
  test('Pos_Fun_24: Convert document sharing instruction', async ({ page }) => {
    const input = 'oyaage documents tika okkoma mage email ekata send karanna';
    const expectedOutput = 'ඔයාගෙ documents ටික ඔක්කොම mage email එකට send කරන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    expect(actualOutput).toBe(expectedOutput);
  });

});

test.describe('Negative Functional Test Cases', () => {
  
  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);
    
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
  });

  // ========== FORMATTING ISSUES - MULTIPLE SPACES ==========
  
  test('Neg_Fun_01: Multiple excessive spaces in sentence', async ({ page }) => {
    const input = 'mama heta  oyaalage   gedhara enavaa';
    const expectedOutput = 'මම හෙට ඔයාලගෙ ගෙදර එනවා';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if system doesn't normalize multiple spaces correctly
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== EMOJI IN TEXT ==========
  
  test('Neg_Fun_02: Emoji in text', async ({ page }) => {
    const input = 'subha dhvaasak😊';
    const expectedOutput = 'සුභ දවසක්';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if emoji is not handled properly
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== JOINED WORDS WITHOUT SPACES ==========
  
  test('Neg_Fun_03: Joined words without spaces', async ({ page }) => {
    const input = 'mamahetaratayanavaa';
    const expectedOutput = 'මම හෙට රට යනවා';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if system cannot segment joined words
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== JOINED WORDS WITHOUT SPACES - INTERROGATIVE ==========
  
  test('Neg_Fun_04: Joined words without spaces in question', async ({ page }) => {
    const input = 'oyaaadhagedhara yanavadha?';
    const expectedOutput = 'ඔයා අද ගෙදර යනවද?';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if missing spaces cause incorrect segmentation
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== SPECIAL CHARACTER IN MIDDLE OF WORD ==========
  
  test('Neg_Fun_05: Special character in middle of word', async ({ page }) => {
    const input = 'mama dhaen gedhara ya@navaa';
    const expectedOutput = ' මම දැන් ගෙදර යනවා';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if special character @ is not removed from word
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== URL WITH SINGLISH TEXT ==========
  
  test('Neg_Fun_06: Website URL with Singlish text', async ({ page }) => {
    const input = 'www.doenets.com eken gihin oyaagee prathiPala balanna';
    const expectedOutput = 'www.doenets.com එකෙන් ගිහින් ඔයාගේ ප්‍රතිඵල බලන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if URL domain is incorrectly converted to Sinhala
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== PASSWORD WITH SPECIAL CHARACTERS ==========
  
  test('Neg_Fun_07: Password with special characters', async ({ page }) => {
    const input = 'magee phone ekee password eka Abc@123 kiyala thiyaaganna';
    const expectedOutput = 'මගේ phone එකේ password එක Abc@123 කියල තියාගන්න';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if password case sensitivity is not preserved
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== EMAIL ADDRESS IN SENTENCE ==========
  
  test('Neg_Fun_08: Email address in sentence', async ({ page }) => {
    const input = 'mata oyaagee details tika email karanna, testUser12@gmail.com';
    const expectedOutput = 'මට ඔයාගේ details ටික email කරන්න, testUser12@gmail.com';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if email address is partially transliterated
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== INFORMAL ABBREVIATION ==========
  
  test('Neg_Fun_09: Informal abbreviation LOL', async ({ page }) => {
    const input = 'siraavata,ela kiri machan.eka poddak amaaruyi vagee bQQ';
    const expectedOutput = 'සිරාවට,එල කිරි මචන්.ඒක පොඩ්ඩක් අමාරුයි වගේ බQQ';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if abbreviation LOL is not handled (informal text-speak)
    expect(actualOutput).toBe(expectedOutput);
  });

  // ========== SLANG-BASED INFORMAL POSITIVE EXPRESSION ==========
  
  test('Neg_Fun_10: Slang-based informal positive expression', async ({ page }) => {
    const input = ' hari machan! supiri!!!';
    const expectedOutput = 'හරි මචන්! සුපිරි!';
    const actualOutput = await enterSinglishAndGetSinhala(page, input);
    
    // This test will fail if slang words or multiple exclamation marks are not handled correctly
    expect(actualOutput).toBe(expectedOutput);
  });

});
