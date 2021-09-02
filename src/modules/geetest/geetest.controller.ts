import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GeetestService } from './geetest.service';
import { Public } from '../common/decorator/public.decorator';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GeetestLib = require('./sdk/geetest_lib');

@Controller('api/v1/geetest')
@ApiTags('GeeTest')
export class GeetestController {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly geetestService: GeetestService,
    private readonly configService: ConfigService,
  ) {}

  @Public()
  @Get('register')
  @ApiResponse({ status: 200, description: 'Successful Login' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async register(): Promise<any> {
    const gtLib = new GeetestLib(
      this.configService.get('GEETEST_ID'),
      this.configService.get('GEETEST_KEY'),
    );
    const digestmod = 'md5';
    const userId = 'test';
    const params = {
      digestmod: digestmod,
      user_id: userId,
      client_type: 'web',
      ip_address: '127.0.0.1',
    };
    const bypasscache = await this.cacheManager.get(
      this.configService.get('GEETEST_BYPASS_STATUS_KEY'),
    );
    // console.log('Key');
    // console.log(bypasscache);
    let result;
    if (bypasscache === 'success') {
      result = await gtLib.register(digestmod, params);
    } else {
      result = await gtLib.localRegister();
    }
    return result.data;
  }
}
