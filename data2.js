// Şube Müdürlüğü Sınav Hazırlık - Sınav 2 Veri Dosyası
// Gerçek sınav seviyesinde hazırlanmış ZOR soru bankası
// Soru dağılımı: MEB Görevde Yükselme Sınavı resmi dağılımına göre (Toplam 60 soru)

const exam2Topics = [
    {
        id: 1,
        name: "Türkçe Dil Bilgisi",
        questionCount: 5,
        icon: "📖",
        flashcards: [],
        questions: [
            { q: "'Sabah <u>erken kalkan</u> öğrenciler derslerine daha iyi hazırlanır.' cümlesinde altı çizili sözcüğün türü aşağıdakilerden hangisidir?", options: ["Sıfat-fiil (ortaç)", "Zarf-fiil (ulaç)", "İsim-fiil (mastar)", "Bileşik fiil", "Yardımcı fiil"], answer: 0 },
            { q: "'Öğretmenler, öğrencilerin başarılarıyla gurur duyar.' cümlesindeki tamlama türü aşağıdakilerden hangisidir?", options: ["Zincirleme isim tamlaması", "Belirtisiz isim tamlaması", "Takısız isim tamlaması", "Sıfat tamlaması", "Belirtili isim tamlaması"], answer: 4 },
            { q: "Aşağıdaki cümlelerin hangisinde nesne eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?", options: ["Kitabı okudum ve çok beğendim.", "Arkadaşımı aradım ve durumu anlattım.", "Bu konuyu tartıştık ve sonuca ulaştık.", "Haberi aldık ve hemen yola çıktık.", "Onu gördüm ancak tanıyamadım."], answer: 2 },
            { q: "'Ne güzel bir gündü, herkes mutluydu, kuşlar ötüyordu.' cümlesi yapısına göre nasıl bir cümledir?", options: ["Basit cümle", "Bileşik cümle", "Girişik bileşik cümle", "Bağımsız sıralı cümle", "Bağımlı sıralı cümle"], answer: 3 },
            { q: "Aşağıdaki cümlelerin hangisinde fiil çatısı bakımından 'ettirgen' kullanılmıştır?", options: ["Kapı açıldı.", "Mektup yazıldı.", "Evi boyattık.", "Yemek yendi.", "Çocuklar koşuştu."], answer: 2 }
        ]
    },
    {
        id: 2,
        name: "Yönetimde İnsan İlişkileri ve İletişim",
        questionCount: 2,
        icon: "🤝",
        flashcards: [],
        questions: [
            { q: "Örgütsel iletişimde, yöneticinin astlarına yetki ve sorumluluk devretmesi sırasında oluşabilecek engelleri aşmak için kullanılan ve karşılıklı güvene dayanan iletişim türü aşağıdakilerden hangisidir?", options: ["Yukarıdan aşağıya iletişim", "Aşağıdan yukarıya iletişim", "Yatay iletişim", "Çapraz iletişim", "Açık kapı politikası iletişimi"], answer: 4 },
            { q: "Douglas McGregor'un X ve Y Teorilerine göre, çalışanların sorumluluk almaktan kaçındığını, tembel olduğunu ve sürekli denetim altında tutulması gerektiğini varsayan yönetim anlayışı aşağıdakilerden hangisidir?", options: ["Y Teorisi", "Z Teorisi", "X Teorisi", "Hijyen Teorisi", "Olgunluk Teorisi"], answer: 2 }
        ]
    },
    {
        id: 3,
        name: "Yönetim, Liderlik ve Organizasyon",
        questionCount: 3,
        icon: "👔",
        flashcards: [],
        questions: [
            { q: "Fayol'un yönetim ilkelerinden olan 'yönetim birliği' ilkesi aşağıdakilerden hangisini ifade etmektedir?", options: ["Her astın yalnızca bir üstten emir alması", "Aynı amaca yönelik faaliyetlerin tek bir plan altında tek bir yönetici tarafından yürütülmesi", "Yetki ve sorumluluğun denk olması", "İşbölümü ve uzmanlaşma sağlanması", "Kararların merkezde toplanması"], answer: 1 },
            { q: "Stratejik yönetim sürecinde, örgütün güçlü ve zayıf yönleri ile dış çevredeki fırsat ve tehditlerin analiz edilmesinden sonra belirlenen ve örgütün varlık nedenini ortaya koyan ifade aşağıdakilerden hangisidir?", options: ["Vizyon", "Misyon", "Strateji", "Taktik", "Politika"], answer: 1 },
            { q: "Hersey ve Blanchard'ın durumsal liderlik modeline göre, astların hem yetkinliği hem de istekliliği yüksek olduğunda lider hangi tarzı benimsemelidir?", options: ["Söyleme (Telling) - Yüksek görev, düşük ilişki", "Satma (Selling) - Yüksek görev, yüksek ilişki", "Katılma (Participating) - Düşük görev, yüksek ilişki", "Devretme (Delegating) - Düşük görev, düşük ilişki", "Otoriter liderlik"], answer: 3 }
        ]
    },
    {
        id: 4,
        name: "İnsan Hakları ve Demokrasi",
        questionCount: 1,
        icon: "⚖️",
        flashcards: [],
        questions: [
            { q: "Avrupa İnsan Hakları Sözleşmesi'nin denetim organı olan ve bireylerin devletlere karşı başvurularını inceleyerek karar veren yargı organı aşağıdakilerden hangisidir?", options: ["Avrupa Birliği Adalet Divanı", "Uluslararası Adalet Divanı", "Avrupa İnsan Hakları Mahkemesi", "Lahey Mahkemesi", "Anayasa Mahkemesi"], answer: 2 }
        ]
    },
    {
        id: 5,
        name: "Yönetimde Etik",
        questionCount: 1,
        icon: "🎯",
        flashcards: [],
        questions: [
            { q: "5176 sayılı Kamu Görevlileri Etik Kurulu Kurulması Hakkında Kanun'a göre, Kurul üyelerinin görev süresi kaç yıldır ve üyeler en fazla kaç dönem görev yapabilir?", options: ["3 yıl, en fazla 2 dönem", "4 yıl, en fazla 2 dönem", "4 yıl, en fazla 1 dönem", "5 yıl, en fazla 2 dönem", "5 yıl, en fazla 1 dönem"], answer: 1 }
        ]
    },
    {
        id: 6,
        name: "Türk İdare Sistemi",
        questionCount: 1,
        icon: "🏛️",
        flashcards: [],
        questions: [
            { q: "T.C. Anayasası'na göre, merkezi idarenin yerinden yönetim kuruluşları üzerindeki denetim yetkisi olan 'idari vesayet' ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["İdari vesayet, mahalli idarelerin bağımsızlığını ortadan kaldırır.", "İdari vesayet ancak yargı kararıyla uygulanabilir.", "İdari vesayet yetkisi Anayasa ile düzenlenir, kanunla sınırlandırılamaz.", "İdari vesayet, mahalli idareler ile merkezi idare arasında bütünlüğü sağlamak amacıyla, kanunda belirtilen esas ve usuller dahilinde kullanılır.", "İdari vesayet, yalnızca mali konularda uygulanır."], answer: 3 }
        ]
    },
    {
        id: 7,
        name: "Protokol Kuralları",
        questionCount: 1,
        icon: "🎩",
        flashcards: [],
        questions: [
            { q: "Resmi yazışma kurallarına göre, bir yazının kimin tarafından imzalandığını ve makamını gösteren, imzanın altında yer alan bölüm aşağıdakilerden hangisidir?", options: ["Başlık", "Sayı", "İmza", "Dağıtım", "Havale"], answer: 2 }
        ]
    },
    {
        id: 8,
        name: "Atatürk İlkeleri ve İnkılap Tarihi",
        questionCount: 2,
        icon: "🇹🇷",
        flashcards: [],
        questions: [
            { q: "Türk Medeni Kanunu'nun 17 Şubat 1926'da kabul edilmesiyle aşağıdaki Atatürk ilkelerinden hangisi doğrudan gerçekleştirilmiştir?", options: ["Milliyetçilik", "Cumhuriyetçilik", "Halkçılık", "Laiklik", "Devletçilik"], answer: 3 },
            { q: "Lozan Barış Antlaşması'nda Boğazlar ile ilgili alınan karar aşağıdakilerden hangisidir?", options: ["Boğazlar Türkiye'nin tam egemenliğine bırakılmıştır.", "Boğazlar askerden arındırılmış ve uluslararası bir komisyon tarafından yönetilmiştir.", "Boğazlar kapatılmıştır.", "Boğazlar İngiltere'nin denetimine bırakılmıştır.", "Boğazlar Milletler Cemiyeti'nin kontrolüne verilmiştir."], answer: 1 }
        ]
    },
    {
        id: 9,
        name: "Genel Kültür",
        questionCount: 5,
        icon: "🌍",
        flashcards: [],
        questions: [
            { q: "Aşağıdakilerden hangisi Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan doğal miras alanlarından biridir?", options: ["Efes Antik Kenti", "Göreme Milli Parkı ve Kapadokya Kayalık Alanları", "Hattuşa", "Safranbolu Şehri", "Bergama Çok Katmanlı Kültürel Peyzaj Alanı"], answer: 1 },
            { q: "2024 yılı itibarıyla Birleşmiş Milletler Güvenlik Konseyi'nin daimi üyesi olan ülkeler aşağıdakilerden hangisinde doğru verilmiştir?", options: ["ABD, Rusya, Çin, İngiltere, Almanya", "ABD, Rusya, Çin, İngiltere, Fransa", "ABD, Rusya, Çin, Japonya, Fransa", "ABD, Rusya, Hindistan, İngiltere, Fransa", "ABD, Rusya, Çin, Brezilya, Fransa"], answer: 1 },
            { q: "Türk edebiyatının en önemli destanlarından biri olan ve Dede Korkut Hikayeleri olarak da bilinen eser, hangi Türk boyunun destanıdır?", options: ["Kıpçak Türkleri", "Oğuz Türkleri", "Uygur Türkleri", "Karluk Türkleri", "Peçenek Türkleri"], answer: 1 },
            { q: "Aşağıdaki uluslararası kuruluşlardan hangisinin merkezi Cenevre'dedir?", options: ["Birleşmiş Milletler (BM)", "Dünya Ticaret Örgütü (DTÖ)", "Uluslararası Para Fonu (IMF)", "Dünya Bankası", "Ekonomik Kalkınma ve İşbirliği Örgütü (OECD)"], answer: 1 },
            { q: "Türkiye'nin ilk kadın belediye başkanı aşağıdakilerden hangisidir?", options: ["Tansu Çiller", "Leyla Atakan", "Sabiha Gökçen", "Halide Edib Adıvar", "Afet İnan"], answer: 1 }
        ]
    },
    {
        id: 10,
        name: "T.C. Anayasası",
        questionCount: 4,
        icon: "📜",
        flashcards: [],
        questions: [
            { q: "T.C. Anayasası'na göre, Cumhurbaşkanının hastalık veya yurt dışına çıkma gibi nedenlerle geçici olarak görevinden ayrılması halinde, Cumhurbaşkanına kim vekalet eder?", options: ["TBMM Başkanı", "Başbakan", "Cumhurbaşkanı Yardımcısı", "En yaşlı bakan", "Genelkurmay Başkanı"], answer: 2 },
            { q: "T.C. Anayasası'na göre, Cumhurbaşkanlığı kararnamesi ile düzenlenebilecek konularla ilgili aşağıdakilerden hangisi doğrudur?", options: ["Temel haklar, kişi hakları ve ödevleri ile siyasi haklar Cumhurbaşkanlığı kararnamesiyle düzenlenebilir.", "Anayasada münhasıran kanunla düzenlenmesi öngörülen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz.", "Cumhurbaşkanlığı kararnameleri kanunlardan üstündür.", "Cumhurbaşkanlığı kararnameleri TBMM onayına tabidir.", "Cumhurbaşkanlığı kararnameleri ancak olağanüstü hallerde çıkarılabilir."], answer: 1 },
            { q: "T.C. Anayasası'na göre, milletvekilliğinin düşmesi kararına karşı Anayasa Mahkemesine başvuru süresi kararın Genel Kurul'da ilan edilmesinden itibaren kaç gündür?", options: ["5 gün", "7 gün", "10 gün", "15 gün", "30 gün"], answer: 1 },
            { q: "T.C. Anayasası'na göre, Türkiye Büyük Millet Meclisi tatil veya ara verme sırasında doğrudan doğruya veya Cumhurbaşkanının istemi üzerine olağanüstü toplantıya çağrılabilir. Bu çağrıyı yapma yetkisi aşağıdakilerden hangisine aittir?", options: ["Cumhurbaşkanı", "TBMM Başkanı", "Cumhurbaşkanı ve TBMM Başkanı birlikte", "Bakanlar Kurulu", "Meclis Başkanlık Divanı"], answer: 1 }
        ]
    },
    {
        id: 11,
        name: "657 sayılı Devlet Memurları Kanunu",
        questionCount: 4,
        icon: "👨‍💼",
        flashcards: [],
        questions: [
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, aşağıdaki fiillerden hangisi 'Devlet memurluğundan çıkarma' cezasını gerektiren fiil ve hallerdendir?", options: ["Göreve sarhoş gelmek, görev yerinde alkollü içki içmek", "Özürsüz olarak bir yılda toplam 20 gün göreve gelmemek", "Görevi ile ilgili olarak her ne şekilde olursa olsun çıkar sağlamak", "Hizmet içinde Devlet memurunun itibar ve güven duygusunu sarsacak nitelikte davranışlarda bulunmak", "Memurluk sıfatı ile bağdaşmayacak nitelik ve derecede yüz kızartıcı ve utanç verici hareketlerde bulunmak"], answer: 4 },
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, disiplin cezası verilmesine sebep olmuş bir fiil veya halin cezaların özlük dosyasından silinmesine ilişkin süre içinde tekerrüründe bir derece ağır ceza uygulanır. Kademe ilerlemesinin durdurulması cezasının özlük dosyasından silinme süresi kaç yıldır?", options: ["3 yıl", "5 yıl", "7 yıl", "10 yıl", "Sicilden silinmez"], answer: 3 },
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, memurlara verilecek hastalık izinleri ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["On yıla kadar hizmeti olanlara altı aya kadar hastalık izni verilir.", "On yıldan fazla hizmeti olanlara on iki aya kadar hastalık izni verilir.", "Kanser, verem ve akıl hastalıkları gibi uzun süreli tedavi gerektiren hastalıklara yakalananlar için izin süreleri bir katına kadar artırılır.", "İzin süresinin sonunda iyileşemeyenler hakkında emeklilik hükümleri uygulanır.", "Hastalık izinleri memuriyet süresince toplanır."], answer: 4 },
            { q: "657 sayılı Devlet Memurları Kanunu'na göre, aynı yerdeki görevlere atananlar atama emirlerinin kendilerine tebliğ gününü izleyen iş günü içinde işe başlamak zorundadırlar. Bu süre başka yerdeki görevlere atananlar için ne kadardır?", options: ["7 gün", "10 gün", "15 gün", "1 ay", "2 ay"], answer: 2 }
        ]
    },
    {
        id: 12,
        name: "1739 sayılı Milli Eğitim Temel Kanunu",
        questionCount: 4,
        icon: "🎓",
        flashcards: [],
        questions: [
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, aşağıdakilerden hangisi Türk Milli Eğitiminin 'genel amaçları' arasında yer almaz?", options: ["Türk Milletinin bütün fertlerini Atatürk inkılap ve ilkelerine bağlı yetiştirmek", "Türk vatandaşlarını hür ve bilimsel düşünme gücüne sahip kılmak", "Beden, zihin, ahlak, ruh ve duygu bakımlarından dengeli gelişmiş bireyler yetiştirmek", "Kişileri meslek sahibi yapmak", "İlgi, istidat ve kabiliyetlerini geliştirerek gerekli bilgi ve becerileri kazandırmak"], answer: 3 },
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, eğitim sistemimizin 'yöneltme' ilkesi ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Fertler sadece akademik başarılarına göre yönlendirilir.", "Yöneltme işlevi yalnızca ortaöğretim düzeyinde yapılır.", "Fertler eğitimleri süresince ilgi, istidat ve kabiliyetleri ölçüsünde çeşitli programlara yöneltilir.", "Yöneltme sadece rehberlik servislerinin görevidir.", "Yöneltme sadece yükseköğretime geçişte uygulanır."], answer: 2 },
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, 'yaygın eğitim' ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Yaygın eğitim yalnızca yetişkinlere yöneliktir.", "Yaygın eğitim örgün eğitim sistemine paralel veya örgün eğitim dışında düzenlenen eğitim faaliyetlerinin tümünü kapsar.", "Yaygın eğitim diploma vermez.", "Yaygın eğitim sadece mesleki konuları kapsar.", "Yaygın eğitim kurumları Milli Eğitim Bakanlığı dışındaki bakanlıklarca yürütülür."], answer: 1 },
            { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, ilköğretim ve ortaöğretimin 'parasız' olması hangi temel ilkenin gereğidir?", options: ["Genellik ve eşitlik", "Fırsat ve imkan eşitliği", "Süreklilik", "Her yerde eğitim", "Karma eğitim"], answer: 1 }
        ]
    },
    {
        id: 13,
        name: "222 sayılı İlköğretim ve Eğitim Kanunu",
        questionCount: 4,
        icon: "🏫",
        flashcards: [],
        questions: [
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, köy ve mahalle muhtarlarının mecburi öğrenim çağındaki çocukların okula devamını sağlama konusundaki sorumluluğu ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Muhtarların bu konuda hiçbir sorumluluğu yoktur.", "Muhtarlar çocukların okula devamını sağlamakla yükümlüdür ve okula gitmeyen çocukları mülki amire bildirmek zorundadır.", "Muhtarlar sadece para cezası verme yetkisine sahiptir.", "Muhtarlar velileri okul müdürlüğüne şikayet edebilir.", "Muhtarların görevi sadece okul binası yapımına katkı sağlamaktır."], answer: 1 },
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, ilköğretim kurumlarında öğretmen sayısının artması veya yeni derslik yapılması gibi nedenlerle birleştirilmiş sınıf uygulamasına son verilmesi için öğrenci sayısı kaç olmalıdır?", options: ["Her sınıfta en az 5 öğrenci olmalıdır.", "Her sınıfta en az 8 öğrenci olmalıdır.", "Her sınıfta en az 10 öğrenci olmalıdır.", "Toplam öğrenci sayısı 30'u geçmelidir.", "Öğrenci sayısına bakılmaksızın öğretmen sayısına göre karar verilir."], answer: 2 },
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, okul-aile birliklerinin çalışma usul ve esasları ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Okul-aile birliklerinin kuruluş ve işleyişi okul müdürünün takdirindedir.", "Birlikler, Milli Eğitim Bakanlığınca çıkarılan yönetmeliğe göre kurulur ve çalışır.", "Okul-aile birlikleri bağımsız tüzel kişiliğe sahiptir.", "Birlikler sadece büyükşehirlerdeki okullarda kurulur.", "Birlikler il milli eğitim müdürlüklerince kurulur."], answer: 1 },
            { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, mecburi öğrenim çağı dışına çıkmış ve ilköğretimlerini tamamlamamış olan vatandaşların ilköğretimlerini tamamlamaları ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Bu vatandaşlar artık ilköğretim diploması alamaz.", "Bu kişiler yalnızca açık öğretim yoluyla diplomalarını alabilir.", "Bu kişilerin Milli Eğitim Bakanlığınca açılan özel kurslara veya okullara devam ederek ilköğretimlerini tamamlamaları sağlanır.", "Bu kişiler sadece belediye kurslarına katılabilir.", "18 yaşından büyük vatandaşlar ilköğretim diploması alamaz."], answer: 2 }
        ]
    },
    {
        id: 14,
        name: "652 sayılı MEB Teşkilat ve Görevleri KHK",
        questionCount: 4,
        icon: "🏢",
        flashcards: [],
        questions: [
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, Milli Eğitim Bakanlığı'nın 'özel kalem müdürlüğü' hangi birim kategorisinde yer alır?", options: ["Danışma ve denetim birimi", "Ana hizmet birimi", "Yardımcı hizmet birimi", "Bağlı kuruluş", "İlgili kuruluş"], answer: 2 },
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, hayat boyu öğrenme politikalarını belirlemek ve yaygın eğitim hizmetlerini yürütmek görevi aşağıdaki birimlerden hangisine aittir?", options: ["Talim ve Terbiye Kurulu Başkanlığı", "Temel Eğitim Genel Müdürlüğü", "Ortaöğretim Genel Müdürlüğü", "Hayat Boyu Öğrenme Genel Müdürlüğü", "Mesleki ve Teknik Eğitim Genel Müdürlüğü"], answer: 3 },
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, Bakanlık merkez teşkilatında görevlendirilmek üzere, başka kurumlarda çalışan personelden Bakan onayı ile geçici olarak görevlendirilen kişiler ne süreyle görevlendirilebilir?", options: ["6 ay, uzatılamaz", "1 yıl, birer yıllık sürelerle uzatılabilir", "2 yıl, uzatılamaz", "Süresiz", "6 ay, bir defaya mahsus 6 ay daha uzatılabilir"], answer: 1 },
            { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, aşağıdakilerden hangisi Milli Eğitim Bakanlığı'nın bağlı kuruluşlarından biridir?", options: ["Talim ve Terbiye Kurulu Başkanlığı", "Öğretmen Yetiştirme ve Geliştirme Genel Müdürlüğü", "Milli Eğitim Bakanlığı Özel Öğretim Kurumları Genel Müdürlüğü", "ÖSYM Başkanlığı", "Strateji Geliştirme Başkanlığı"], answer: 3 }
        ]
    },
    {
        id: 15,
        name: "4483 sayılı Memurlar Hakkında Soruşturma Kanunu",
        questionCount: 2,
        icon: "⚖️",
        flashcards: [],
        questions: [
            { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun'a göre, soruşturma izni verilmemesi kararına karşı Cumhuriyet başsavcılığının itirazı üzerine verilen karar kesindir. Bu itirazı inceleyen ve karar veren merci aşağıdakilerden hangisidir?", options: ["Danıştay", "Yargıtay", "Bölge idare mahkemesi", "Anayasa Mahkemesi", "İdare mahkemesi"], answer: 2 },
            { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun'a göre, Başbakanlık ve bakanlıkların merkez teşkilatında görevli olup ortak kararla atanan memurlar ve diğer kamu görevlileri için soruşturma izni vermeye yetkili merci aşağıdakilerden hangisidir?", options: ["İlgili bakan", "Başbakan", "Cumhurbaşkanı", "Müsteşar", "Danıştay"], answer: 0 }
        ]
    },
    {
        id: 16,
        name: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu",
        questionCount: 2,
        icon: "💰",
        flashcards: [],
        questions: [
            { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, ön ödeme ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Ön ödeme yapılabilecek haller kanunda tahdidi olarak sayılmıştır.", "Ön ödeme yapılabilecek haller ve miktarları ile bu alacakların mahsup süreleri yönetmelikle belirlenir.", "Ön ödemeler için mutlaka kişisel teminat alınması zorunludur.", "Ön ödemeler sadece muhasebe yetkililerince yapılabilir.", "Ön ödemeler yalnızca seyahat harcamaları için verilebilir."], answer: 1 },
            { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, harcama yetkilileri, harcama talimatlarının bütçe ilke ve esaslarına, kanun, tüzük ve yönetmelikler ile diğer mevzuata uygun olmasından aşağıdakilerden hangisine karşı sorumludur?", options: ["Sayıştay'a", "Maliye Bakanlığı'na", "TBMM'ye", "Üst yöneticiye", "İç denetçilere"], answer: 3 }
        ]
    },
    {
        id: 17,
        name: "2886 sayılı Devlet İhale Kanunu",
        questionCount: 2,
        icon: "📋",
        flashcards: [],
        questions: [
            { q: "2886 sayılı Devlet İhale Kanunu'na göre, 'kapalı teklif usulü' ile yapılan ihalelerde tekliflerin açılmasında isteklilerin salt çoğunluğu ile ihaleye devam edilemez. Bu durumda ihalenin akıbeti ne olur?", options: ["İhale iptal edilir ve yeniden yapılır.", "Mevcut tekliflerle değerlendirme yapılır.", "İhale pazarlık usulüne dönüştürülür.", "İhale açık teklif usulüyle yeniden yapılır.", "Yeterli sayı sağlanana kadar ihale ertelenir."], answer: 0 },
            { q: "2886 sayılı Devlet İhale Kanunu'na göre, ihalelere katılımda 'şartname ve eklerini satın almak' dışında aşağıdakilerden hangisi de zorunlu şartlardandır?", options: ["Kamu görevlisi olmamak", "Türk vatandaşı olmak", "İflas ve konkordato ilan etmemiş olmak", "Özel sektör deneyimine sahip olmak", "Varsa emanet komisyonlarına üye olmak"], answer: 2 }
        ]
    },
    {
        id: 18,
        name: "4734 sayılı Kamu İhale Kanunu",
        questionCount: 2,
        icon: "📊",
        flashcards: [],
        questions: [
            { q: "4734 sayılı Kamu İhale Kanunu'na göre, aşağıdakilerden hangisi ihalelere katılmaktan yasaklanma süresi içerisinde bir tüzel kişinin sermayesinin yarısından fazlasına sahip iken yasaklanmasına neden olan gerçek veya tüzel kişi durumundadır?", options: ["Sadece yasaklanan gerçek kişinin kendisi yasaklıdır.", "Yasaklanan kişinin tüm akrabaları da yasaklıdır.", "Yasaklanan kişinin ortak olduğu bütün şirketler yasaklıdır.", "Yasaklanan kişilerin kontrolündeki şirketler aynı yasağa tabidir.", "Yasaklanan kişinin bulunduğu şirketler ancak mahkeme kararıyla yasaklanır."], answer: 3 },
            { q: "4734 sayılı Kamu İhale Kanunu'na göre, yaklaşık maliyet hesaplanırken aşağıdakilerden hangisi dikkate alınmaz?", options: ["Piyasa fiyat araştırması sonuçları", "Önceki yıllarda yapılan benzer işlerin maliyetleri", "Kamu kurum ve kuruluşlarınca belirlenen birim fiyat ve rayiçler", "Katma değer vergisi (KDV)", "İdarenin elindeki maliyet bilgileri"], answer: 3 }
        ]
    },
    {
        id: 19,
        name: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu",
        questionCount: 3,
        icon: "📝",
        flashcards: [],
        questions: [
            { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, sözleşmenin devri ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Sözleşme hiçbir koşulda devredilemez.", "Sözleşme zorunlu hallerde ihale yetkilisinin yazılı izni ile başkasına devredilebilir.", "Sözleşme sadece mahkeme kararıyla devredilebilir.", "Sözleşme yalnızca aynı sektördeki firmalara devredilebilir.", "Sözleşme sadece tamamlanan kısımlar için devredilebilir."], answer: 1 },
            { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, yapım işlerinde yüklenicinin taahhüdünü ihale dokümanı ve sözleşme hükümlerine uygun olarak yerine getirmemesi halinde, idare sözleşmeyi feshedebilir. Sözleşmenin feshi halinde kesin teminat ne olur?", options: ["Yükleniciye iade edilir.", "Gelir kaydedilir.", "Yarısı iade edilir, yarısı gelir kaydedilir.", "Faizi ile birlikte iade edilir.", "Mahkeme kararına bağlıdır."], answer: 1 },
            { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, aşağıdakilerden hangisi sözleşmenin uygulanması sırasında yasak olan fiil ve davranışlardan değildir?", options: ["Hile, vaat, tehdit, nüfuz kullanma ile çıkar sağlama", "Sahte belge düzenleme, kullanma veya bunlara teşebbüs etme", "Sözleşme konusu işin yapılması veya teslimi sırasında hileli malzeme kullanmak", "İdare ile mutabakat sağlayarak iş programını revize etmek", "Taahhüdünü yerine getirirken idareye zarar vermek"], answer: 3 }
        ]
    },
    {
        id: 20,
        name: "5442 sayılı İl İdaresi Kanunu",
        questionCount: 1,
        icon: "🗺️",
        flashcards: [],
        questions: [
            { q: "5442 sayılı İl İdaresi Kanunu'na göre, valinin 'olağan ve olağanüstü tedbirler' alma yetkisi ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Vali, sadece iç güvenlik konularında tedbir alabilir.", "Vali, ilde çıkabilecek veya çıkmış olan olayların bastırılması için gerekli her türlü tedbirleri almak yetkisindedir.", "Vali, tedbir almak için mutlaka bakanlık onayı almak zorundadır.", "Valinin olağanüstü tedbir alma yetkisi yoktur.", "Vali, yalnızca yangın, sel gibi afetlerde tedbir alabilir."], answer: 1 }
        ]
    },
    {
        id: 21,
        name: "5482 sayılı İl Şurası Kanunu",
        questionCount: 3,
        icon: "🏛️",
        flashcards: [],
        questions: [
            { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurasında hangi konular ele alınır?", options: ["Yalnızca bütçe ve mali konular", "Yalnızca eğitim istatistikleri", "İldeki eğitim ve öğretim sorunları, eğitim politikalarına ilişkin görüşler", "Yalnızca personel atama ve yer değiştirme işlemleri", "Yalnızca okul yapımı konuları"], answer: 2 },
            { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurasının çalışma usul ve esasları nasıl belirlenir?", options: ["Valilik genelgesiyle", "Milli Eğitim Bakanlığınca çıkarılan yönetmelikle", "İl genel meclisi kararıyla", "Kanun hükmünde kararnameyle", "Cumhurbaşkanlığı kararnamesince"], answer: 1 },
            { q: "5482 sayılı İl Şurası Kanunu'na göre, il şurası toplantılarına katılan sivil toplum temsilcileri ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Sivil toplum temsilcileri toplantılara katılamaz.", "Sivil toplum temsilcileri yalnızca dinleyici olarak katılabilir.", "Sendika, sivil toplum kuruluşları, yerel yönetimler ve meslek odaları temsilcileri toplantılara katılır.", "Sivil toplum temsilcileri yalnızca yazılı görüş bildirebilir.", "Sivil toplum temsilcileri yalnızca olağanüstü toplantılara katılır."], answer: 2 }
        ]
    },
    {
        id: 22,
        name: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu",
        questionCount: 3,
        icon: "✊",
        flashcards: [],
        questions: [
            { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, sendika veya konfederasyonların tüzüklerinde yapılacak değişiklikler ne zaman yürürlüğe girer?", options: ["Genel kurul kararından itibaren", "Tüzük değişikliğinin ilgili valiliğe bildirilmesinden itibaren", "Tüzük değişikliğinin Çalışma ve Sosyal Güvenlik Bakanlığına ulaşmasından itibaren", "Mahkeme onayından itibaren", "Resmi Gazete'de yayımlanmasından itibaren"], answer: 2 },
            { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, toplu sözleşme görüşmelerinin anlaşmazlıkla sonuçlanması halinde uyuşmazlığı karara bağlayan kurul aşağıdakilerden hangisidir?", options: ["Kamu Personeli Danışma Kurulu", "Kamu Görevlileri Hakem Kurulu", "Çalışma ve Sosyal Güvenlik Bakanlığı", "Danıştay", "Yargıtay"], answer: 1 },
            { q: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu'na göre, işyeri sendika temsilcisinin seçilmesi için o işyerinde kaç sendika üyesinin bulunması gerekir?", options: ["En az 5 üye", "En az 10 üye", "En az 25 üye", "En az 50 üye", "Üye sayısı şartı yoktur"], answer: 0 }
        ]
    },
    {
        id: 23,
        name: "5580 sayılı Özel Öğretim Kurumları Kanunu",
        questionCount: 3,
        icon: "🎒",
        flashcards: [],
        questions: [
            { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, özel öğretim kurumlarında görev yapacak eğitim personelinin çalışma izni süresi en fazla kaç yıldır?", options: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"], answer: 2 },
            { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, kurumlarda ücretli okutulma hakkı kazanan öğrencilerin seçimi ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Kurum yönetimi tek başına karar verir.", "Valilik tarafından belirlenir.", "Milli Eğitim Bakanlığınca çıkarılan yönetmelikte belirlenen usul ve esaslara göre okul müdürlüklerince yapılır.", "Bakanlık merkez teşkilatınca yapılır.", "İl milli eğitim müdürlüklerince sınav yapılarak belirlenir."], answer: 2 },
            { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, özel okullar aşağıdakilerden hangisine uygun olarak eğitim-öğretim yapmak zorundadır?", options: ["Kendi belirledikleri müfredata göre", "Uluslararası eğitim standartlarına göre", "Milli Eğitim Bakanlığınca onaylanan eğitim programlarına göre", "Kurucu temsilcisinin tercihine göre", "Okul aile birliğinin kararına göre"], answer: 2 }
        ]
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { exam2Topics };
}
