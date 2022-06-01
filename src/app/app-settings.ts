import { environment } from "src/environments/environment";

const default_ui_url = 'http://localhost:4200/';
const default_api_url = 'htpp://localhost:8000/';

export class AppSettings {
    public ui_url = environment.ui_url || default_ui_url;
    public api_url = environment.api_url || default_api_url;
}