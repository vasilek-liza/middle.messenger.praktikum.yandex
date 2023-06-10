import Handlebars from "handlebars";

import { template } from './not-found.tmpl';

export const NotFound = () => 
    Handlebars.compile(template)();
    