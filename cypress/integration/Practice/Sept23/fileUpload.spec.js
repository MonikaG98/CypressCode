///<reference types = "cypress"/>

describe("fileupload option in cypress", function () {

    it('verify the fileupload in cypress', function () {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let myfile = "monika_cv.docx";
        cy.get('#fileUpload').attachFile(myfile)
        cy.get('.filename').should('contain', myfile)
    })

    it('verify the fileupload in drag and drop', function () {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let myfile = "DSC_2348.JPG";
        cy.get('#file').attachFile(myfile)
        cy.get('.box__success').should('contain.text', 'Done')
    })

    it('verify the multiple file upload in cypress', function () {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myfile = "DSC_2348.JPG";
        let myfile2 = "monika_cv.docx";
        let myfile3 = "example.json";
        cy.get('#filesToUpload').attachFile([myfile, myfile2, myfile3])
        cy.get('#fileList').children().should('have.length', 3)
    })

    it.only('verify the filename change while uploading', function () {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myfile = "DSC_2348.JPG";
        cy.get('#filesToUpload')
            .attachFile({ filePath: myfile, fileName: 'customFileName.JPG' })
        cy.get('#fileList').children().first().should('contain.text', 'customFileName')
        cy.get('#fileList').children().should('have.length', 1)
    })
})
