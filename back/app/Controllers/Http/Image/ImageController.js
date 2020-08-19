'use strict'


class ImageController {
    async store ({ request }) {
        const Helpers = use('Helpers')

        const profilePic = request.file('image', {
            types: ['image'],
            size: '2mb'
          })
        
          await profilePic.move(Helpers.publicPath('uploads'), {
            name: 'custom-name.jpg',
            overwrite: true
          })
        
          if (!profilePic.moved()) {
            return profilePic.error()
          }
          return({
              "url": "http://127.0.0.:3333/uploads/" + 'custom-name.jpg'
          })


      }
}

module.exports = ImageController
