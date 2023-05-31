const pluginNavigation = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"./src/_passthrough/": "/"});
  eleventyConfig.addPlugin(pluginNavigation);  
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'public',
    },
    templateFormats: ['md', 'html'],
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}

