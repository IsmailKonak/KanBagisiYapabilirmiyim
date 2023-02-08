var question_num = 0;

const questions = [
"Kendinizi iyi ve sağlıklı hissediyor musunuz?",
"18 yaşından büyük ve 60 yaşından küçük müsünüz?",
"Vücut ağırlığınız 50 kilogramın üzerinde mi?",
"Yaptığınız en son kan bağışının üzerinden erkekseniz 3 ay veya daha fazla, kadınsanız 4 ay veya daha fazla süre geçti mi?",
"MI (kalp krizi), kalp yetmezliği, kalp kapakçık anomalisi, ritim bozukluğu ve stent/by pass öykünüz var mı?",
"Kronik bronşit, kronik böbrek ve karaciğer yetmezliğiniz var mı?",
"Siroz, epilepsi gibi süregelen hastalıklara sahip misiniz?",
"Genel olarak tansiyon düşüklüğü ve buna bağlı semptomlarınız; baş ağrısı, baş dönmesi, senkop(bayılma), halsizlik gibi şikayetleriniz var mı?",
"Diyabet hastası mısınız?",
"Otoimmün bir hastalığa sahip misiniz?",
"Hepatit B, Hepatit C, Sifiliz veya HIV (AIDS) geçmişiniz var mı?",
"Kanser ve kemoterapi/radyoterapi öykünüz var mı?",
"Son 12 saat içerisinde alkol tükettiniz mi?",
"Son 48 saat içerisinde antibiyotik aldınız mı?",
"Ateş, grip benzeri; 38 °C üstü ateşle giden grip benzeri tablolarda semptomların bitimi üzerinden 2 hafta geçti mi?",
"Son 12 ay içerisinde size kan, organ veya doku nakli yapıldı mı?",
"Son 12 ay içerisinde akupunktur, botoks, takı için cilt deldirme, saç ekimi veya estetik müdahaleler yaptırdınız mı?",
"Son 12 ay içerisinde dövme, hacamat yaptırdınız mı?",
"Son 12 ay içerisinde hayvan ısırığı nedeni ile kuduz aşısı oldunuz mu?",
"Son diare/ishal geçmişiniz üzerinden 3 gün veya daha fazla süre geçti mi?",
"Son 7 gün içerisinde diş müdahalesi sonucunda kanama gerçekleşti mi?",
"Son 1 gün içerisinde dolgu tedavisi, diş taşı temizliği gibi yüzeysel müdahaleler yapıldı mı?",
"Son birkaç gün içerisinde baş ağrısı/dönmesi yaşadınız mı?",
"Son 3 yıl içerisinde sıtma hastalığına yakalandınız mı?",
"Son 12 ay içerisinde cerrahi bir operasyon geçirdiniz mi?",
"Son 12 ay içerisinde endoskopik veya kolonoskopik muayene yaptırdınız mı?"
]
const true_answers = [true,true,true,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false];

