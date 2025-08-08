import os
from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Get the absolute path to the index.html file
    # The script is in jules-scratch/verification, so we need to go up three directories
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    file_path = os.path.join(base_path, 'index.html')

    # Use the file:// protocol to open the local file
    page.goto(f'file://{file_path}')

    # 1. Screenshot of the initial topic selection screen
    expect(page.get_by_role("heading", name="Kies 'n onderwerp")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/01_main_screen.png")

    # 2. Click on a topic and take a screenshot of the quiz
    # Use get_by_text to be specific
    page.get_by_text("Woordsoorte", exact=True).click()

    quiz_container = page.locator("#quiz-container")
    expect(quiz_container).to_be_visible()

    # Wait for the first question to be populated
    expect(page.locator("#question")).not_to_be_empty()
    page.screenshot(path="jules-scratch/verification/02_quiz_screen.png")

    # 3. Click an answer and take a screenshot of the feedback
    # The first question for Woordsoorte is "Identifiseer die soortnaam..." and the answer is "hond"
    page.get_by_role("button", name="hond").click()

    feedback_container = page.locator("#feedback-container")
    expect(feedback_container).to_be_visible()
    expect(feedback_container).to_contain_text("Reg!") # Check for correct feedback
    page.screenshot(path="jules-scratch/verification/03_feedback_screen.png")

    # 4. Click next, then answer incorrectly to see lives decrease
    page.get_by_role("button", name="Volgende").click()

    # Second question is about "Durban"
    expect(page.locator("#question")).to_contain_text("Durban")
    # Click a wrong answer
    page.get_by_role("button", name="Ek").click()

    expect(feedback_container).to_be_visible()
    expect(feedback_container).to_contain_text("Verkeerd.")

    # Check that lives have decreased to 2
    lives_container = page.locator("#lives-container")
    expect(lives_container).to_have_text("❤️❤️")
    page.screenshot(path="jules-scratch/verification/04_incorrect_feedback_and_lives.png")

    browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)
