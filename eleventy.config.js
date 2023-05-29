module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"./src/_passthrough/": "/"});
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

