import { HomePageConfigInfo } from "./homePageConfigInfo";
import { ImageInfo } from "./imageInfo";
import { VideoInfo } from "./videoInfo";
import { SupportInfo } from "./supportInfo";
import { Feelcustomer } from "./feelcustomer";

export class ConfigInfo {
    logo: string;
    pathlogo: string;
    logoSmall: string;
    pathlogoSmall: string;
    title: string;
    subtitle: string;
    phone: string;
    skype: string;
    zalo:string;
    viber:string;
    facebook: string;
    likeFacebook:string;
    likegoogle:string;
    pageFacebook:string;
    youtube: string;
    companyName: string;
    location: string;
    website: string;
    hotonline: string;
    fax: string;
    power: string;
    email:string;
    homepageConfig: HomePageConfigInfo;
    sliders: ImageInfo[];
    video: VideoInfo[];
    partner: ImageInfo[];
    support: SupportInfo[];
    feelcustomer: Feelcustomer[];
    images: ImageInfo[];
    constructor(){
        this.logo = '';
        this.pathlogo = '';
        this.logoSmall = '';
        this.pathlogoSmall = '';
        this.title = '';
        this.subtitle = '';
        this.phone = '';
        this.skype = '';
        this.facebook = '';
        this.youtube = '';
        this.companyName = '';
        this.location = '';
        this.website = '';
        this.hotonline = '';
        this.fax = '';
        this.power = '';
        this.email = '';
        this.sliders = [];
        this.video=[];
        this.partner = [];
        this.support = [];
        this.feelcustomer = [];
        this.images = [];
        this.zalo='';
        this.viber='';
        this.likeFacebook = '';
        this.likegoogle = '';
        this.pageFacebook = '';
        this.homepageConfig = new HomePageConfigInfo();

    }
}
