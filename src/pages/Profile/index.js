import Handlebars from "handlebars";

import { InfoBlock } from "./components/InfoBlock";
import { ActionsBlock } from "./components/ActionsBlock";
import { infoRows } from "./utils";

import { template } from './profile.tmpl';

export const Profile = () => 
    Handlebars.compile(template)({
        title: 'Профиль',
        info: InfoBlock({ infoRows: infoRows }),
        //actions: ActionsBlock({}),
    });
    