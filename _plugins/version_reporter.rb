# An example Jekyll generator. Utilizes the new plugin system.
#
# 1. Make a _plugins directory in your jekyll site, and put this class in a file there.
# 2. Upon site generation, the VERSION file will be created in your root destination with
#    the version of Jekyll which generated it

module Jekyll
  class VersionReporter < Generator
    safe true

    def generate(site)
      File.open(File.join(site.source, 'VERSION'), 'w') do |f|
        f.write(generate_report(site))
      end
    end

    private

    def generate_report(site)
      "Site generated with Jekyll version: #{Jekyll::VERSION}"
    end

  end
end
