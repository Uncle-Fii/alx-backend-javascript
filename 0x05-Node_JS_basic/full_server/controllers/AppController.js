/**
 * Contains the miscellaneous route handlers.
 * @author Felix Nkrumah <https://github.com/Uncle-Fii>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
