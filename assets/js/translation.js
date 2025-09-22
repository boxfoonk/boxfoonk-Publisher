document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');

    // 定义一个异步函数来加载翻译文件并更新内容
    const loadLanguage = async (lang) => {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Could not load ${lang}.json file.`);
            }
            const translations = await response.json();

            // 遍历所有带 data-translate 属性的元素
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[key]) {
                    // 使用 innerHTML 来支持 <br> 等标签
                    element.innerHTML = translations[key];
                }
            });

            // 【修改部分】更新切换按钮的CSS类，而不是文本
            langSwitcher.classList.remove('lang-en', 'lang-zh');
            langSwitcher.classList.add(`lang-${lang}`);
            
            // 将当前语言存入 localStorage
            localStorage.setItem('language', lang);

        } catch (error) {
            console.error('Failed to load or apply language:', error);
        }
    };

    // 为语言切换按钮添加点击事件
    langSwitcher.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止链接的默认跳转行为
        const currentLang = localStorage.getItem('language') || 'zh';
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        loadLanguage(newLang);
    });

    // 页面加载时，检查 localStorage 中保存的语言偏好，或默认为中文
    const preferredLang = localStorage.getItem('language') || 'zh';
    loadLanguage(preferredLang);
});