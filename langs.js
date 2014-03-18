﻿var langs = {
    "en-US": {
        // popup
        wordsbaking: "WordsBaking",
        define: "Define",
        definePhrase: "Phrase",
        nothingFound: "Nothing found",
        definitionTitles: {
            en: "English Definitions",
            zh: "Chinese Definitions"
        },
        webDefinitions: "Web Definitions",
        addToWordsbook: "add to wordsbook",
        removeFromWordsbook: "remove from wordsbook",
        setupAccount: 'wordsbook',
        bingMore: "Bing more",
        poweredBy: 'Powered by Bing & Baidu',
        synonyms: "Synonyms",
        translation: "Translation",
        translatedFrom: "Translated from",
        loading: "Loading",
        errorLoading: "Error loading data",
        tenses: {
            "pt": "past tense",
            "pp": "past participle",
            "3pps": "3rd person singular present",
            "prp": "present participle",
            "pl": "plural",
            "s": "singular",
            "cp": "comparative",
            "sp": "superlative"
        },
        langNames: {
            ar: "Arabic", ara: "Arabic", ca: "Catalan", cs: "Czech", da: "Danish", de: "German", el: "Greek", en: "English", es: "Spanish", spa: "Spanish", fi: "Finnish", fr: "French", fra: "French", hi: "Hindi", hr: "Croatian", id: "Indonesian", it: "Italian", iw: "Hebrew", ja: "Japanese", jp: "Japanese", ko: "Korean", kor: "Korean", nl: "Dutch", no: "Norwegian", pl: "Polish", "pt-br": "Portuguese", "pt-pt": "Portuguese", pt: "Portuguese", ro: "Romanian", ru: "Russian", sr: "Serbian", sk: "Slovak", sv: "Swedish", th: "Thai", tl: "Tagalog", tr: "Turkish", uk: "Ukrainian", vi: "Vietnamese", "zh-cn": "Chinese", "zh-tw": "Chinese", zh: "Chinese", yue: "Cantonese", wyw: "Classical Chinese"
        },
        options: {
            pageTitle: "WordsBaking+ Options",
            pageTitleHtml: "WordsBaking<span>+</span> Options",
            audioGroup: 'Audio Options',
            autoAudio: "Play audio automatically when it's available",
            popupGroup: 'Popup Options',
            popupCtrlKey: 'Open a popup layer if the phrase is selected when Ctrl key is pressing',
            popupDblClick: 'Open a popup layer if the phrase is selected by double click',
            account: 'WordsBaking Account',
            accountDescriptionHtml: 'Please enter your <a href="http://wordsbaking.com" target="_blank">WordsBaking</a> account below to enable wordsbook feature.',
            email: 'Email',
            password: 'Password',
            checkAccount: 'Check',
            checkingAccount: 'Checking...',
            validAccount: 'Great! This account is valid.',
            invalidAccount: 'Oops... This account is invalid.',
            tips: {
                title: 'Tips',
                items: [
                    'You can use -/+ key to navigate conveniently.'
                ]
            }
        }
    },
    "zh-CN": {
        // popup
        wordsbaking: "词焙",
        define: "定义",
        definePhrase: "词条",
        nothingFound: "未找到对应词条",
        definitionTitles: {
            en: "英文释义",
            zh: "中文释义"
        },
        webDefinitions: "网络释义",
        addToWordsbook: "添加到词焙生词本",
        removeFromWordsbook: "从词焙生词本中删除",
        setupAccount: '词焙生词本',
        poweredBy: '由必应和百度强力驱动',
        bingMore: "去必应查看更多",
        synonyms: "近义词",
        translation: "翻译",
        translatedFrom: "翻译自",
        loading: "加载中",
        errorLoading: "加载出现错误",
        tenses: {
            "pt": "过去时",
            "past tense": "过去时",
            "pp": "过去分词",
            "past participle": "过去分词",
            "3pps": "第三人称单数",
            "3rd person singular present": "第三人称单数",
            "prp": "现在分词",
            "present participle": "现在分词",
            "pl": "复数",
            "plural": "复数",
            "s": "单数",
            "singular": "单数",
            "cp": "比较级",
            "comparative": "比较级",
            "sp": "最高级",
            "superlative": "最高级"
        },
        langNames: {
            ar: "阿拉伯语", ara: "阿拉伯语", ca: "加泰罗尼亚语", cs: "捷克语", da: "丹麦语", de: "德语", el: "希腊语", en: "英语", es: "西班牙语", spa: "西班牙语", fi: "芬兰语", fr: "法语", fra: "法语", hi: "印地语", hr: "克罗地亚语", id: "印尼语", it: "意大利语", iw: "希伯来语", ja: "日语", jp: "日语", ko: "韩语", kor: "韩语", nl: "荷兰语", no: "挪威语", pl: "波兰语", "pt-br": "葡萄牙语", "pt-pt": "葡萄牙语", pt: "葡萄牙语", ro: "罗马尼亚语", ru: "俄语", sr: "塞尔威亚语", sk: "斯洛伐克语", sv: "瑞典语", th: "泰语", tl: "他加绿语", tr: "土耳其语", uk: "乌克兰语", vi: "越南语", "zh-cn": "中文", "zh-tw": "中文", zh: "中文", yue: "粤语", wyw: "文言文"
        },
        options: {
            pageTitle: "词焙+ 选项",
            pageTitleHtml: "词焙<span>+</span> 选项",
            audioGroup: '音频选项',
            autoAudio: "有发音时自动播放",
            popupGroup: '弹出层选项',
            popupCtrlKey: '选择文本的同时按下了 Ctrl 键时弹出浮层',
            popupDblClick: '双击选择文本时弹出浮层',
            account: '词焙账号',
            accountDescriptionHtml: '请输入您的<a href="http://wordsbaking.com" target="_blank">词焙</a>账号以便使用生词本功能.',
            email: '邮箱',
            password: '密码',
            checkAccount: '检查',
            checkingAccount: '正在检查...',
            validAccount: '棒! 该账号可用.',
            invalidAccount: '啊哦, 该账号不可用.',
            tips: {
                title: '小提示',
                items: [
                    '在连续几次查询单词后可以使用 -/+ 键快速后退/前进.'
                ]
            }
        }
    }
};


var lang;
(function () {
    var langId = navigator.language;
    var defaultId = "en-US";

    lang = langs[langId];

    if (!lang) {
        langId = langId.split("-")[0];
        for (var i in langs) {
            if (i.indexOf(langId) == 0) {
                lang = langs[i];
                break;
            }
        }
    }

    if (!lang) {
        lang = langs[defaultId];
    }

})();