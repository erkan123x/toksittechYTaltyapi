lient.on("guildMemberAdd", member => {
  member.send(
    `:tada: **SelamınAleyküm LegendArrow YOUTUBE #BAKIMDA SUNUCUSUNA HOŞGELDİN BU SUNUCUDA KURALLARI OKUMAK ZORUNLUDUR KURALLARI OKUDUYSAN İYİ EĞLENCELER.**`///bu kısım sunuucuya giren kişiye özelden mesaj atar\n yaparak satır ekleyebilirsiniz ` şu işaretin sonda olmasına dikkat etme şartıyla
  );
});

client.on("guildMemberAdd", async member => {
  try {
    let embed = new Discord.RichEmbed();
    const kullanıcıadı = member.user.username.replace(/\W/g, "");

    await client.channels
      .get("794964054032515073")////////hoş geldin mesajının atılacağı kanal
      .send(
        `:tada: Sunucumuza Hoşgeldin **${member}** 

:tada: Seninle beraber **${
member.guild.memberCount
        }** Kişiyiz !!
\n:tada: Kaydının Yapılması İçin Sesli Odaya Gelip Ses Vermen Gerekli. <@&666425273516032045> \n /////// idyi değiştirmeniz gerekiyor
:tada: **Hesap:** ${
          new Date().getTime() - member.user.createdAt.getTime() <
          45 * 24 * 60 * 60 * 1000
            ? "**Tehlikeli** \:x:"
            : "**Güvenli** \:white_check_mark:"
        }
\n:tada: <@&794565248497483787> Rolündeki Yetkililer Seninle İlgilenecektir.`,////kayıt sorumlusu idsini giriceksiniz 
        new Discord.Attachment(
          "https://media.giphy.com/media/6pfEK1odbmcNi/giphy.gif"/////bunu silebilir ya da başka bir gif ile değiştirbilirsiniz
        )
      );
  } catch (err) {
    console.log(err);
  }
});,
