// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Diagnostic test to find correct selectors on the website
 * Run this with: npx playwright test tests/inspect-website.spec.js --headed
 */

test('Find all input/output elements on page', async ({ page }) => {
  test.setTimeout(60000);
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  console.log('\n========== DIAGNOSTIC REPORT ==========');
  
  // Find all textareas
  const textareas = await page.locator('textarea').all();
  console.log(`\nFound ${textareas.length} textarea(s)`);
  for (let i = 0; i < textareas.length; i++) {
    const id = await textareas[i].getAttribute('id');
    const className = await textareas[i].getAttribute('class');
    const placeholder = await textareas[i].getAttribute('placeholder');
    console.log(`  Textarea ${i+1}:`, { id, className, placeholder });
  }
  
  // Find all inputs
  const inputs = await page.locator('input[type="text"], input:not([type])').all();
  console.log(`\nFound ${inputs.length} input(s)`);
  for (let i = 0; i < inputs.length; i++) {
    const id = await inputs[i].getAttribute('id');
    const className = await inputs[i].getAttribute('class');
    const placeholder = await inputs[i].getAttribute('placeholder');
    console.log(`  Input ${i+1}:`, { id, className, placeholder });
  }
  
  // Find contenteditable elements
  const editables = await page.locator('[contenteditable="true"]').all();
  console.log(`\nFound ${editables.length} contenteditable element(s)`);
  for (let i = 0; i < editables.length; i++) {
    const id = await editables[i].getAttribute('id');
    const className = await editables[i].getAttribute('class');
    console.log(`  Editable ${i+1}:`, { id, className });
  }
  
  // Find all buttons
  const buttons = await page.locator('button').all();
  console.log(`\nFound ${buttons.length} button(s)`);
  for (let i = 0; i < buttons.length; i++) {
    const id = await buttons[i].getAttribute('id');
    const text = await buttons[i].textContent();
    console.log(`  Button ${i+1}:`, { id, text: text?.trim() });
  }
  
  // Test the actual conversion
  console.log('\n--- TESTING CONVERSION ---');
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputField.fill('mama lecture ekaa yanavaa');
  console.log('Input filled with: mama lecture ekaa yanavaa');
  
  await page.waitForTimeout(2000);
  
  // Try to find the output
  const allDivs = await page.locator('div.w-full').all();
  console.log(`\nFound ${allDivs.length} div.w-full element(s)`);
  for (let i = 0; i < Math.min(allDivs.length, 5); i++) {
    const text = await allDivs[i].textContent();
    const className = await allDivs[i].getAttribute('class');
    if (text && text.trim().length > 0 && text.trim().length < 100) {
      console.log(`  Div ${i+1}:`, { className, text: text.trim().substring(0, 50) });
    }
  }
  
  console.log('\n========================================\n');
  
  // Take a screenshot
  await page.screenshot({ path: 'test-results/website-screenshot.png', fullPage: true });
  console.log('Screenshot saved to: test-results/website-screenshot.png');
});
