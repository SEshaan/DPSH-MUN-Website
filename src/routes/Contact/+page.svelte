<script lang="ts">
	import HCaptcha from 'svelte-hcaptcha';
	let isSubmitting = false;
	let captcha;
	type data = {
		Name: string;
		Phone: number;
		Email: string;
		Captcha: string;
		Message: string;
	};
	const jsonData: data = {};
	let res = '';
	const collectCaptchaCallback = (token: string) => {
		// console.log(token);
		return (jsonData.Captcha = token.detail.token);
	};

	export function submitForm(e: any) {
		// console.log(e);
		isSubmitting = true;
		res = 'Please wait, submitting...';
		return fetch('/api/contact', {
			body: JSON.stringify(jsonData),
			method: 'POST'
		})
			.then((res) => res.json())
			.then((r) => {
				res = r.message;
				isSubmitting = false;
				captcha.reset();
			});
	}
</script>

<div id="content">
	<div id="con">
		<h1>Contact Us</h1>
		<form on:submit={submitForm}>
			<div class="field_cont">
				<h3>Name</h3>
				<input id="name" type="text" bind:value={jsonData.Name} required={true} />
			</div>
			<div class="field_cont">
				<h3>Email</h3>
				<input id="email" type="email" bind:value={jsonData.Email} required={true} />
			</div>
			<div class="field_cont">
				<h3>Phone</h3>
				<input id="phone" type="number" bind:value={jsonData.Phone} />
			</div>
			<div class="field_cont">
				<h3>Questions/Messages</h3>
				<textarea
					name="messages"
					id="message"
					cols="30"
					rows="2"
					bind:value={jsonData.Message}
					required={true}
				/>
			</div>
			<center class="field_cont">
				<HCaptcha
					sitekey="fc19ae35-5278-4414-a8ca-e3f1f42165f4"
					size="normal"
					on:success={collectCaptchaCallback}
					bind:this={captcha}
				/>
			</center>
			<!-- <div
				id="hcaptcha"
				class="h-captcha"
				data-sitekey="fc19ae35-5278-4414-a8ca-e3f1f42165f4"
				data-callback={collectCaptchaCallback}
				/> -->
			<button disabled={isSubmitting}>Submit →</button>
		</form>
		{res}
	</div>
</div>

<style>
	#content {
		background-color: white;
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url('/contactbg.png');
		background-position: 90% 90%;
		backdrop-filter: blur(4px);
	}
	#con {
		height: 80vh;
		width: auto;
		aspect-ratio: 1/1;
		background-color: #3f4f5e;
		color: #d0bea8;
		text-align: center;
		box-shadow: rgb(63, 63, 63) -4px 4px 16px;
	}
	#con input {
		background: none;
		border: none;
		border-bottom: solid #be965b 1px;
		width: 95%;
		height: 25px;
	}
	#con textarea {
		background: none;
		border: none;
		border-bottom: solid #be965b 1px;
		resize: none;
		width: 95%;
	}
	#con h1 {
		padding: 5%;
	}
	#con h3 {
		font-size: small;
		font-weight: 200;
	}
	#con form {
		width: 60%;
		height: 80%;
		margin: auto;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: start;
	}
	#con .field_cont {
		width: 100%;
		min-height: 10%;
	}
	#con button {
		width: 6rem;
		height: 2rem;
		border: none;
		background-color: #be965b;
		color: white;
		margin: 0 auto 0 auto;
		border-radius: 5%;
	}

	@media (max-width: 800px) {
		#con {
			aspect-ratio: 3/5;
			height: auto;
			width: 70vw;
		}
	}
</style>
