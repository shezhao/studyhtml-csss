/* 1 */
// 发送效果：正常
// 撤回效果：正常
let nam = 'Au Au';
let suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(nam + String.fromCharCode(8237));

/* 2 */
// 发送效果：Au Audlrow olleh: 
// 撤回效果：Au Au息消条一了回撤
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(nam + String.fromCharCode(8238));

/* 3 */
// 发送效果：正常
// 撤回效果：正常
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(String.fromCharCode(8237) + nam);

/* 4 */
// 发送效果：dlrow olleh: uA uA
// 撤回效果：息消条一了回撤uA uA
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(String.fromCharCode(8238) + nam);

/* 5 */
// 发送效果：Au Au头狗的你下一了摸并: hello world
// 撤回效果：Au Au头狗的你下一了摸并撤回了一条消息
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(nam + String.fromCharCode(8237) + suffix);

/* 6 */
// 发送效果：Au Audlrow olleh: 并摸了一下你的狗头
// 撤回效果：Au Au息消条一了回撤并摸了一下你的狗头
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(nam + String.fromCharCode(8238) + suffix);

/* 7 */
// 发送效果：Au Au: hello world并摸了一下你的狗头
// 撤回效果：Au Au息消条一了回撤并摸了一下你的狗头
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(nam + String.fromCharCode(8238) + suffix + String.fromCharCode(8237));

/* 8 */
// 发送效果：Au Au头狗的你下一了摸并dlrow olleh:
// 撤回效果：Au Au息消条一了回撤并摸了一下你的狗头
nam = 'Au Au';
suffix = '并摸了一下你的狗头'.split('').reverse().join('');
console.log(nam + String.fromCharCode(8237) + suffix + String.fromCharCode(8238));
