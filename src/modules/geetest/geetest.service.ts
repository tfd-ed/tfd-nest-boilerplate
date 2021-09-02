import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import * as Axios from 'axios';
@Injectable()
export class GeetestService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {}

  async sendRequest(params) {
    const request_url = this.configService.get('BYPASS_URL');
    let bypass_res;
    try {
      const res = await Axios.default({
        url: request_url,
        method: 'GET',
        timeout: 5000,
        params: params,
      });
      const resBody = res.status === 200 ? res.data : '';
      // console.log('Hello');
      // console.log(resBody);
      bypass_res = resBody['status'];
    } catch (e) {
      bypass_res = '';
    }
    return bypass_res;
  }

  @Cron('10 * * * * *')
  async checkBypassStatus() {
    let bypass_status = await this.sendRequest({
      gt: this.configService.get('GEETEST_ID'),
    });
    // console.log('Status');
    // console.log(bypass_status);
    // console.log('Key');
    // console.log(this.configService.get('GEETEST_BYPASS_STATUS_KEY'));
    if (bypass_status === 'success') {
      await this.cacheManager.set(
        this.configService.get('GEETEST_BYPASS_STATUS_KEY'),
        bypass_status,
        { ttl: 0 },
      );
    } else {
      bypass_status = 'fail';
      await this.cacheManager.set(
        this.configService.get<string>('GEETEST_BYPASS_STATUS_KEY'),
        bypass_status,
        { ttl: 0 },
      );
    }
    // console.log(bypass_status);
  }
}
