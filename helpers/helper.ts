import store from '../store/index'

const transated = (lang:string) => {
    
    const langId = store.getState().reducers.language;
    const words = {
        letsworktogether : ["Let’s work together!", "Beraber çalışalım!"],
        blog: ["Blog", "Blog"],
        getLangName: ["Tr", "En"],
        who_am_i: ["Who Am I?", "Ben Kimim?"],
        free_time: ["Free Time", "Serbest Zaman"],
        sleeping: ["Sleeping", "Uyuyorum"],
        working: ["Working", "Çalışıyorum"],
        copyright: ["All Right Reserved.", "Tüm hakları saklıdır."],
        readmore: ["Read More", "Devamını Oku"],
        buymecoffee: ["Buy Me a Coffee", "Buy Me a Coffee"],
        connectWithMe: ["Connect With me", "Bağlantı Kurun"],
        skills: ["Skills", "Yetenekler"],
        works: ["Works", "Çalışmalar"],
        about_text: ["Hi {{img}}, my name is Emre. I am a front end developer in Turkey. I'm passionate about software development. I love to network with other people and always looking for new friends or collegues.", "Merhaba {{img}}, ben Emre. Türkiye'de front end geliştirici olarak görev yapıyorum. Yazılım geliştirme konusunda tutkuluyum. Diğer geliştiricilerle bağlantı kurmaya ve her zaman yeni arkadaşlar ve meslektaşlar edinmeye ilgi duyarım."],
    }
    
    return words[lang as keyof typeof words][langId - 1] ?? lang
}

export default transated;