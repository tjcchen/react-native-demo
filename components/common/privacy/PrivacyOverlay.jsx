import { useState } from "react";
import styles from "./privacyoverlay.style";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const privacy = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isShown && (
        <View style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Privacy Terms</Text>
            </View>
            <ScrollView style={styles.scrollView}>
              <Text>
                海外易求职APP应用尊重和保护利用用户的隐私所有的服务。为了向您提供更准确，更人性化的服务，本程序会按照本隐私权政策的规定使用和披露您的个人信息。
                但是海外易求职APP应用将是一个高度的勤勉，审慎义务对待这些信息。除本隐私政策另有规定外，未经您的许可之前，海外易求职APP应用信息将不会被披露或向第三方提供。
                海外易求职APP应用更新本隐私政策时。当您同意海外易求职APP应用服务协议，您将被视为已同意本隐私政策的全部内容。本隐私政策属于服务协议海外易求职APP应用不可分割的一部分。
                {"\n"}
                {"\n"}

                1. 适用范围
                {"\n"}
                a）在您注册本程序帐号时，您根据本程序要求提供的个人注册信息；
                {"\n"}
                b）在您使用本程序网络服务，或访问本程序平台网页时，本程序自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；
                {"\n"}
                c）本程序通过合法途径从商业伙伴处取得的用户个人数据。
                {"\n"}
                {"\n"}
                您了解并同意，以下信息不适用本隐私权政策：
                {"\n"}
                a）您在使用本程序平台提供的搜索服务时输入的关键字信息；
                {"\n"}
                b）本程序收集到的您在本程序发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；
                {"\n"}
                c）违反法律规定或违反本程序规则行为及本程序已对您采取的措施。
                {"\n"}
                {"\n"}

                2. 信息使用
                {"\n"}
                a）本程序不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本程序（含本程序关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。
                {"\n"}
                b）本程序亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何本程序平台用户如从事上述活动，一经发现，本程序有权立即终止与该用户的服务协议。
                {"\n"}
                c）为服务用户的目的，本程序可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本程序合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。
                {"\n"}
                {"\n"}

                3.信息披露
                在下列情况下，海外易求职APP应用将按照法律的规定或全部或者您的个人信息部分的个人意愿予以披露：
                {"\n"}
                a）经您事先同意，向第三方披露；
                {"\n"}
                b）为您提供所要求的产品和服务，而且必须分享您的个人信息提供给第三方;
                {"\n"}
                c）依照法律，行政或司法请求的有关规定，泄露给第三方或者行政，司法;
                {"\n"}
                d）若您出现违反有关法律，法规，规章或相关服务协议的情况下的天使梦，我们需要披露给第三方;
                {"\n"}
                e）如果您是一个合格的知识产权和投诉人提交的投诉，投诉人应要求披露的投诉，使得双方可以处理权利纠纷;
                {"\n"}
                f）海外易求职APP应用根据法律、规章或政策网站认为适当的披露。
                {"\n"}
                {"\n"}

                4.信息存储和交换
                信息和收集将存储在服务器海外易求职APP应用你海外易求职APP应用的信息，这些信息和数据可以被发送到你的国家，地区或海外易求职APP应用收集海外信息和数据的位置和在国外访问，存储和显示。
                {"\n"}
                {"\n"}

                5.信息安全
                {"\n"}
                a）海外易求职APP应用帐户具有安全功能，请保持您的用户名和密码信息。
                海外易求职APP应用通过用户密码加密等安全措施，以确保您的信息不丢失，不被滥用和变造。尽管有上述安全措施，但请注意，没有“绝对安全”的信息网络。
                {"\n"}
                b）当使用网上交易，你不可避免地要交易对手或潜在对手泄露自己的个人信息，如联系方式和邮寄地址。只有在必要的情况下，请妥善保护自己的个人信息提供给他人。如果您发现您的个人信息泄露，
                尤其是海外易求职APP应用的用户名和密码泄漏，请马上联系海外易求职APP应用服务，以便采取相应的措施海外易求职APP应用。
                {"\n"}
                {"\n"}
            
                6.本隐私政策的更改
                {"\n"}
                a）如果决定更改隐私政策，我们会在本政策中、本公司网站中以及我们认为适当的位置发布这些更改，以便您了解我们如何收集、使用您的个人信息，哪些人可以访问这些信息，以及在什么情况下我们会透露这些信息。
                {"\n"}
                b）本公司保留随时修改本政策的权利，因此请经常查看。如对本政策作出重大更改，本公司会通过网站或APP应用通知的形式告知。
                请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是本应用用户名及密码发生泄露，请您立即联络本应用客服，以便本应用采取相应措施。
                {"\n"}
                {"\n"}

                7. 开发者信息
                {"\n"}
                a）开发者名称：陈阳
                {"\n"}
                b）开发者邮箱：tjcchen.engineer@gmail.com
                {"\n"}
                c）开发者ICP备案号：津ICP备2020009047号
              </Text>
            </ScrollView>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={styles.btnCancel} onPress={() => {}}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnConfirm}
                onPress={() => setIsShown(false)}
              >
                <Text>Agree</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default privacy;
