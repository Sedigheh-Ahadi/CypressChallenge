///<reference types= "cypress"/>


describe('Mouse Actions', function () {
    it('Typical mouse commands', function () {
        // Click
        
        cy.visit("https://play2.automationcamp.ir/index.html")
        cy.get("input#male").click()
        cy.get("input#male").should('be.checked')
        // Double Click
        cy.contains("Double-click me").dblclick()
        cy.contains("Your Sample Double Click worked!")
        // Right click + Position
        cy.get("body").rightclick("top")
        // Force Click
        cy.get("body").rightclick({force: true})
        // Hold CTRL and click
        cy.get('[href="contact.html"]').click({ctrlKey: true})

    });
    it('Hovering with plugin and trigger command', function () {
        // When implemented by onmouseover event
        cy.visit("test-hover.html")
        cy.get('#left11').should('not.be.visible')
        cy.get("#menu1").trigger('mouseover')
        cy.get('#left11').should('be.visible')

        // When implemented by CSS Psedu-class `:hover`
        cy.get('#left21').should('not.be.visible')
        cy.get("#menu2").realHover()
        cy.get('#left21').should('be.visible')
    });
    it('Long Press (Click and Hold)', function () {
        cy.visit("https://demos.telerik.com/kendo-ui/circular-gauge/index")
        cy.get(".qual_x_svg_dash").click()
        cy.get("#onetrust-accept-btn-handler").click()
        // cy.get("[role=button][title=Increase]").trigger('mousedown', {which: 1})
        cy.get("[role=button][title=Increase]").realMouseDown()
            .wait(3000)
            .trigger('mouseup', {force: true})
        cy.get("[role=slider]").invoke("attr", 'aria-valuenow')
            .should('not.equal', '55')
    });
    it('Drag and Drop', function () {
        cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
        cy.get("#draggable")
            .trigger("mousedown", {which: 1})
            .get("#droppable")
            .trigger("mousemove")
            .trigger("mouseup", {force: true})
    });

    it('Drag and Drop by offset', function () {
        cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html")
        cy.get("#draggable")
            .trigger("mousedown", {which: 1})
            .realMouseMove(300, 100)
            .realMouseUp()
    });
});

describe('Scroll commands', function () {
    // topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight
    it('1-Scroll Page - To Position', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo('bottom')
    });
    it('2-Scroll Page - By Coordination', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo(0, 1300)
    });
    it('3-Scroll Page - By Pixel', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo('0px', '3000px')
    });
    it('4-Scroll Page - By Percentage', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.scrollTo('0%', '60%')
    });
    it('5-Scroll Element Into View', function () {
        cy.visit("https://www.imdb.com/chart/top/")
        cy.get(':nth-child(245) .ipc-title-link-wrapper').scrollIntoView()
    });
    it('6-Scroll Element - To Position', function () {
        cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
        cy.scrollTo("100%", "10%")
        cy.get(".dataTables_scrollBody").scrollTo('right')

    });
    it('7-Scroll Element - By Coordination', function () {
        cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
        cy.scrollTo("100%", "10%")
        cy.get(".dataTables_scrollBody").scrollTo(300, 400)
    });
    it('8-Scroll Element - By Percentage', function () {
        cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
        cy.scrollTo("100%", "10%")
        cy.get(".dataTables_scrollBody").scrollTo('50%', '50%')
    });
    it('9-Scroll with Duration', function () {
        cy.visit("https://datatables.net/examples/basic_init/scroll_xy.html")
        cy.scrollTo("100%", "10%")
        cy.get(".dataTables_scrollBody").scrollTo('center', {duration: "2000"})
    });
    it('10-Scroll with Line Easing', function () {
        cy.visit("https://datatables.net/examples/basic_init/scroll_y.html")
        cy.scrollTo("100%", "10%")
        cy.wait(500)
        // cy.get(".dataTables_scrollBody").scrollTo('center', {duration:500, easing: 'swing' })
        cy.get(".dataTables_scrollBody").scrollTo('center', {duration:500, easing: 'linear' })
    });

});