var fm = require('hexo-front-matter');

hexo.extend.filter.register('before_post_render', function(data) {
	var front = fm.parse(data.raw);
    var category = front.category;
    if (category) {
        data.category = category
    }
})