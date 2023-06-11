import Handlebars from "handlebars";

import { InfoBlock } from "./components/InfoBlock";
import { infoRows } from "./utils";

import { template } from './profile.tmpl';
import { ActionsBlock } from "./components/ActionsBlock";

export const Profile = () => 
    Handlebars.compile(template)({
        title: 'Профиль',
        info: InfoBlock({ infoRows: infoRows }),
        //actions: ActionsBlock({}),
    });
    