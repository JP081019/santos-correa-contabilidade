from playwright.sync_api import sync_playwright

VIEWPORTS = [(375, 812), (430, 900), (768, 900), (1024, 900), (1440, 1000)]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for width, height in VIEWPORTS:
        page = browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto("http://localhost:3040", wait_until="commit", timeout=10000)
        page.locator("#inicio").wait_for(state="attached", timeout=30000)
        page.wait_for_load_state("domcontentloaded", timeout=30000)
        page.wait_for_timeout(1000)
        for image in [".brand-logo", ".team-photo img", ".jp-logo"]:
            assert page.locator(image).first.evaluate("img => img.complete && img.naturalWidth > 0")
        for label in ["MEI", "Simples Nacional", "Lucro Presumido", "Lucro Real"]:
            page.get_by_role("tab", name=label, exact=True).click()
            page.wait_for_timeout(380)
            panel = page.get_by_role("tabpanel")
            assert panel.is_visible() and panel.inner_text().strip()
        page.locator(".service-card").first.dispatch_event("click")
        page.get_by_role("dialog").wait_for(state="visible", timeout=3000)
        page.get_by_role("button", name="Fechar detalhes").click()
        assert not page.get_by_role("dialog").is_visible()
        assert "santoscorreacontabilidade" in page.locator('a[href*="instagram.com"]').get_attribute("href")
        assert page.locator('a[href*="wa.me"]').count() > 0
        page.locator("footer").scroll_into_view_if_needed()
        page.wait_for_timeout(400)
        button = page.locator(".floating-whatsapp").bounding_box()
        credit = page.locator(".credit").bounding_box()
        overlap = not (button["x"] + button["width"] <= credit["x"] or credit["x"] + credit["width"] <= button["x"] or button["y"] + button["height"] <= credit["y"] or credit["y"] + credit["height"] <= button["y"])
        assert not overlap, f"WhatsApp sobrepõe JPCreative em {width}px"
        for selector in ["#inicio", "#servicos", "#regimes", "#sobre", "#contato", "footer"]:
            assert page.locator(selector).evaluate("el => el.getBoundingClientRect().right <= innerWidth + 1")
        assert not errors, errors
        print(f"{width}px: imagens, favicon, tabs, modal, links e footer OK")
        page.close()
    browser.close()
