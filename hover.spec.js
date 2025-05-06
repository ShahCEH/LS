const{test, expect} = require ('@playwright/test');

test ('mouse actions', async ({page}) => {
    

    await page.goto('https://www.amazon.in/')
    await page.hover("//a[@data-csa-c-content-id='nav_cs_mobiles']")

    await page.waitForTimeout(3000)
    await page.click("//a[@data-csa-c-content-id='nav_cs_mobiles']")
    await page.waitForTimeout(3000)
    // await page.click("//a[text()='Table Lamps']")
    // await page.waitForTimeout(3000)


})