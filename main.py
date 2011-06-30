import os.path
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template

class BasePage(webapp.RequestHandler):     
  def get_host(self):
    return "http://" + os.environ['SERVER_NAME'] + ((':' + os.environ['SERVER_PORT']) if os.environ['SERVER_PORT'] != '80' else '')
   
  def render(self, template_file, template_vars={}):
    template_vars['host'] = self.get_host()
    return self.response.out.write(template.render(os.path.join(os.path.dirname(__file__), 'views/'+ template_file), template_vars))

class MainHandler(BasePage):
    def get(self):
      self.render("index.html", {})

def main():
    application = webapp.WSGIApplication([('/', MainHandler)],
                                         debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