const false_explanation = [
"Kan bağışı yapmadan önce kendinizi iyi ve sağlıklı hissetmeniz gerekmektedir.",
"18-65 yaş aralığındaki bireyler kan bağışçısı adayı olabilir. (19 yaşından gün almak, 65’ini doldurmamak gerekir.) İlk kez kan bağışında bulunacaklar için üst yaş sınırı: 61 yaşından gün almamış olmalı. Düzenli kan bağışçıları için üst yaş sınırı 65 yaşını doldurduktan, 70 yaşından gün alana kadar kan bağış merkezi doktorunun onayı olmak şartıyla yılda en fazla 1 kez olmak üzere kan bağışlayabilir. ",
"Kan bağışçısı adayı olabilmek için 50 kilogramın üzerinde olmanız gerekmektedir.",
"Tam kan bağışında; erkekler 90 günde bir, kadınlar 120 günde bir kan bağışında bulunabilir.",
"MI (kalp krizi), kalp yetmezliği, kalp kapakçık anomalisi, ritim bozukluğu ve stent/by pass öyküsü olan hastalar donör kabul edilmez.",
"Kronik bronşit,kronik böbrek ve karaciğer yetmezliğine sahip bireyler donör olarak kabul edilmezler.",
"Siroz,epilepsi gibi süregelen hastalıklara sahip bireyler kan bağışçısı olamazlar.",
"Genel olarak tansiyon düşüklüğü ve buna bağlı semptomları; baş ağrısı, baş dönmesi, senkop(bayılma), halsizlik yaşamanız durumunda donör olmanız tehlikeye girebilir, bu konuda uzmanlara danışınız.",
"Diyabet(şeker hastalığı):İnsulin kullanıyorsa kan bağışçısı olamazlar",
"Otoimmün hastalığı olanlar kan bağışçısı olamazlar.",
"Hepatit B, Hepatit C, Sifiliz veya HIV (AIDS) geçmişi olanlar hiçbir zaman donör olamazlar.",
"Geçmişte kanser ve kemoterapi/radyoterapi öyküsü bulunan bireylerin kan vermesi sakıncalıdır.",
"Alkol Kullanımı; kan bağışçısı alkolün etkisinde olmamalıdır. Alkol alımını takiben 12 saat sonra kan verebilir.",
"Antibiyotik kullanımı: Son antibiyotik kullanımını takiben 48 saat sonra donör olabilir.",
"Ateş, grip benzeri; 38 °C üstü ateşle giden grip benzeri tablolarda semptomların bitimini izleyen 2 hafta sonra kan bağışı kabul edilir.",
"Kan, organ veya doku nakli yapılan hastalar nakilden 12 ay sonra tekrardan donör olabilirler. Kadavra kaynaklı doku-organ nakli: Böbrek, kalp, karaciğer ve her türlü kadavra doku ve organ nakli olanlar ise ömür boyu kan veremez.",
"Son 12 ay içerisinde akupunktur, botoks, takı için cilt deldirme, saç ekimi veya estetik müdahaleler gibi müdahalelerde bulunulan kişiler kan bağışında bulunamaz",
"Son 12 ay içerisinde dövme, hacamat yaptıran bireyler kan bağışında bulunamaz.",
"Hayvan ısırıkları; evcil ve kuduz şüphesi olmayan hayvanlarda iyileşene kadar beklenir. Diğer hayvanlarda ise ısırığın üzerinden 12 ay geçene kadar beklenir. Kan bağışı sırasında yaranın iyileşmiş olması gereklidir. Kuduz aşısı olmuşsa 12 ay kan bağışçısı olamaz. Kuduz immünglobülini kullanmışsa 12 ay kan bağışçısı olamaz. Aşılama sonrası hayvanın kuduz olmadığı anlaşılırsa; kişi bağış için kabul edilir.",
"Diyare-İshal: Tam iyileşme ve semptomların bitimini takiben 3 gün beklenir.",
"Diş tedavisi kaplama tedavisi, diş çekimi veya yapılan her türlü diş müdahaleleri sırasında kanama oluşmuşsa en az 7 gün süre ile kan bağışı ertelenir. Dolgu tedavisi ya da diş taşı temizliği gibi yüzeysel müdahalelerde kanama yoksa 1 gün süre ile kan bağışı ertelenir.",
"Son birkaç gün içerisinde ağız ve diş ile ilgili bir operasyon geçiren bireyler donör olamazlar.",
"Son birkaç gün içerisinde tansiyon düşüklüğü ve bağlı semptomlar gösteren hastaların donörlüğü tehlikeye girebilir.",
"Sıtma; tedavinin sağlanmasından 3 yıl sonra kan verebilirler.",
"Cerrahi: ameliyatlardan sonra 1 yıl boyunca kan bağışı alınmaz.",
"Endoskopik ve Kolonoskopik muayene yaptıran kişiler 12 ay süre ile kan bağışı yapamazlar."
];
function exit_page(message,question_num){
    document.getElementById("soru_baslik").innerHTML = message;
    document.getElementById("soru_aciklama").innerHTML = false_explanation[question_num];
    document.getElementById("evet_but").style.display = "none";
    document.getElementById("hayir_but").style.display = "none";
}
function update_page(question_num,evet,hayir){
    document.getElementById("soru_baslik").innerHTML = questions[question_num];
    document.getElementById("soru_aciklama").innerHTML = "";
    document.getElementById("evet_but").style.display = "inline";
    document.getElementById("evet_but").innerHTML = evet;
    document.getElementById("hayir_but").style.display = "inline";
    document.getElementById("hayir_but").style.display = hayir;
    document.getElementById("soru_aciklama2").style.display = "none";
}

//update_page(question_num);

function nextquestion(answer){
    if (question_num == 0){
        update_page(question_num,"Evet","Hayır")
    }
    else if (question_num == questions.length){
        document.getElementById("soru_baslik").innerHTML = "Tebrikler kan bağışı yapmak için adaysınız";
        document.getElementById("soru_aciklama").innerHTML = "Testteki sorulara verdiğiniz cevaplara bakılarak muhtemelen kan bağışı yapmanız önünde herhangi bir engel bulunmamaktadır. En doğru bilgiyi Kızılay çadırlarında görevlilerinden alabilirsiniz.";
        document.getElementById("evet_but").style.display = "none";
        document.getElementById("hayir_but").style.display = "none";
    }
    else{
        if (answer == true_answers[question_num-1]){
            update_page(question_num,"Evet","Hayır");
            if (question_num == 14){
              document.getElementById("soru_aciklama").innerHTML = "Eğer son 2 hafta içerisinde ateş ve grip semptomları gösteren bir hastalık geçirmediyseniz 'Evet' e basabilirsiniz.";
            }
            if (question_num == 1){
              document.getElementById("soru_aciklama").innerHTML = "Eğer ki düzenli kan bağışçısı iseniz 60 yerine 65 yaşına kadar da kan bağışında bulunabilirsiniz.";
            }
        }
        else {
            exit_page("Kan bağışı yapmaya uygun değilsiniz",question_num-1);
        }
    }
    question_num +=1;
}
