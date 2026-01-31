// Şube Müdürlüğü Sınav Hazırlık - Yeni Sınav 4
// 2018 ve 2023 gerçek sınav sorularından esinlenerek hazırlanmış ZOR soru bankası
// Soru dağılımı: MEB Görevde Yükselme Sınavı resmi dağılımına göre (Toplam 60 soru)

const examData4 = {
    title: "Şube Müdürlüğü Sınavı - Sınav 4",
    totalQuestions: 60,
    topics: [
        {
            id: 1,
            name: "Türkçe Dil Bilgisi",
            questionCount: 5,
            icon: "📖",
            flashcards: [
                { front: "Zarf-fiil (Ulaç) nedir?", back: "Fiillerin -arak, -ince, -ip, -ken gibi eklerle zarfa dönüşmüş halidir." },
                { front: "Sıfat tamlaması ve belirtisiz isim tamlaması farkı nedir?", back: "Sıfat tamlamasında tamlayan ek almaz ve niteleme/belirtme yapar. Belirtisiz isim tamlamasında tamlayan ek almaz ama tamlanan -(s)I eki alır." },
                { front: "Bileşik cümle türleri nelerdir?", back: "Girişik bileşik, kaynaşık bileşik, iç içe bileşik ve koşullu bileşik cümlelerdir." }
            ],
            questions: [
                { q: "'Toplantıda herkes fikirlerini açıkça söyledi; ancak sonunda ortak bir karara varılamadı.' cümlesinde noktalı virgülün kullanılma amacı aşağıdakilerden hangisidir?", options: ["Sıralı cümleleri birbirinden ayırmak", "Virgülün yetersiz kaldığı durumlarda kullanmak", "Karşıt anlamlı cümleleri birbirinden ayırmak", "Alıntı cümleleri ana cümleden ayırmak", "Bağlaçlardan önce kullanmak"], answer: 2 },
                { q: "'Yaşlı adam, <u>yıllarca biriktirdiği anıları</u> torunlarına coşkuyla anlattı.' cümlesinde altı çizili söz öbeği cümlenin hangi öğesidir?", options: ["Özne", "Belirtili nesne", "Dolaylı tümleç", "Zarf tümleci", "Yüklem"], answer: 1 },
                { q: "Aşağıdaki cümlelerin hangisinde hem isim-fiil hem de sıfat-fiil bir arada kullanılmıştır?", options: ["Koşarak gelen çocuk herkesi şaşırttı.", "Okuduğum kitabı anlatmak istiyorum.", "Yazılan rapor incelenmeye değer.", "Gelen misafirleri karşılamak görevimizdir.", "Düşen yapraklar sonbaharı müjdeledi."], answer: 3 },
                { q: "'İnsanların değerini ancak onları kaybedince anlıyoruz.' cümlesindeki '-ince' eki sözcüğü hangi türe dönüştürmüştür?", options: ["İsim-fiil (Mastar)", "Sıfat-fiil (Ortaç)", "Zarf-fiil (Ulaç)", "Ek-fiil", "Edilgen çatı"], answer: 2 },
                { q: "I. Öğretmenimiz çok bilgili bir insandır.\nII. Ahmet'in okuduğu üniversite çok eski.\nIII. Masanın üzerindeki kitapları aldım.\nNumaralanmış cümlelerin hangilerinde tamlayan ve tamlanan arasına sözcük girmiştir?", options: ["Yalnız I", "Yalnız II", "I ve II", "II ve III", "I, II ve III"], answer: 3 }
            ]
        },
        {
            id: 2,
            name: "Yönetimde İnsan İlişkileri ve İletişim",
            questionCount: 2,
            icon: "🤝",
            flashcards: [
                { front: "Johari Penceresi nedir?", back: "Bireylerin kendileri ve başkaları hakkındaki bilgilerini dört bölümde inceleyen iletişim modelidir: Açık alan, kör alan, gizli alan, bilinmeyen alan." },
                { front: "McGregor'un X ve Y Teorisi nedir?", back: "X Teorisi: İnsanlar çalışmayı sevmez, yönlendirilmeli. Y Teorisi: İnsanlar sorumluluk alır, kendini yönetebilir." }
            ],
            questions: [
                { q: "Örgütsel iletişimde 'geri bildirim' kavramının temel işlevi aşağıdakilerden hangisidir?", options: ["Hiyerarşik yapıyı güçlendirmek", "İletişim sürecinin tamamlandığını doğrulamak ve anlamayı sağlamak", "Ast-üst ilişkilerini zayıflatmak", "Biçimsel iletişimi ortadan kaldırmak", "Yatay iletişimi engellemek"], answer: 1 },
                { q: "Bir yöneticinin astlarına her zaman danışarak karar vermesi, onların fikirlerine değer vermesi ve takım çalışmasını ön plana çıkarması hangi liderlik tarzının özelliğidir?", options: ["Otokratik liderlik", "Demokratik liderlik", "Bırakınız yapsınlar (Laissez-faire) liderlik", "Karizmatik liderlik", "Dönüşümcü liderlik"], answer: 1 }
            ]
        },
        {
            id: 3,
            name: "Yönetim, Liderlik ve Organizasyon",
            questionCount: 3,
            icon: "👔",
            flashcards: [
                { front: "Weber'in Bürokrasi Teorisinin temel özellikleri nelerdir?", back: "Hiyerarşik yapı, yazılı kurallar, işbölümü ve uzmanlaşma, gayrişahsilik, kariyer ilkesidir." },
                { front: "PESTLE Analizi nedir?", back: "Politik, Ekonomik, Sosyal, Teknolojik, Yasal ve Çevresel faktörlerin analizidir." }
            ],
            questions: [
                { q: "Henri Fayol'un yönetim süreçleri arasında 'örgütün amaçlarına ulaşmak için gerekli kaynakları bir araya getirme ve koordine etme' aşamasını ifade eden kavram aşağıdakilerden hangisidir?", options: ["Planlama", "Örgütleme", "Yöneltme", "Koordinasyon", "Denetim"], answer: 1 },
                { q: "Maslow'un İhtiyaçlar Hiyerarşisi'ne göre, bireyin toplum içinde kabul görmesi ve saygı duyulması ihtiyacı hangi basamakta yer alır?", options: ["Fizyolojik ihtiyaçlar", "Güvenlik ihtiyacı", "Ait olma ve sevgi ihtiyacı", "Saygınlık ihtiyacı", "Kendini gerçekleştirme ihtiyacı"], answer: 3 },
                { q: "Bir örgütün çevresindeki değişimlere uyum sağlama kapasitesi ve esnekliği hangi örgüt teorisiyle en çok ilişkilidir?", options: ["Klasik Yönetim Teorisi", "Bilimsel Yönetim Yaklaşımı", "Bürokrasi Teorisi", "Sistem Yaklaşımı", "Durumsallık Yaklaşımı"], answer: 4 }
            ]
        },
        {
            id: 4,
            name: "İnsan Hakları ve Demokrasi",
            questionCount: 1,
            icon: "⚖️",
            flashcards: [
                { front: "Avrupa İnsan Hakları Sözleşmesi ne zaman imzalandı?", back: "4 Kasım 1950'de Roma'da imzalandı, 3 Eylül 1953'te yürürlüğe girdi." }
            ],
            questions: [
                { q: "Avrupa İnsan Hakları Sözleşmesi'nin 1 No'lu Ek Protokolü ile güvence altına alınan hak aşağıdakilerden hangisidir?", options: ["Yaşam hakkı", "İşkence yasağı", "Mülkiyet hakkı", "Adil yargılanma hakkı", "Özel yaşama saygı hakkı"], answer: 2 }
            ]
        },
        {
            id: 5,
            name: "Yönetimde Etik",
            questionCount: 1,
            icon: "🎯",
            flashcards: [
                { front: "Etik ikilem nedir?", back: "Birbiriyle çelişen iki etik değer veya ilke arasında seçim yapılması gereken zorlu durumlardır." }
            ],
            questions: [
                { q: "Kamu görevlilerinin görevlerini yerine getirirken kişisel çıkarlarını değil, kamu yararını ön planda tutması gerekliliği hangi etik ilkesinin gereğidir?", options: ["Hesap verebilirlik", "Tarafsızlık", "Dürüstlük", "Kamu yararını gözetme", "Şeffaflık"], answer: 3 }
            ]
        },
        {
            id: 6,
            name: "Türk İdare Sistemi",
            questionCount: 1,
            icon: "🏛️",
            flashcards: [
                { front: "Yerinden yönetim ilkesi nedir?", back: "Kamu hizmetlerinin devlet tüzel kişiliği dışındaki kamu tüzel kişileri tarafından yürütülmesidir." }
            ],
            questions: [
                { q: "Aşağıdakilerden hangisi merkezi idarenin taşra teşkilatı birimlerinden değildir?", options: ["Valilik", "Kaymakamlık", "Bölge Müdürlüğü", "Belediye", "Bucak"], answer: 3 }
            ]
        },
        {
            id: 7,
            name: "Protokol Kuralları",
            questionCount: 1,
            icon: "🎩",
            flashcards: [
                { front: "Protokolde 'öncelik' ilkesi nasıl belirlenir?", back: "Makam, kıdem ve yaşa göre belirlenir. Önce makam, eşitlik halinde kıdem, sonra yaş dikkate alınır." }
            ],
            questions: [
                { q: "Protokol kurallarına göre, resmi davetlerde 'davetlilerin oturtulması' ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Ev sahibi, şeref masasının ortasında oturur.", "En önemli konuk, ev sahibinin sağ tarafına oturtulur.", "Eşler aynı masada karşılıklı oturtulur.", "Protokol sıralamasında makam önceliklidir.", "Yabancı konuklar, Türk konuklardan önce gelebilir."], answer: 4 }
            ]
        },
        {
            id: 8,
            name: "Atatürk İlkeleri ve İnkılap Tarihi",
            questionCount: 2,
            icon: "🇹🇷",
            flashcards: [
                { front: "Terakkiperver Cumhuriyet Fırkası ne zaman kuruldu?", back: "17 Kasım 1924'te Kazım Karabekir, Ali Fuat Cebesoy, Refet Bele ve Rauf Orbay tarafından kuruldu." },
                { front: "Lozan Antlaşması'nda çözülemeyen konular nelerdir?", back: "Musul meselesi, Hatay sorunu, Osmanlı borçları ve boğazlar rejimi (Boğazlar Komisyonu kuruldu)." }
            ],
            questions: [
                { q: "Türkiye Cumhuriyeti'nde çok partili siyasi hayata geçiş denemelerinden biri olan Terakkiperver Cumhuriyet Fırkası'nın kapatılma gerekçesi aşağıdakilerden hangisidir?", options: ["Ekonomik politikalara muhalefet", "Şeyh Said İsyanı ile ilişkilendirilmesi", "Seçimlerde hile yapılması", "Dış politikaya muhalefet", "Askeri darbe girişimi"], answer: 1 },
                { q: "1 Kasım 1922'de TBMM'nin aldığı kararla aşağıdakilerden hangisi gerçekleşmiştir?", options: ["Cumhuriyet ilan edilmiştir.", "Saltanat kaldırılmıştır.", "Halifelik kaldırılmıştır.", "Ankara başkent yapılmıştır.", "Laiklik ilkesi kabul edilmiştir."], answer: 1 }
            ]
        },
        {
            id: 9,
            name: "Genel Kültür",
            questionCount: 5,
            icon: "🌍",
            flashcards: [
                { front: "Nobel Ödülleri hangi alanlarda verilir?", back: "Fizik, Kimya, Fizyoloji veya Tıp, Edebiyat, Barış ve Ekonomi (1969'dan itibaren) alanlarında verilir." },
                { front: "UNESCO Dünya Mirası Listesi'ndeki Türkiye'den yapılar", back: "İstanbul Tarihi Alanları, Göreme Milli Parkı, Hierapolis-Pamukkale, Hattuşaş, Safranbolu, Troya, Selimiye Camii vb." }
            ],
            questions: [
                { q: "Türkiye'nin Birleşmiş Milletler Güvenlik Konseyi'nde geçici üye olarak son görev yaptığı dönem aşağıdakilerden hangisidir?", options: ["2005-2006", "2009-2010", "2015-2016", "2019-2020", "2021-2022"], answer: 1 },
                { q: "'Safahat' adlı eseriyle tanınan ve İstiklal Marşı'nın yazarı olan şair aşağıdakilerden hangisidir?", options: ["Yahya Kemal Beyatlı", "Mehmet Akif Ersoy", "Tevfik Fikret", "Ziya Gökalp", "Namık Kemal"], answer: 1 },
                { q: "Aşağıdakilerden hangisi G20 ülkeleri arasında yer almaz?", options: ["Arjantin", "Avustralya", "İspanya", "Suudi Arabistan", "Güney Afrika"], answer: 2 },
                { q: "Türk tarihinde 'Nizamiye Medreseleri'nin kurucusu aşağıdakilerden hangisidir?", options: ["Alp Arslan", "Melikşah", "Nizamülmülk", "Tuğrul Bey", "Sultan Sancar"], answer: 2 },
                { q: "Aşağıdaki UNESCO Dünya Mirası listesindeki yerlerden hangisi Türkiye'de değildir?", options: ["Göbeklitepe", "Efes Antik Kenti", "Bergama Çok Katmanlı Kültürel Peyzaj Alanı", "Palmira Antik Kenti", "Diyarbakır Kalesi ve Hevsel Bahçeleri"], answer: 3 }
            ]
        },
        {
            id: 10,
            name: "T.C. Anayasası",
            questionCount: 4,
            icon: "📜",
            flashcards: [
                { front: "Olağanüstü hal süresi ne kadardır?", back: "En fazla altı aydır. Cumhurbaşkanı'nın talebiyle TBMM her defasında dört ayı geçmemek üzere süreyi uzatabilir." },
                { front: "Cumhurbaşkanlığı seçiminde ikinci tura kalma şartı", back: "İlk turda geçerli oyların salt çoğunluğunu alan aday olmazsa, ikinci Pazar günü ikinci tur yapılır." }
            ],
            questions: [
                { q: "T.C. Anayasası'na göre, Cumhurbaşkanlığı kararnamesi ile düzenlenemeyecek konular arasında aşağıdakilerden hangisi yer almaz?", options: ["Temel haklar ve kişi hakları", "Siyasi haklar ve ödevler", "Münhasıran kanunla düzenlenmesi gereken konular", "Bakanlıkların kurulması ve kaldırılması", "Kanunda açıkça düzenlenen konular"], answer: 3 },
                { q: "T.C. Anayasası'na göre, olağanüstü hal ilan edilmesine aşağıdakilerden hangisi karar verir?", options: ["TBMM", "Cumhurbaşkanı", "Milli Güvenlik Kurulu", "Bakanlar Kurulu", "Anayasa Mahkemesi"], answer: 1 },
                { q: "T.C. Anayasası'na göre, Anayasa Mahkemesi üyelerinin görev süresi kaç yıldır?", options: ["6 yıl", "9 yıl", "12 yıl", "15 yıl", "Emeklilik yaşına kadar"], answer: 2 },
                { q: "T.C. Anayasası'na göre, TBMM'nin olağanüstü toplantıya çağrılması için en az kaç milletvekilinin yazılı istemi gereklidir?", options: ["Üye tamsayısının beşte biri", "Üye tamsayısının dörtte biri", "Üye tamsayısının üçte biri", "Üye tamsayısının salt çoğunluğu", "En az 100 milletvekili"], answer: 0 }
            ]
        },
        {
            id: 11,
            name: "657 sayılı Devlet Memurları Kanunu",
            questionCount: 4,
            icon: "👨‍💼",
            flashcards: [
                { front: "Göreve son verme halleri", back: "Memurluktan çıkarma, istifa, emeklilik, ölüm, çekilmiş sayılma ve memurluğa alınma şartlarını kaybetmedir." },
                { front: "Aday memurluk süresi", back: "En az bir yıl, en çok iki yıldır." }
            ],
            questions: [
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, aşağıdaki fiillerden hangisi 'Devlet memurluğundan çıkarma' cezasını gerektirir?", options: ["Özürsüz olarak bir veya iki gün göreve gelmemek", "Amire hakaret etmek", "Verilen görevleri kasıtlı olarak yapmamak", "Memurluk sıfatı ile bağdaşmayacak nitelik ve derecede yüz kızartıcı ve utanç verici hareketlerde bulunmak", "Görev sırasında amirine sözle saygısızlık etmek"], answer: 3 },
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, memurun mazeret izni süresi ile ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Kadın memura doğumdan önce 8 hafta analık izni verilir.", "Eşi doğum yapan memura 10 gün babalık izni verilir.", "Evlenen memura 7 gün izin verilir.", "Eşi veya çocuğu ölen memura 10 gün izin verilir.", "Anne veya babası ölen memura 7 gün izin verilir."], answer: 3 },
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, Devlet memurlarına verilen disiplin cezalarının sicilden silinme süresi aşağıdakilerden hangisinde doğru olarak verilmiştir?", options: ["Uyarma: 3 yıl, Kınama: 5 yıl", "Uyarma: 5 yıl, Kınama: 7 yıl", "Uyarma: 5 yıl, Kınama: 10 yıl", "Uyarma: 7 yıl, Kınama: 10 yıl", "Uyarma: 10 yıl, Kınama: 10 yıl"], answer: 2 },
                { q: "657 sayılı Devlet Memurları Kanunu'na göre, memurun görevden uzaklaştırılması halinde aylığının ne kadarı ödenir?", options: ["Tam aylık ödenir", "Aylığın yarısı ödenir", "Aylığın üçte ikisi ödenir", "Aylığın dörtte üçü ödenir", "Hiç aylık ödenmez"], answer: 2 }
            ]
        },
        {
            id: 12,
            name: "1739 sayılı Milli Eğitim Temel Kanunu",
            questionCount: 4,
            icon: "🎓",
            flashcards: [
                { front: "Milli Eğitimin genel amaçları", back: "Atatürk ilke ve inkılaplarına bağlı, insan haklarına saygılı, milli, ahlaki, kültürel değerlere sahip, yapıcı ve yaratıcı bireyler yetiştirmek." },
                { front: "Eğitim hakkı ilkesi", back: "İlköğretim görmek her Türk vatandaşının hakkıdır. İlköğretim kız ve erkek tüm vatandaşlar için zorunludur ve Devlet okullarında parasızdır." }
            ],
            questions: [
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, 'öğretim birliği' ilkesinin gereği aşağıdakilerden hangisidir?", options: ["Her yaşta eğitim hakkı tanınması", "Ülke genelinde tüm eğitim kurumlarının Millî Eğitim Bakanlığına bağlı olması", "Karma eğitim yapılması", "Yabancı dil öğretiminin zorunlu olması", "Özel okulların serbestçe açılabilmesi"], answer: 1 },
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, 'yöneltme' ilkesi hangi eğitim kademesinden itibaren uygulanmaya başlar?", options: ["Okul öncesi eğitim", "İlkokul", "Ortaokul", "Ortaöğretim", "Yükseköğretim"], answer: 2 },
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, aşağıdakilerden hangisi 'okul öncesi eğitim' ile ilgili doğru bir ifadedir?", options: ["Okul öncesi eğitim zorunludur.", "Okul öncesi eğitim sadece Devlet tarafından verilir.", "Okul öncesi eğitim mecburi ilköğretim çağına gelmemiş çocukları kapsar.", "Okul öncesi eğitim 3-7 yaş grubundaki çocukları kapsar.", "Okul öncesi eğitim ilköğretimin bir parçasıdır."], answer: 2 },
                { q: "1739 sayılı Millî Eğitim Temel Kanunu'na göre, aday öğretmenlik süresi en az ne kadardır?", options: ["6 ay", "1 yıl", "18 ay", "2 yıl", "3 yıl"], answer: 1 }
            ]
        },
        {
            id: 13,
            name: "222 sayılı İlköğretim ve Eğitim Kanunu",
            questionCount: 4,
            icon: "🏫",
            flashcards: [
                { front: "İlköğretim kurumları nelerdir?", back: "İlkokul, ortaokul, gezici okullar, yetiştirici ve tamamlayıcı sınıflar ve kurslardır." },
                { front: "İlköğretim okullarının yapım giderleri nasıl karşılanır?", back: "Devlet bütçesinden ve il özel idaresi bütçesinden karşılanır." }
            ],
            questions: [
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, aşağıdakilerden hangisi okul-aile birliğinin gelir kaynaklarından değildir?", options: ["Ayni ve nakdi bağışlar", "Okul kantini gelirleri", "Sosyal etkinlik gelirleri", "Devlet bütçesinden yapılan ödenekler", "Kermes ve sergi gelirleri"], answer: 3 },
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, köy ilköğretim okullarının ihtiyaçları öncelikle hangi bütçeden karşılanır?", options: ["Milli Eğitim Bakanlığı bütçesi", "İl özel idaresi bütçesi", "Köy bütçesi", "Belediye bütçesi", "Valilik özel kalemi"], answer: 1 },
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, 31 Aralık tarihi itibarıyla kaç ayını dolduran çocukların o yılın eylül ayı başında ilkokula kaydı yapılır?", options: ["60 ay", "66 ay", "69 ay", "72 ay", "84 ay"], answer: 2 },
                { q: "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, okul binaları ile alkollü içki satılan yerler arasındaki mesafe en az ne kadar olmalıdır?", options: ["50 metre", "100 metre", "150 metre", "200 metre", "250 metre"], answer: 1 }
            ]
        },
        {
            id: 14,
            name: "652 sayılı MEB Teşkilat ve Görevleri KHK",
            questionCount: 4,
            icon: "🏢",
            flashcards: [
                { front: "MEB'in hizmet birimleri nelerdir?", back: "Genel müdürlükler (Temel Eğitim, Ortaöğretim, Mesleki ve Teknik Eğitim vb.) ve daire başkanlıklarıdır." },
                { front: "Millî Eğitim Şûrası ne zaman toplanır?", back: "4 yılda bir toplanır. Bakanlığın en yüksek danışma kuruludur." }
            ],
            questions: [
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, okul ve kurumların denetim, değerlendirme, rehberlik ve soruşturma hizmetlerini yürütmek aşağıdaki birimlerden hangisinin görevidir?", options: ["Personel Genel Müdürlüğü", "Strateji Geliştirme Başkanlığı", "Talim ve Terbiye Kurulu Başkanlığı", "Teftiş Kurulu Başkanlığı", "Destek Hizmetleri Genel Müdürlüğü"], answer: 3 },
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, aşağıdakilerden hangisi Bakanlık Makamı birimleri arasında yer almaz?", options: ["Özel Kalem Müdürlüğü", "Basın ve Halkla İlişkiler Müşavirliği", "Bakanlık Müşavirleri", "Hukuk Müşavirliği", "Teftiş Kurulu Başkanlığı"], answer: 4 },
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, Millî Eğitim Şûrası en fazla kaç yılda bir toplanır?", options: ["Her yıl", "2 yılda bir", "3 yılda bir", "4 yılda bir", "5 yılda bir"], answer: 3 },
                { q: "652 sayılı Kanun Hükmünde Kararname'ye göre, ilçe millî eğitim müdürleri aşağıdakilerden hangisi tarafından atanır?", options: ["Vali", "İl millî eğitim müdürü", "Kaymakam", "Millî Eğitim Bakanı", "Personel Genel Müdürü"], answer: 0 }
            ]
        },
        {
            id: 15,
            name: "4483 sayılı Memurlar Hakkında Soruşturma Kanunu",
            questionCount: 2,
            icon: "⚖️",
            flashcards: [
                { front: "Ön inceleme sonucu verilen kararlar", back: "Soruşturma izni verilmesi veya verilmemesi kararı verilir. Karara itiraz süresi 10 gündür." },
                { front: "İl millî eğitim müdürü için soruşturma izni", back: "Vali tarafından verilir." }
            ],
            questions: [
                { q: "4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun'a göre, soruşturma izni verilmesi veya verilmemesi kararına karşı itiraz mercii aşağıdakilerden hangisidir?", options: ["Danıştay", "Bölge İdare Mahkemesi", "İdare Mahkemesi", "Asliye Hukuk Mahkemesi", "Yargıtay"], answer: 1 },
                { q: "4483 sayılı Kanun'a göre, köy ve mahalle muhtarları hakkında soruşturma izni vermeye yetkili merci aşağıdakilerden hangisidir?", options: ["Cumhurbaşkanı", "İçişleri Bakanı", "Vali", "Kaymakam", "İl İdare Kurulu"], answer: 3 }
            ]
        },
        {
            id: 16,
            name: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu",
            questionCount: 2,
            icon: "💰",
            flashcards: [
                { front: "Muhasebe yetkilisi kimdir?", back: "Gelirlerin tahsili, giderlerin ödenmesi ve mali işlemlerin kayıt altına alınmasından sorumlu kişidir." },
                { front: "Ön mali kontrol nedir?", back: "Harcama birimlerinde işlemlerin gerçekleştirilmesinden önce yapılan kontrol sürecidir." }
            ],
            questions: [
                { q: "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, gerçekleştirme görevlileri aşağıdaki işlemlerden hangisini yapmaz?", options: ["Ödeme emri belgesini düzenlemek", "Harcama talimatı vermek", "İşin yaptırılması", "Mal veya hizmetin alınması", "Belgelerin kontrolü"], answer: 1 },
                { q: "5018 sayılı Kanun'a göre, kamu idarelerinin stratejik planlarını hazırlarken esas alacakları dönem en fazla kaç yıldır?", options: ["3 yıl", "4 yıl", "5 yıl", "7 yıl", "10 yıl"], answer: 2 }
            ]
        },
        {
            id: 17,
            name: "2886 sayılı Devlet İhale Kanunu",
            questionCount: 2,
            icon: "📋",
            flashcards: [
                { front: "Kesin teminat oranı", back: "İhale bedeli üzerinden %6'dır." },
                { front: "İhale kararlarının onayı", back: "İhale yetkilisi tarafından 15 gün içinde onaylanır veya iptal edilir." }
            ],
            questions: [
                { q: "2886 sayılı Devlet İhale Kanunu'na göre, kesin teminat ihale bedelinin yüzde kaçıdır?", options: ["%3", "%4", "%5", "%6", "%10"], answer: 3 },
                { q: "2886 sayılı Devlet İhale Kanunu'na göre, ihalenin ilanı ile ihale günü arasında en az kaç gün olmalıdır?", options: ["7 gün", "10 gün", "15 gün", "20 gün", "30 gün"], answer: 1 }
            ]
        },
        {
            id: 18,
            name: "4734 sayılı Kamu İhale Kanunu",
            questionCount: 2,
            icon: "📊",
            flashcards: [
                { front: "İhale usulleri", back: "Açık ihale, belli istekliler arasında ihale ve pazarlık usulü." },
                { front: "Şikayet başvuru süresi", back: "Sözleşme imzalanmadan önce idareye şikayet süresi 10 gündür." }
            ],
            questions: [
                { q: "4734 sayılı Kamu İhale Kanunu'na göre, idareye yapılan şikayet başvurusu üzerine idarenin karar verme süresi kaç gündür?", options: ["5 gün", "7 gün", "10 gün", "15 gün", "30 gün"], answer: 2 },
                { q: "4734 sayılı Kamu İhale Kanunu'na göre, aşağıdakilerden hangisi ihaleye katılımdan yasaklanma sebebi değildir?", options: ["Taahhüdünü yerine getirmemek", "Sahte belge düzenlemek", "İhale kararına itiraz etmek", "Yasak fiil ve davranışlarda bulunmak", "Ceza almış olmak"], answer: 2 }
            ]
        },
        {
            id: 19,
            name: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu",
            questionCount: 3,
            icon: "📝",
            flashcards: [
                { front: "Sözleşmenin devri", back: "Sözleşme, zorunlu hallerde ihale yetkilisinin yazılı izni ile başka bir yükleniciye devredilebilir." },
                { front: "Kesin hesap", back: "Yapım işlerinde kesin hesap, geçici kabul tarihinden itibaren 6 ay içinde yapılır." }
            ],
            questions: [
                { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, yüklenicinin sözleşmeyi devralmak isteyen gerçek veya tüzel kişi için öngördüğü şartlar gerçekleşmezse ne olur?", options: ["Sözleşme kendiliğinden feshedilir.", "Yüklenici yeniden ihaleye çıkmak zorundadır.", "Sözleşme ihale yetkilisi tarafından feshedilir.", "İdare sözleşmeyi tek taraflı uzatabilir.", "Yüklenici işe devam eder."], answer: 2 },
                { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, iş artışı durumunda ek sözleşme yapılabilmesi için aşağıdaki şartlardan hangisi aranmaz?", options: ["İşin niteliğinin değişmemesi", "Öngörülemeyen durumların ortaya çıkması", "Sözleşme bedelinin %30'unu geçmemesi", "Yapım işlerinde sözleşme bedelinin %10'unu geçmemesi", "İdari ve teknik gerekçelerin ortaya konması"], answer: 2 },
                { q: "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, yapım işlerinde sözleşme bedelinin yüzde kaçı oranında iş artışı yapılabilir?", options: ["%5", "%10", "%15", "%20", "%25"], answer: 2 }
            ]
        },
        {
            id: 20,
            name: "5442 sayılı İl İdaresi Kanunu",
            questionCount: 1,
            icon: "🗺️",
            flashcards: [
                { front: "Valinin görev ve yetkileri", back: "İlin genel idaresinden sorumludur. Bakanlıkların il teşkilatını denetler, idare kuruluna başkanlık eder." }
            ],
            questions: [
                { q: "5442 sayılı İl İdaresi Kanunu'na göre, valilerin görevleriyle ilgili aşağıdakilerden hangisi yanlıştır?", options: ["Vali, ilde Devletin ve Hükümetin temsilcisidir.", "Vali, ayrı ayrı her Bakanın temsilcisidir.", "Vali, il sınırları içinde bulunan genel ve özel kolluk kuvvetlerinin amiridir.", "Vali, il idare kuruluna başkanlık eder.", "Vali, yetki genişliği ilkesine göre ilçeleri yönetir."], answer: 4 }
            ]
        },
        {
            id: 21,
            name: "5482 sayılı İl Şurası Kanunu",
            questionCount: 3,
            icon: "🏛️",
            flashcards: [
                { front: "İl Şurası kimlerden oluşur?", back: "Vali, il genel meclisi üyeleri, belediye başkanları, kamu kurum temsilcileri, sivil toplum kuruluşları temsilcilerinden oluşur." },
                { front: "İl Şurasının kararları", back: "İstişari niteliktedir, bağlayıcı değildir." }
            ],
            questions: [
                { q: "5482 sayılı Kanun'a göre, il şurasının olağanüstü toplantıya çağrılması için aşağıdakilerden hangisinin kararı gerekir?", options: ["Cumhurbaşkanı", "İçişleri Bakanı", "Vali", "İl genel meclisi başkanı", "Kaymakamlar kurulu"], answer: 2 },
                { q: "5482 sayılı Kanun'a göre, il şurası kararları hangi niteliktedir?", options: ["Bağlayıcı karar", "Kesin karar", "İstişari karar", "Yürütülebilir karar", "Düzenleyici işlem"], answer: 2 },
                { q: "5482 sayılı Kanun'a göre, il şurasının sekretarya hizmetlerini aşağıdakilerden hangisi yürütür?", options: ["Kaymakamlık", "İl özel idaresi", "Belediye", "Valilik", "İl milli eğitim müdürlüğü"], answer: 3 }
            ]
        },
        {
            id: 22,
            name: "4688 sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu",
            questionCount: 3,
            icon: "✊",
            flashcards: [
                { front: "Sendika üyeliği şartları", back: "Kamu görevlisi olmak yeterlidir. 15 yaşını doldurmuş olmak gerekir." },
                { front: "Toplu sözleşme süresi", back: "2 mali yıl için geçerlidir." }
            ],
            questions: [
                { q: "4688 sayılı Kanun'a göre, sendika genel kurulları en geç kaç yılda bir toplanır?", options: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"], answer: 3 },
                { q: "4688 sayılı Kanun'a göre, toplu sözleşme görüşmelerinin başlama tarihi aşağıdakilerden hangisidir?", options: ["Her yılın Ocak ayının ilk iş günü", "Her yılın Haziran ayının ilk iş günü", "Toplu sözleşme döneminin bitiminden 60 gün önce", "Ağustos ayının ilk haftası", "Her yılın ekim ayının birinci haftası"], answer: 3 },
                { q: "4688 sayılı Kanun'a göre, işyeri sendika temsilcilerinin görev süreleri kaç yıldır?", options: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"], answer: 3 }
            ]
        },
        {
            id: 23,
            name: "5580 sayılı Özel Öğretim Kurumları Kanunu",
            questionCount: 3,
            icon: "🎒",
            flashcards: [
                { front: "Özel okullarda yabancı öğrenci oranı", back: "Türkiye Cumhuriyeti uyruklu öğrenci sayısının %30'unu geçemez." },
                { front: "Kurum açma izni süresi", back: "Valilik tarafından belgeler incelenerek 5 iş günü içinde sonuçlandırılır." }
            ],
            questions: [
                { q: "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, aşağıdakilerden hangisi özel okullarda çalıştırılacak personel ile ilgili doğru bir ifadedir?", options: ["Müdürler Bakanlık tarafından atanır.", "Öğretmenler sadece asil kadro ile çalışabilir.", "Resmi okul öğretmenleri özel okullarda ders veremez.", "Yönetici ve öğretmenler için çalışma izni valilikçe düzenlenir.", "Yabancı uyruklu öğretmen çalıştırılamaz."], answer: 3 },
                { q: "5580 sayılı Kanun'a göre, bir özel okulda alınabilecek yabancı uyruklu öğrenci sayısı, T.C. uyruklu öğrenci sayısının en fazla yüzde kaçı kadar olabilir?", options: ["%10", "%15", "%20", "%25", "%30"], answer: 4 },
                { q: "5580 sayılı Kanun'a göre, kurum açma izni talebinin valilikçe reddi halinde, başvuru sahibi bu karara karşı kaç iş günü içinde Bakanlığa itiraz edebilir?", options: ["5 iş günü", "7 iş günü", "10 iş günü", "15 iş günü", "30 iş günü"], answer: 2 }
            ]
        }
    ]
};

// İlerleme takibi için veri yapısı
const initialProgress4 = {
    flashcardsStudied: {},
    quizResults: [],
    totalStudyTime: 0,
    lastStudyDate: null,
    dailyStreak: 0
};

// LocalStorage'dan ilerleme yükle veya başlangıç değerlerini kullan
function loadProgress4() {
    try {
        const saved = localStorage.getItem('subeExamProgress4');
        if (saved) {
            const parsed = JSON.parse(saved);
            return {
                flashcardsStudied: parsed.flashcardsStudied || {},
                quizResults: parsed.quizResults || [],
                totalStudyTime: parsed.totalStudyTime || 0,
                lastStudyDate: parsed.lastStudyDate || null,
                dailyStreak: parsed.dailyStreak || 0
            };
        }
        return { ...initialProgress4 };
    } catch (error) {
        console.error('İlerleme yüklenirken hata:', error);
        return { ...initialProgress4 };
    }
}

// İlerlemeyi kaydet
function saveProgress4(progress) {
    try {
        localStorage.setItem('subeExamProgress4', JSON.stringify(progress));
        console.log('İlerleme kaydedildi');
    } catch (error) {
        console.error('İlerleme kaydedilirken hata:', error);
    }
}

// Dışa aktar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examData4, loadProgress4, saveProgress4 };
}
