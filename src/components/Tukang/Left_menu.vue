<template>
<div class="fixed-sidebar-left">
			<ul class="nav navbar-nav side-nav nicescroll-bar bg-butek">
				<li class="navigation-header">
					<span>Main</span> 
					<i class="zmdi zmdi-more"></i>
				</li>
				<li>
					<router-link to="/dashboard" data-toggle="collapse" data-target="#dashboard_dr">
					<div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text">Dashboard</span></div>
					<div class="clearfix"></div>
					</router-link>
				</li>
				<li><hr class="light-grey-hr mb-10"/></li>
				<li class="navigation-header">
					<span>Master Data</span> 
					<i class="zmdi zmdi-more"></i>
				</li>
				<li>
					<router-link to="/dashboard_pelanggan" data-toggle="collapse" data-target="#ui_dr">
						<div class="pull-left"><i class="zmdi zmdi-accounts-list mr-20"></i><span class="right-nav-text">Pelanggan</span></div>
						<div class="pull-right"></div>
						<div class="clearfix"></div>
					</router-link>
				</li>
				<li></li>
				<li><hr class="light-grey-hr mb-10"/></li>
				<li class="navigation-header">
					<span>Transaksi</span> 
					<i class="zmdi zmdi-more"></i>
				</li>
				<li>
					<router-link to="/dashboard_complain" data-target="#complain">
						<div class="pull-left"><i class="zmdi zmdi-check-circle mr-20"></i><span class="right-nav-text">Complain</span></div>
						<div class="pull-right"></div>
						<div class="clearfix"></div>
					</router-link>
				</li>
				<li>
					<router-link to="/report" data-target="#complain"><div class="pull-left"><i class="zmdi zmdi-reader mr-20"></i><span class="right-nav-text">Report</span></div><div class="pull-right"></div><div class="clearfix"></div></router-link>
				</li>
			</ul>
		</div>
		
</template>
<script>
	export default{
		data(){
		return{
			auth: false
		}
		}
	};
</script>