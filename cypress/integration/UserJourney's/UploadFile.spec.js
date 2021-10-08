  //Photo Uploader //

//import { verify } from "cypress/types/sinon"

  describe('upload the file',function() {
    beforeEach(function() {
      cy.visit('https://ivy-web-tst.azure.defra.cloud/upload-photo')
    })
    it('Upload files', function(){

    const fileName = '"C:/Users/aliak/OneDriveDesktop/Dog image.jpeg"'  

      
      cy.get('#files').upload({fileContent,fileName,mimeType:'image/jpeg'})
      cy.readFile('"C:/Users/aliak/OneDrive/Desktop/Dog image.jpeg"').then(function(fileContent){
      //cy.get('[data-cy="file-input"]').upload({ fileContent, fileName, mimeType: 'application/json' });
      //cy.get('[data-cy="file-input"]').attachFile('example.json')
      // cy.get('#file-submit').click()

    })

    })
  })

describe('Example to demonstrate file upload in cypress', function () {
  before(function () {
      cy.visit('https://the-internet.herokuapp.com/upload')
  })

  it('File Upload using cypress-file-upload npm package', () => {
      const filepath = 'images/Elephant.jpg'
      cy.get('input[type="file"]').attachFile(filepath)
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').contains('Elephant.jpg')
  })
})
   
// describe('Drop', () => {
//   const UPLOAD_URL = 'https://the-internet.herokuapp.com/upload';
//   const UPLOAD_RESPONSE = {
//     result: [
//       {
//         fieldName: 'file',
//         name: 'Elephant.jpg',
//         //size: '372900',
//       },
//     ],
//   };

//   beforeEach(() => {
//     cy.visit('https://the-internet.herokuapp.com/upload');
//   });

//   it('successfully uploads a file', () => {
//     cy.server();
//     cy.route('POST', UPLOAD_URL, UPLOAD_RESPONSE);

//     cy.fixture('Elephant.jpg', 'base64').then(fileContent => {
//       cy.get('[data-cy="file-upload"]')
//         /**
//          * ng-file-upload puts a hidden HTML5 input into the DOM
//          * so in order to simulate user's action we take that hidden input as upload target
//          */
//         .last()
//         .upload({ fileContent, fileName: 'Elephant.jpg', mimeType: 'image/jpg' }, { subjectType: 'input' });

//       cy.get('[data-cy="file-submit"]').contains('Elephant.jpg');
//     });
//   });
// });